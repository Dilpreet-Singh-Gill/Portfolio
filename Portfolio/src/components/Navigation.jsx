import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors"
        >
          DSG
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "Skills", "Resume", "Contact"].map((item) => (
            <Button
              key={item}
              variant="nav"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={() => scrollToSection("contact")}>
          Hire Me
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
