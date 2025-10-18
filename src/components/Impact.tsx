import { GraduationCap, Bus, Briefcase } from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Tech Academy",
    description: "Train young people in essential digital skills including web development, data analytics, cybersecurity, and UI/UX design. Preparing the next generation to thrive in the modern digital world.",
  },
  {
    icon: Bus,
    title: "Gospel Transportation",
    description: "Free bus services to and from Canaanland, supporting worshippers and making church accessibility easier for all. Spreading the love of Christ through practical service.",
  },
  {
    icon: Briefcase,
    title: "Skills Empowerment",
    description: "Free skills acquisition programs for young converts and unemployed youths. Helping them learn practical trades, develop self-sustaining careers, and grow in both skill and faith.",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Beyond Business</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming lives and communities through technology, education, and faith-based service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent w-fit">
                  <initiative.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{initiative.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
