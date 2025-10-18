import { Globe, Server, Wrench, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom-built, responsive websites tailored to your business needs. Modern design that converts visitors into customers.",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description: "Reliable, fast, and secure hosting solutions. Keep your website running smoothly with 99.9% uptime guarantee.",
  },
  {
    icon: Wrench,
    title: "Website Management",
    description: "Ongoing maintenance, updates, and support. Focus on your business while we handle the technical details.",
  },
  {
    icon: Globe,
    title: "Digital Presence",
    description: "Complete online visibility strategy. SEO optimization, social media integration, and brand building.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to establish and grow your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent w-fit mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
