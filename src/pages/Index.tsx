import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SignInDialog } from "@/components/SignInDialog";
import { SignUpDialog } from "@/components/SignUpDialog";
import { TypeWriter } from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, BarChart3, Clock, Activity, Database, Gauge, Wifi } from "lucide-react";

const Index = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header onSignInClick={() => setSignInOpen(true)} onSignUpClick={() => setSignUpOpen(true)} />

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Power Distribution
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                <TypeWriter text="Reimagined" delay={150} />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              CommuteX delivers cutting-edge electricity distribution management for modern substations. Monitor, control, and optimize your power grid with real-time intelligence.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="shadow-glow" onClick={() => setSignUpOpen(true)}>
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="animate-scale-in">
            <HeroCarousel />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Zap,
              title: "Real-time Monitoring",
              description: "Track power distribution across all substations instantly",
            },
            {
              icon: Shield,
              title: "Enhanced Security",
              description: "Military-grade encryption for all your sensitive data",
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              description: "Deep insights into power consumption and efficiency",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description: "Round-the-clock technical assistance when you need it",
            },
            {
              icon: Activity,
              title: "Load Balancing",
              description: "Automatic load distribution for optimal grid performance",
            },
            {
              icon: Database,
              title: "Data Management",
              description: "Centralized storage with instant access to historical data",
            },
            {
              icon: Gauge,
              title: "Performance Metrics",
              description: "Comprehensive KPIs and efficiency tracking dashboards",
            },
            {
              icon: Wifi,
              title: "IoT Integration",
              description: "Seamless connectivity with smart grid devices and sensors",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-gradient-primary border-0 shadow-card">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Power Grid?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of substations already using CommuteX to optimize their electricity distribution systems.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => setSignUpOpen(true)}
          >
            Start Free Trial
          </Button>
        </Card>
      </main>

      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
      <SignUpDialog open={signUpOpen} onOpenChange={setSignUpOpen} />
    </div>
  );
};

export default Index;
