const LINKS = {
  intakeForm: "https://forms.gle/YOUR_FORM_LINK",
  calendar: "https://calendar.app.google/9vhRNejDwpZvQ32c6",
  whatsapp: "https://chat.whatsapp.com/YOUR_WHATSAPP_LINK",
  telegram: "https://t.me/YOUR_TELEGRAM_CHANNEL",
};

export default function Resources() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        Resources
      </h1>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Start Your Application
          </h2>
          <a
            href={LINKS.intakeForm}
            target="_blank"
            className="text-blue-600 underline"
          >
            Complete Intake Form
          </a>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Book a Consultation
          </h2>
          <a
            href={LINKS.calendar}
            target="_blank"
            className="text-blue-600 underline"
          >
            Schedule a 30-minute Call
          </a>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Join Our Community
          </h2>
          <div className="space-y-2">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              className="block text-blue-600 underline"
            >
              WhatsApp Group
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              className="block text-blue-600 underline"
            >
              Telegram Channel
            </a>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Scholarship Search
          </h2>
          <p className="text-muted-foreground">
            AI-powered scholarship search assistant coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
