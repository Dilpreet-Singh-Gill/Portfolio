import { motion } from "framer-motion";

const projects = [
  {
    title: "BoltLabs Platform",
    tech: "React · Express · PostgreSQL · Prisma",
    desc: "Scalable full-stack platform for small businesses",
  },
  {
    title: "Blog Website",
    tech: "React · Tailwind · MongoDB",
    desc: "Full CRUD blogging platform with image upload",
  },
  {
    title: "Quiz Application",
    tech: "JavaScript · Groq API",
    desc: "AI-powered quiz with real-time scoring",
  },
];

export default function Projects() {
  return (
    <section className="px-6 sm:px-16 py-16">
      <h2 className="text-2xl font-semibold mb-12">
        Projects
      </h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="bg-white/5 backdrop-blur-xl
                     border border-white/10
                     rounded-2xl p-7 shadow-xl
                     mb-8 sticky top-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-cyan-400 text-sm mt-1">{p.tech}</p>
          <p className="text-gray-300 text-sm mt-3">{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
