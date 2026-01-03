import TechIcon from "./TechIcon";

const techCategories = [
  {
    title: "Programming Languages",
    techs: ["c", "cplusplus", "javascript", "python"],
  },
  {
    title: "Frontend",
    techs: ["html5", "css3", "tailwindcss", "react", "nextjs"],
  },
  {
    title: "Backend",
    techs: ["nodejs", "express", "mongodb", "postgresql"],
  },
  {
    title: "Tools & Platforms",
    techs: ["git", "github", "vscode", "vercel", "figma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to build modern, scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="font-display text-xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.techs.map((tech) => (
                  <TechIcon key={tech} name={tech} size="lg" showLabel />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <h3 className="font-display text-xl font-bold mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures",
              "Algorithms",
              "REST APIs",
              "JWT Authentication",
              "OOP",
              "Problem Solving",
              "Team Leadership",
              "Event Management",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
