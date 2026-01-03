import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-primary font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Full Stack Web Developer
          </p>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dilpreet Singh
            <span className="block gradient-text">Gill</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            B.Tech IT student at SGSITS, Indore. Passionate about building scalable
            web applications and solving complex problems through code.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" onClick={scrollToWork}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}>
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
