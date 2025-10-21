const faqs = [
  {
    question: "What is Rozmate?",
    answer: "Rozmate is an all-in-one technology platform that connects job seekers with employers across all segments of the Indian workforce, while also handling secure payments and ensuring legal compliance. Think of it as a hybrid between a job portal like Naukri.com, a freelance marketplace like Upwork, and a payroll service provider.",
  },
  {
    question: "Who is Rozmate for?",
    answer: "Rozmate serves all four major employment categories: Blue Collar (laborers, drivers), White Collar (professionals, office staff), Pink Collar (nurses, beauticians), and No Collar (freelancers, gig workers).",
  },
  {
    question: "How does it work?",
    answer: "It's a simple process: 1. <strong>Onboard:</strong> Register as a 'Worker' or 'Employer'. 2. <strong>Connect:</strong> Employers post jobs, and workers apply or get matched. 3. <strong>Work:</strong> The job is completed. 4. <strong>Pay:</strong> The employer pays Rozmate, and we securely pay the worker, minus a small fee.",
  },
  {
    question: "What makes Rozmate different?",
    answer: "Three things: 1. It's an <strong>all-in-one</strong> platform for all job types. 2. It has <strong>integrated payments</strong> to prevent delays. 3. It handles <strong>tax and legal compliance</strong> (GST, TDS, etc.) automatically.",
  },
  {
    question: "What are the fees?",
    answer: "Rozmate charges freelancers only 1-2% commission, which is significantly lower than the 10-20% charged by other platforms.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-muted text-muted-foreground">
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Advice and answers from the our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 cursor-pointer group-hover:text-primary transition-colors duration-300">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
