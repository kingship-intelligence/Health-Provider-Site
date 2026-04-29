import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/providers", label: "Providers" },
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Locations" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-medium text-primary">Meridian Health</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.startsWith(link.href) ? "text-primary" : "text-muted-foreground"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/appointments">
            <Button>Request Appointment</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
