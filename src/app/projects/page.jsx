import Link from 'next/link';

export const metadata = {
  title: 'Projects | Fabian Godoy',
  description: 'A showcase of my software engineering and design projects.',
};

// Data array containing project details
const projectsData = [
  {
    id: 1,
    title: 'EnsignGo Mobile App',
    role: 'Lead Developer & UX Designer',
    description: 'A comprehensive student resource mobile application. Designed user personas and built high-fidelity prototypes to test user flows and interactive features.',
    techStack: ['Figma', 'UX/UI Design', 'Prototyping'],
    link: '#',
  },
  {
    id: 2,
    title: 'Master Inventory Management Tool',
    role: 'Full-Stack Developer',
    description: 'An integrated inventory solution connecting a custom React web-based request form to a Supabase database. Automated task creation via the Wrike API.',
    techStack: ['React', 'Vite', 'Supabase', 'Wrike API'],
    link: '#',
  },
  {
    id: 3,
    title: 'Library App UI Reconstruction',
    role: 'Frontend & UI Specialist',
    description: 'Rebuilt a library application settings interface from the ground up using Atomic Design principles. Created accessible, reusable components including list menus and info cards.',
    techStack: ['Figma Components', 'Atomic Design', 'Accessibility'],
    link: '#',
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-brand-card/40 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-brand-text">
          My Projects
        </h1>
        <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
          A collection of my recent work focusing on scalable architecture, seamless API integrations, and accessible user interfaces.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <article 
            key={project.id} 
            className="flex flex-col bg-brand-card border border-brand-card/50 rounded-xl p-6 hover:border-brand-primary/50 transition-colors group"
          >
            <div className="flex-grow flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-brand-text group-hover:text-brand-primary transition-colors">
                {project.title}
              </h2>
              <span className="text-xs font-mono text-brand-primary">
                {project.role}
              </span>
              <p className="text-sm text-brand-muted leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Tech Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs bg-brand-dark/50 text-brand-muted rounded-md border border-brand-card"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Link */}
            <div className="mt-6 pt-4 border-t border-brand-card/50">
              <Link 
                href={project.link} 
                className="text-sm font-medium text-brand-primary hover:text-white transition-colors flex items-center gap-2"
              >
                View Project Details &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
