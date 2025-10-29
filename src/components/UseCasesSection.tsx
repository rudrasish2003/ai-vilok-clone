const useCases = [
  {
    category: "Recruitment",
    items: [
      "AI Candidate Verification and Follow-up Agent",
      "AI Interview Scheduling and Coordination Agent",
      "AI Screening & Information Verification Agent"
    ]
  },
  {
    category: "Employee Experience",
    items: [
      "AI Wellness and Mentorship Buddy",
      "HR Helpline Voice Assistant",
      "Peer Recognition and Culture Voice Agent"
    ]
  },
  {
    category: "Operations",
    items: [
      "Voice-Based Shift & Roster Management Agent",
      "Voice-Based Temporary Assignment & Contract Renewal Agent",
      "Voice-Based Benefit Enrollment & Change Confirmation Agent"
    ]
  },
  {
    category: "Manager Enablement",
    items: [
      "AI Talent Review & Manager Advisory Voice Agent",
      "Voice-Based Learning & Skill Path Guidance Agent",
      "Voice-Based Performance Review Preparation Assistant"
    ]
  },
  {
    category: "Enterprise Communication",
    items: [
      "Voice-Based Employee Grievance Capture & Triage Agent",
      "Voice-Based Workplace Relocation & Transfer Confirmation Agent",
      "AI Emotional Consultant and Growth Advisor"
    ]
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for HR & Work Tech</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vilok.ai powers 15 real-world Agentic Voice AI use cases across HR, Learning, and Operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-background rounded-lg p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">{useCase.category}</h3>
              <ul className="space-y-3">
                {useCase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
