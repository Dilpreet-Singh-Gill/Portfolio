const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Passionate about creating
              <span className="gradient-text"> impactful solutions</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I'm a 3rd year B.Tech IT student at SGSITS, Indore, with a strong
                foundation in full-stack web development. Currently maintaining a
                CGPA of 9.005, I've been recognized with the Prof. P.K. Sen Memorial
                Award for top performance in my first year.
              </p>
              <p>
                As a Placement Coordinator at the T&P Cell and Coordinator at Club
                #Include (IT Department's tech club), I combine technical expertise
                with leadership skills to create meaningful impact.
              </p>
              <p>
                I've solved 250+ problems on LeetCode, CodeChef, and GeeksforGeeks,
                and achieved Prefinalist status (Top 15%) in HackNdore 2024 among
                500+ participants.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <span className="font-display text-5xl font-bold gradient-text">DS</span>
                  </div>
                  <p className="text-muted-foreground">Dilpreet Singh Gill</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { number: "9.0", label: "CGPA" },
            { number: "250+", label: "Problems Solved" },
            { number: "Top 15%", label: "HackNdore 2024" },
            { number: "3+", label: "Projects Built" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
