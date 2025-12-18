import { motion } from "framer-motion";

const projects = [
  {
    title: "BoltLabs Platform",
    tech: "React, Express, PostgreSQL, Prisma, JWT",
    desc: "Full-stack platform for small business solutions"
  },
  {
    title: "Blog Website",
    tech: "React, Tailwind, Express, MongoDB",
    desc: "CRUD blogs with image upload"
  },
  {
    title: "Quiz Application",
    tech: "HTML, CSS, JavaScript, Groq API",
    desc: "AI-generated quiz with real-time scoring"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 sm:px-16 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 p-6 rounded-xl mb-10 sticky top-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">{p.title}</h3>
          <p className="text-purple-400 mt-1">{p.tech}</p>
          <p className="text-gray-300 mt-3">{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
