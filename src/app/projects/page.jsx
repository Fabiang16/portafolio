import Link from 'next/link';

export const metadata = {
  title: 'Projects | Fabian Godoy',
  description: 'A collection of my recent work focusing on scalable architecture, seamless API integrations, and accessible user interfaces.',
};

// --- Reusable Project Card Component ---
function ProjectCard({ title, role, description, tags, href }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-brand-card shadow-sm bg-brand-dark transition-all hover:border-brand-primary/50 h-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-text">
          {title}
        </h2>
        <span className="text-sm font-mono text-brand-muted">
          {role}
        </span>
      </div>
      
      <p className="text-base text-brand-muted leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted my-2">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      
      <div className="pt-4 border-t border-brand-card/50 mt-auto">
        <Link 
          href={href} 
          className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors inline-flex items-center gap-1"
        >
          View Project Details &rarr;
        </Link>
      </div>
    </div>
  );
}

// --- Main Projects Page ---
export default function Projects() {
  return (
    <div className="flex flex-col gap-12 pb-12 mt-4 sm:mt-8">
      
      {/* Page Header */}
      <header className="flex flex-col gap-4 max-w-3xl border-b border-brand-card/50 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text">
          My Projects
        </h1>
        <p className="text-lg text-brand-muted leading-relaxed">
          A collection of my recent work focusing on scalable architecture, seamless API integrations, and accessible user interfaces.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        <ProjectCard 
          title="EnsignGo Mobile App"
          role="Lead Developer & UX Designer"
          description="A comprehensive student resource mobile application. Designed user personas and built high-fidelity prototypes to test user flows and interactive features."
          tags={['Figma', 'UX/UI Design', 'Prototyping']}
          href="/projects/ensigngo" 
        />

        <ProjectCard 
          title="Master Inventory Management Tool"
          role="Full-Stack Developer"
          description="An integrated inventory solution connecting a custom React web-based request form to a Supabase database. Automated task creation via the Wrike API."
          tags={['React', 'Vite', 'Supabase', 'Wrike API']}
          href="/projects/inventory" 
        />

        <ProjectCard 
          title="Library App UI Reconstruction"
          role="Frontend & UI Specialist"
          description="Rebuilt a library application settings interface from the ground up using Atomic Design principles. Created accessible, reusable components including list menus and info cards."
          tags={['Figma Components', 'Atomic Design', 'Accessibility']}
          href="/projects/library" 
        />

      </div>
    </div>
  );
}
