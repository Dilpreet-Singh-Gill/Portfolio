import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BoltLabs",
    category: "Full-Stack Platform",
    description:
      "Scalable web platform for small businesses with React.js frontend, Express.js + Prisma backend, and JWT-based role authentication.",
    techStack: ["react", "express", "postgresql", "tailwindcss"],
    period: "May 2025 – July 2025",
    link: "https://www.bolt-labs.co.in/",
  },
  {
    title: "Blog Website",
    category: "Full-Stack Application",
    description:
      "Full-stack blogging platform with CRUD operations, image upload functionality, and custom backend storage solutions.",
    techStack: ["react", "nodejs", "express", "mongodb"],
    period: "Feb 2025 – April 2025",
    link: "https://github.com/Dilpreet-Singh-Gill/Blog-App",
  },
  {
    title: "Quiz Application",
    category: "Interactive Web App",
    description:
      "AI-powered quiz application with dynamic question generation and real-time scoring.",
    techStack: ["html5", "css3", "javascript"],
    period: "Nov 2024 – Dec 2024",
    link: "https://github.com/Dilpreet-Singh-Gill/Quiz-Platform",
  },
  {
    title: "HackIndore 3.0 Website",
    category: "Hackathon Event Website",
    description:
      "Official website for HackIndore 3.0 featuring event details, timelines, sponsor highlights, and a responsive UI.",
    techStack: ["react", "tailwindcss", "javascript"],
    period: "2025",
    link: "https://hackindore.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of projects demonstrating full-stack development skills
            and problem-solving capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
