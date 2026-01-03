import { ArrowUpRight } from "lucide-react";
import TechIcon from "./TechIcon";

const ProjectCard = ({
  title,
  category,
  description,
  techStack,
  period,
  index,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
    >
      <div className="group relative bg-card rounded-2xl overflow-hidden hover-lift border border-border hover:border-primary/50 transition-all duration-500">

        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
              0{index + 1}
            </span>
          </div>

          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <ArrowUpRight className="w-12 h-12 text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-500" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">
              {category}
            </p>
            <p className="text-muted-foreground text-xs">{period}</p>
          </div>

          <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechIcon key={tech} name={tech} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
