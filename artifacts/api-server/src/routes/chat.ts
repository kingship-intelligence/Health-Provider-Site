import { Router, type IRouter } from "express";
import websiteContext from "../data/website-context.json";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const router: IRouter = Router();

const fallbackReply =
  "I can help with appointments, services, accepted insurance, work hours, providers, and contact details. For urgent medical concerns, please call 911 or go to the nearest emergency room.";
const websiteContextText = JSON.stringify(websiteContext);

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ChatMessage>;
  return (
    (candidate.role === "assistant" || candidate.role === "user") &&
    typeof candidate.text === "string" &&
    candidate.text.trim().length > 0
  );
}

router.post("/chat", async (req, res): Promise<void> => {
  const messages: ChatMessage[] = Array.isArray(req.body?.messages)
    ? req.body.messages.filter(isChatMessage).slice(-10)
    : [];

  if (messages.length === 0) {
    res.status(400).json({ error: "At least one chat message is required." });
    return;
  }

  const apiKey = process.env["OPENAI_API_KEY"];

  if (!apiKey) {
    req.log.warn("OPENAI_API_KEY is not configured");
    res.json({ reply: fallbackReply });
    return;
  }

  try {
    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env["OPENAI_CHAT_MODEL"] ?? "gpt-4o-mini",
        temperature: 0.3,
        max_tokens: 220,
        messages: [
          {
            role: "system",
            content:
              "You are Restoration LLC's website assistant for a mental health provider site. Answer briefly and warmly using only the website context below. Help with appointments, services, providers, insurance, contact information, and hours. Do not provide diagnosis, treatment plans, medication advice, crisis counseling, or emergency guidance beyond telling users to call 911 or go to the nearest emergency room for emergencies. If the answer is not in the context, say you are not sure and direct the user to contact Restoration LLC.",
          },
          {
            role: "system",
            content: `Website context JSON: ${websiteContextText}`,
          },
          ...messages.map((message) => ({
            role: message.role,
            content: message.text,
          })),
        ],
      }),
    });

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      req.log.error({ status: openAiResponse.status, errorText }, "OpenAI chat request failed");
      res.status(502).json({ reply: fallbackReply });
      return;
    }

    const data = (await openAiResponse.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content?.trim();

    res.json({ reply: reply || fallbackReply });
  } catch (err) {
    req.log.error({ err }, "Failed to generate chatbot response");
    res.status(502).json({ reply: fallbackReply });
  }
});

export default router;
