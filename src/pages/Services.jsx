import { Check, GraduationCap, FileText, Plane, Users, Search } from "lucide-react";

const services = [
  { icon: <GraduationCap/>, title: "School & Program Matching", desc: "We find the best Canadian institutions that match your academic background and career goals." },
  { icon: <FileText/>, title: "Study Permit Preparation", desc: "Work with accredited immigration consultants to prepare your study permit application properly." },
  { icon: <Plane/>, title: "Settlement Support", desc: "Guidance on finding housing, banking, and navigating life in Canada after arrival." },
  { icon: <Users/>, title: "Family Visa Support", desc: "Assistance for family members accompanying or visiting students." },
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto py-10 flex flex-col gap-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive support for your educational journey to Canada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-card/30 border border-white/10 hover:border-primary/50 transition-all hover:bg-card/50 flex gap-5">
            <div className="mt-1 p-3 h-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              {s.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
        
      {/* Phase 2 Placeholder */}
      <div className="p-8 rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-full bg-white/10"><Search size={32} /></div>
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              Scholarship Search AI
              <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full border border-primary/20">Coming Soon</span>
            </h3>
            <p className="text-muted-foreground mt-1">Automated RAG-based assistant to find global scholarships for you.</p>
          </div>
        </div>
        <button disabled className="px-6 py-3 rounded-full bg-white/10 text-muted-foreground cursor-not-allowed font-medium">
          Access Beta (Phase 2)
        </button>
      </div>
    </div>
  );
}
