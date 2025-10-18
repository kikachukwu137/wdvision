import { Target, Compass } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About WDVision Tech</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              WDVision Tech is a forward-thinking technology company committed to helping 
              startups and small businesses build, host, and manage their websites — giving 
              them a strong digital presence and positioning them for global growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a world where startups and small businesses can thrive through 
                    accessible technology — empowering them with global visibility and growth. 
                    We envision raising a generation of tech-driven youths through education 
                    and empowerment, combining skill development with kingdom values to make 
                    lasting impact in society.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Compass className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Empower businesses with strong online presence</li>
                    <li>• Provide digital skill training through our tech academy</li>
                    <li>• Promote the gospel through free transportation services</li>
                    <li>• Uplift lives through skill empowerment programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
