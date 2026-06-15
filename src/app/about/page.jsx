import Link from 'next/link';

export const metadata = {
  title: 'About | Fabian Godoy',
  description: 'Learn more about my background, journey, and technical skills.',
};

export default function About() {
  return (
    <div className="flex flex-col gap-12">
      
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-brand-card/40 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-brand-text">
          About Me
        </h1>
        <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
          Bridging the gap between software development, project management, and user-centered design.
        </p>
      </header>

      {/* Main Content Sections */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Column: Biography */}
        <div className="flex-1 flex flex-col gap-8 text-brand-muted leading-relaxed">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-brand-text font-mono">
              &gt; My Journey
            </h2>
            <p>
              My path into software engineering has been shaped by diverse experiences across different environments. 
              Having lived in Uruguay and Canada before establishing myself in the Greater Salt Lake City area, 
              I have developed a highly adaptable approach to problem-solving and technical collaboration.
            </p>
            <p>
              Currently, I am pursuing my degree in Software Engineering at Ensign College. In technical team settings, 
              I often wear multiple hats—functioning not just as a developer, but also taking on project management and 
              technical writing responsibilities. I enjoy organizing workflows, maintaining SDLC documentation, and 
              ensuring clear communication across team members.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-brand-text font-mono">
              &gt; Beyond the Code
            </h2>
            <p>
              When I am not managing design system architecture in Figma or debugging React components, I enjoy 
              hands-on hardware maintenance, optimizing PC builds, and working on automotive projects. I also 
              appreciate the precision of culinary activities, particularly baking.
            </p>
          </section>
        </div>

        {/* Right Column: Quick Facts / Skills Sidebar */}
        <aside className="w-full md:w-72 flex flex-col gap-6">
          <div className="bg-brand-card border border-brand-card/50 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-brand-text border-b border-brand-dark pb-2">
              Education
            </h3>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-brand-primary font-medium">Ensign College</span>
              <span className="text-brand-muted">Software Engineering</span>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-card/50 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-brand-text border-b border-brand-dark pb-2">
              Core Competencies
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-brand-muted list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>Project Management</li>
              <li>Technical Documentation</li>
              <li>Atomic Design Systems</li>
              <li>API Integration</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}
