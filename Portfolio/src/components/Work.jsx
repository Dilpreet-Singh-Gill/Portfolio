import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BoltLabs",
    category: "Full-Stack Platform",
    description:
      "Scalable web platform for small businesses with React.js frontend, Express.js + Prisma backend, and JWT-based role authentication.",
    techStack: ["react", "express", "postgresql", "tailwindcss"],
    period: "May 2025 – July 2025",
  },
  {
    title: "Blog Website",
    category: "Full-Stack Application",
    description:
      "Full-stack blogging platform with CRUD operations, image upload functionality, and custom backend storage solutions.",
    techStack: ["react", "nodejs", "express", "mongodb"],
    period: "Feb 2025 – April 2025",
  },
  {
    title: "Quiz Application",
    category: "Interactive Web App",
    description:
      "AI-powered quiz application with Groq API integration for dynamic question generation and real-time scoring.",
    techStack: ["html5", "css3", "javascript"],
    period: "Nov 2024 – Dec 2024",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of projects demonstrating full-stack development skills
            and problem-solving capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              category={project.category}
              description={project.description}
              techStack={project.techStack}
              period={project.period}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
