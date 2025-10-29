import { Users, Zap, Lock, Link, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Human-Centric Design",
    description: "Built for natural conversation and intuitive interaction"
  },
  {
    icon: Zap,
    title: "Action-Oriented AI",
    description: "Goes beyond listening to actually execute tasks"
  },
  {
    icon: Lock,
    title: "Data Secure & Compliant",
    description: "Enterprise-grade security with full compliance"
  },
  {
    icon: Link,
    title: "Seamless Integration",
    description: "Works with your existing HR and work tech stack"
  },
  {
    icon: TrendingUp,
    title: "Always Improving",
    description: "Learns and adapts to your organisation's needs"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Organisations Choose Vilok.ai</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
