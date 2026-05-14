import { Link } from "wouter";
import restorationLogo from "../../../../img/Restoration.png";

const links = [
  { href: "/providers", label: "Providers" },
  { href: "/services", label: "Services" },

  { href: "/insights", label: "Insights" },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={restorationLogo} alt="Restoration LLC Behavioral Health Services logo" className="h-28 w-auto max-w-[460px] object-contain" />
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/appointments" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Request Appointment
        </Link>
      </div>
    </header>
  );
}
