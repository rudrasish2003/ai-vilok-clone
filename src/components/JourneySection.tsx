const steps = [
  { number: "1", title: "Pilot" },
  { number: "2", title: "Configure" },
  { number: "3", title: "Deploy" },
  { number: "4", title: "Improve" }
];

const JourneySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementation Journey</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
