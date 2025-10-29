import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Empowering Workflows Through Voice
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Agentic Voice AI that listens, acts, and learns — built to transform HR and people operations.
        </p>
        

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg" asChild>
          <Link to="/contact">BOOK A DEMO</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
