import { Mic, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural Voice Interface",
    description: "Communicate with AI using everyday language, making technology accessible to everyone in your organization.",
    label: "Human-First"
  },
  {
    icon: Settings,
    title: "Intelligent Automation",
    description: "Streamline repetitive HR tasks while maintaining the human touch your employees expect.",
    label: "Smart & Efficient"
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "Works harmoniously with your existing systems, enhancing rather than replacing your current workflows.",
    label: "Plug & Play"
  }
];

const WhatIsSection = () => {
  return (
    <section id="what-we-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What Is <span className="text-primary">Vilok.ai</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vilok.ai is Loka Viveka's Agentic Voice AI platform designed to help organisations automate HR and people workflows through natural, human-like voice interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-all border-2 border-transparent hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <span className="inline-block text-sm font-semibold text-primary">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
