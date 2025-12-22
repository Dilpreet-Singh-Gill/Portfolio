import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT: NAME & ROLE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Dilpreet
            <br />
            <span className="text-cyan-400">Singh Gill</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-md">
            Full-Stack Web Developer focused on building scalable and
            modern web applications.
          </p>
        </motion.div>

        {/* RIGHT: PHOTO */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="../assets/Photo.jpg"
            alt="Dilpreet Singh Gill"
            className="w-52 h-52 sm:w-64 sm:h-64 rounded-full
                       border-4 border-cyan-400
                       shadow-[0_0_60px_rgba(34,211,238,0.25)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
