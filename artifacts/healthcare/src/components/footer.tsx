import { Link } from "wouter";

const quickLinks = [
  { href: "/providers", label: "Providers" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: "in" },
  { href: "https://www.instagram.com", label: "Instagram", icon: "ig" },
  { href: "https://www.facebook.com", label: "Facebook", icon: "f" },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-medium text-primary mb-4">Restoration LLC</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A modern psychiatry clinic offering thoughtful, unhurried mental health care for adults, teens, and children.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Clinic</h4>
            <p className="text-sm text-muted-foreground">
              412 Linden Avenue
              <br />
              Suite 200
              <br />
              North Park, OR 97214
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              (503) 555-0148
              <br />
              hello@restorationllc.com
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Restoration LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
