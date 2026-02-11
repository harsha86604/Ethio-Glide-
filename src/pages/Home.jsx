import { ArrowRight, Globe, ShieldCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-10">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-8 max-w-4xl mx-auto animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Global Thinkers</span>. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Shape the World.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EthioGlide helps Ethiopian and Tigrayan students access Canadian education.
            <br />
            <span className="font-semibold text-foreground">Our Mission:</span> Enable <span className="text-primary font-bold">300 students</span> to access higher education in the next 5 years.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4">
          <a 
            href="#" // Replace with your Google Form URL
            className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all hover:-translate-y-1"
          >
            Start Intake Form
          </a>
          <a 
            href="https://calendar.app.google/9vhRNejDwpZvQ32c6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/5 hover:border-primary transition-all font-medium flex items-center justify-center gap-2 group text-lg"
          >
            Book Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="grid md:grid-cols-3 gap-8 w-full">
        {[
          { 
            icon: <HeartHandshake size={40} className="text-blue-400" />,
            title: "Honest Guidance", 
            desc: "Transparent advice focused on your long-term success, not just placement. We value integrity above all." 
          },
          { 
            icon: <Globe size={40} className="text-purple-400" />, 
            title: "Community First", 
            desc: "Built by the diaspora, for the diaspora. We understand your journey and the unique challenges you face." 
          },
          { 
            icon: <ShieldCheck size={40} className="text-green-400" />, 
            title: "Full Support", 
            desc: "From program matching to settlement in Canada. We are with you every step of the way." 
          }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all hover:bg-card/60 hover:-translate-y-2 shadow-xl flex flex-col items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{feature.icon}</div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>
      
      {/* CTA Strip */}
      <section className="rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/20 p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your journey?</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Don't just escape the world—prepare to shape it. Join the next generation of global thinkers.
          </p>
          <a 
            href="#" 
            className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
