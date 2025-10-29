const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Vilok.ai
            </a>
            <p className="text-muted-foreground mt-2">
              Agentic Voice AI for the Future of Work
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <a href="#what-we-do" className="text-muted-foreground hover:text-primary transition-colors">
              What We Do
            </a>
            <a href="#who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
              Who We Are
            </a>
            <a href="#partner" className="text-muted-foreground hover:text-primary transition-colors">
              Partner With Us
            </a>
            <a href="#ventures" className="text-muted-foreground hover:text-primary transition-colors">
              Our Ventures
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vilok.ai by Loka Viveka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
