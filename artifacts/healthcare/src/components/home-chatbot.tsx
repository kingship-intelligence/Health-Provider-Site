import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Bot, CalendarDays, MessageCircle, Minus, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const quickPrompts = [
  "How do I request an appointment?",
  "What services do you offer?",
  "Do you accept insurance?",
  "What are your hours?",
];

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi, I am Restoration's virtual helper. I can point you toward appointments, services, insurance, hours, and contact information.",
  },
];

const fallbackReply =
  "I can help with appointments, services, accepted insurance, work hours, providers, and contact details. For urgent medical concerns, please call 911 or go to the nearest emergency room.";

function ChatMessageContent({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return <>{message.text}</>;
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ ...props }) => (
          <a className="font-medium text-primary underline underline-offset-2" target="_blank" rel="noreferrer" {...props} />
        ),
        code: ({ ...props }) => (
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]" {...props} />
        ),
        ol: ({ ...props }) => <ol className="ml-4 list-decimal space-y-1" {...props} />,
        p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
        strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
        ul: ({ ...props }) => <ul className="ml-4 list-disc space-y-1" {...props} />,
      }}
    >
      {message.text}
    </ReactMarkdown>
  );
}

export function HomeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();

    if (!trimmed || isThinking) {
      return;
    }

    const outgoingMessages: ChatMessage[] = [
      ...messages,
      {
        id: messages.length + 1,
        role: "user",
        text: trimmed,
      },
    ];

    setMessages(outgoingMessages);
    setMessage("");
    setIsOpen(true);
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: outgoingMessages.map(({ role, text }) => ({ role, text })),
        }),
      });
      const data = (await response.json()) as { reply?: string };

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: currentMessages.length + 1,
          role: "assistant",
          text: data.reply?.trim() || fallbackReply,
        },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: currentMessages.length + 1,
          role: "assistant",
          text: fallbackReply,
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(message);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(message);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] flex-col items-end">
      {isOpen ? (
        <div className="w-[min(24rem,calc(100vw-2.5rem))] overflow-hidden rounded-3xl border bg-card text-card-foreground shadow-2xl">
          <div className="flex items-start justify-between gap-4 bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/15">
                <Bot className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-medium">Restoration Helper</h2>
                <p className="text-xs text-primary-foreground/80">Answers common site questions</p>
              </div>
            </div>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="size-8 rounded-full text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chatbot"
            >
              <Minus className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto bg-muted/30 p-4">
            {messages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={
                  chatMessage.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-sm text-primary-foreground"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-4 py-2 text-sm shadow-sm"
                }
              >
                <ChatMessageContent message={chatMessage} />
              </div>
            ))}
            {isThinking ? (
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                Thinking...
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-3 border-t p-4">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => void sendMessage(prompt)}
                  disabled={isThinking}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form className="flex items-end gap-2" onSubmit={handleSubmit}>
              <Textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="max-h-28 min-h-11 resize-none rounded-2xl bg-background"
                aria-label="Chat message"
                disabled={isThinking}
              />
              <Button type="submit" size="icon" className="size-11 shrink-0 rounded-full" aria-label="Send message" disabled={isThinking}>
                <Send className="size-4" aria-hidden="true" />
              </Button>
            </form>

            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/appointments" className="inline-flex items-center gap-1 text-primary hover:underline">
                <CalendarDays className="size-3" aria-hidden="true" />
                Request appointment
              </Link>
              <span className="text-muted-foreground">Not for emergencies or medical diagnosis.</span>
            </div>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          className="h-14 rounded-full px-5 shadow-xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Chat with us
        </Button>
      )}
    </div>
  );
}
