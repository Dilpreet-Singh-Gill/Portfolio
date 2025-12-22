export default function Connect() {
  return (
    <footer className="mt-20 border-t border-white/10
                       bg-black/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-8
                      flex flex-col sm:flex-row
                      justify-between gap-6">

        <div>
          <h3 className="text-lg font-semibold">
            Let’s Connect
          </h3>
          <p className="text-gray-400 text-sm">
            Open to internships & collaborations
          </p>
        </div>

        <div className="flex flex-col sm:items-end text-sm gap-2">
          <a
            href="mailto:dilpreet.singh.gill07072005@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            dilpreet.singh.gill07072005@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/dilpreetgill"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-3">
        © {new Date().getFullYear()} Dilpreet Singh Gill
      </div>
    </footer>
  );
}
