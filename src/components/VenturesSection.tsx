import { Mic, Rocket, Handshake } from "lucide-react";

const ventures = [
  {
    icon: Mic,
    title: "Vilok.ai",
    description: "Agentic Voice AI platform for HR and people operations automation"
  },
  {
    icon: Rocket,
    title: "Future Ventures",
    description: "More innovative HR Tech solutions coming soon to transform workplace experiences"
  },
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description: "Collaborate with us to build the next generation of people-first technology"
  }
];

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Ventures</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Loka Viveka builds and incubates innovative HR Tech and Work Tech solutions that transform how organizations work with their people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <venture.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{venture.title}</h3>
              <p className="text-muted-foreground">{venture.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
