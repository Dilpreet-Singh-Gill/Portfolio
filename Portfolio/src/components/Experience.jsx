export default function Experience() {
  return (
    <section className="min-h-screen px-6 sm:px-16 py-20">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">Web Developer Intern</h3>
        <p className="text-purple-400">BoltLabs</p>
        <p className="text-gray-400 text-sm">May 2025 – July 2025</p>
        <ul className="list-disc ml-6 mt-4 text-gray-300">
          <li>Built React frontend with Express + Prisma backend</li>
          <li>Implemented JWT authentication & role-based access</li>
          <li>Used PostgreSQL for structured data management</li>
        </ul>
      </div>
    </section>
  );
}
