import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold">DSG</span>
            <span className="text-muted-foreground">
              © {currentYear} Dilpreet Singh Gill
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Dilpreet-Singh-Gill", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dilpreet2005/", label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
