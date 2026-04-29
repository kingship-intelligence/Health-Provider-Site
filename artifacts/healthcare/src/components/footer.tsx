import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-medium text-primary mb-4">Meridian Health</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A modern multi-specialty healthcare network providing warm, patient-centered care in your neighborhood.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/providers" className="text-muted-foreground hover:text-primary transition-colors">Our Providers</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/appointments" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">Health Insights</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Emergency</h4>
            <p className="text-sm text-muted-foreground mb-2">
              If you are experiencing a medical emergency, please call 911 immediately or go to the nearest emergency room.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Meridian Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
