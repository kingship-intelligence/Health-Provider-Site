import { Link } from "wouter";

const links = [
  { href: "/providers", label: "Providers" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-medium text-primary">Restoration LLC</span>
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
