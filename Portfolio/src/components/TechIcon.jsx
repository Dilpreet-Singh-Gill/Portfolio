const techData = {
  react: { icon: "react", label: "React", color: "#61DAFB" },
  nextjs: { icon: "nextjs", label: "Next.js", color: "#ffffff" },
  nodejs: { icon: "nodejs", label: "Node.js", color: "#339933" },
  express: { icon: "express", label: "Express.js", color: "#ffffff" },
  mongodb: { icon: "mongodb", label: "MongoDB", color: "#47A248" },
  postgresql: { icon: "postgresql", label: "PostgreSQL", color: "#4169E1" },
  tailwindcss: { icon: "tailwindcss", label: "Tailwind CSS", color: "#06B6D4" },
  javascript: { icon: "javascript", label: "JavaScript", color: "#F7DF1E" },
  typescript: { icon: "typescript", label: "TypeScript", color: "#3178C6" },
  html5: { icon: "html5", label: "HTML5", color: "#E34F26" },
  css3: { icon: "css3", label: "CSS3", color: "#1572B6" },
  python: { icon: "python", label: "Python", color: "#3776AB" },
  c: { icon: "c", label: "C", color: "#A8B9CC" },
  cplusplus: { icon: "cplusplus", label: "C++", color: "#00599C" },
  git: { icon: "git", label: "Git", color: "#F05032" },
  github: { icon: "github", label: "GitHub", color: "#ffffff" },
  vscode: { icon: "vscode", label: "VS Code", color: "#007ACC" },
  figma: { icon: "figma", label: "Figma", color: "#F24E1E" },
  vercel: { icon: "vercel", label: "Vercel", color: "#ffffff" },
  prisma: { icon: "prisma", label: "Prisma", color: "#2D3748" },
};

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-14 h-14",
};

const containerClasses = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3",
};

const TechIcon = ({ name, size = "md", showLabel = false }) => {
  const tech = techData[name];

  if (!tech) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2 group/icon">
      <div
        className={`${containerClasses[size]} rounded-xl bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110`}
      >
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
          alt={tech.label}
          className={`${sizeClasses[size]} object-contain`}
          onError={(e) => {
            e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
          }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-muted-foreground group-hover/icon:text-foreground transition-colors">
          {tech.label}
        </span>
      )}
    </div>
  );
};

export default TechIcon;
