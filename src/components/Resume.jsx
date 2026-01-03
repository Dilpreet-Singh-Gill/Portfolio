import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-primary font-display">
        Resume
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <iframe
          src={resume}
          className="w-full h-[500px] rounded-xl border border-border bg-card"
          title="Resume Preview"
        />

        <a
          href={resume}
          download
          className="px-6 py-4 bg-primary text-primary-foreground rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors hover-lift"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
