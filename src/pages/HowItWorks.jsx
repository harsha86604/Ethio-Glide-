export default function HowItWorks() {
  const steps = [
    {
      title: "Visit EthioGlide",
      description:
        "Students begin by visiting the EthioGlide website to learn about our services.",
    },
    {
      title: "Complete Intake Form",
      description:
        "Fill out a short intake form with your academic background, goals, and support needs.",
    },
    {
      title: "Application Review",
      description:
        "Our team reviews your information and confirms if you are a good fit for our services.",
    },
    {
      title: "Document Upload",
      description:
        "Once confirmed, you receive a secure folder to upload required documents.",
    },
    {
      title: "Book Consultation",
      description:
        "Schedule a 30-minute consultation to discuss next steps and timelines.",
    },
    {
      title: "Ongoing Support",
      description:
        "We guide you through admissions, study permits, and settlement preparation.",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">
        How It Works
      </h1>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-background"
          >
            <h2 className="text-xl font-semibold mb-2">
              {index + 1}. {step.title}
            </h2>
            <p className="text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
