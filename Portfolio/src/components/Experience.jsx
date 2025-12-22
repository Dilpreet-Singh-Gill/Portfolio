export default function Experience() {
  return (
    <section className="px-6 sm:px-16 py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Experience
      </h2>

      <div className="bg-white/5 backdrop-blur-xl
                      border border-white/10
                      rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold">
          Web Developer Intern
        </h3>
        <p className="text-cyan-400 text-sm">
          BoltLabs · May 2025 – July 2025
        </p>

        <ul className="list-disc ml-5 mt-4 text-gray-300 text-sm space-y-1">
          <li>Built React frontend with Express + Prisma backend</li>
          <li>JWT authentication and role-based access</li>
          <li>PostgreSQL integration</li>
        </ul>
      </div>
    </section>
  );
}
