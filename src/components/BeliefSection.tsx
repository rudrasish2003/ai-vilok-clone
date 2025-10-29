import { Mic } from "lucide-react";

const BeliefSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mic className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Voice-powered AI that connects, understands, and transforms your HR workflows
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Belief</h2>
          <p className="text-lg text-muted-foreground">
            Voice is the most natural interface for humans — and now, for organisations too. With Vilok.ai, voice becomes your team's most efficient co-worker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
