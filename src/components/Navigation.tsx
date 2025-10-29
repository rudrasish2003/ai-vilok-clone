import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Vilok.ai
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#what-we-do" className="text-foreground hover:text-primary transition-colors">
              What We Do
            </a>
            <a href="#who-we-are" className="text-foreground hover:text-primary transition-colors">
              Who We Are
            </a>
            <a href="#partner" className="text-foreground hover:text-primary transition-colors">
              Partner With Us
            </a>
            <a href="#ventures" className="text-foreground hover:text-primary transition-colors">
              Our Ventures
            </a>
          </div>

          <div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
