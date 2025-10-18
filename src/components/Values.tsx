import { Award, Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality in every project and service",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "Creating opportunities for growth and self-reliance",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building with honesty, transparency, and faith-based principles",
  },
  {
    icon: Heart,
    title: "Service",
    description: "Using technology and compassion to impact lives positively",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously evolving to meet global tech standards",
  },
];

const Values = () => {
  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
