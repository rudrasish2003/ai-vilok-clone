import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you're building or leading a people-first organisation and want to explore the power of Agentic Voice AI, let's connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              BOOK A DEMO
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Write to sakshi@lokaviveka.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
