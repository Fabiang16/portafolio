export const metadata = {
  title: 'Uses | Fabian Godoy',
  description: 'Software, gadgets, and tools I use on a daily basis.',
};

// Reusable component for category sections
function ToolSection({ title, children }) {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 border-l border-brand-card/50 pl-6 md:pl-0 md:border-none">
      <h2 className="text-lg font-semibold text-brand-text w-48 shrink-0">{title}</h2>
      <div className="flex flex-col gap-8 w-full">
        {children}
      </div>
    </section>
  );
}

// Reusable component for individual tools
function Tool({ title, description }) {
  return (
    <div className="flex flex-col gap-2 group">
      <h3 className="font-medium text-brand-text group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-brand-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Uses() {
  return (
    <div className="flex flex-col gap-16 max-w-4xl">
      
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-brand-card/40 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-brand-text">
          Uses
        </h1>
        <p className="text-lg text-brand-muted leading-relaxed">
          A comprehensive list of the tools, hardware, and software I use daily to build, design, and manage projects.
        </p>
      </header>

      {/* Tools List */}
      <div className="flex flex-col gap-16">
        
        {/* Hardware Section */}
        <ToolSection title="Workstation & Hardware">
          <Tool 
            title="Custom Built PC" 
            description="I enjoy performing hardware maintenance and optimizing PC components. My primary workstation is a custom build tailored for heavy development servers, Figma workflows, and multitasking."
          />
          <Tool 
            title="Logitech MX Master 3S" 
            description="An absolute essential for productivity. The ergonomic design and horizontal scroll wheel make navigating large codebases and complex UI canvases seamless."
          />
        </ToolSection>

        {/* Development Section */}
        <ToolSection title="Development Tools">
          <Tool 
            title="Visual Studio Code" 
            description="My editor of choice. Configured with a clean dark theme, ESLint, and Prettier to maintain consistent and readable code formatting across all my projects."
          />
          <Tool 
            title="Vite" 
            description="My go-to build tool for standard React environments. The hot module replacement (HMR) is incredibly fast and drastically improves the frontend development experience."
          />
        </ToolSection>

        {/* Design & Management Section */}
        <ToolSection title="Design & Management">
          <Tool 
            title="Figma" 
            description="Where all my UI/UX work happens. I rely heavily on Figma components and Atomic Design principles to architect scalable design systems before writing a single line of code."
          />
          <Tool 
            title="Wrike" 
            description="Used for organizing workflows, technical task tracking, and API automation. I often integrate custom request forms with Wrike workspaces to streamline project management."
          />
        </ToolSection>

        {/* Technologies Section */}
        <ToolSection title="Tech Stack">
          <Tool 
            title="React & Next.js" 
            description="The core of my frontend development. I leverage the App Router in Next.js for building fast, SEO-friendly, and highly structured web applications."
          />
          <Tool 
            title="Supabase" 
            description="My preferred backend solution. It integrates perfectly with React to handle database management, tables, and data streams securely."
          />
          <Tool 
            title="Tailwind CSS" 
            description="My styling solution of choice. It allows me to build custom, responsive interfaces directly within my JSX without managing massive external stylesheets."
          />
        </ToolSection>
        
      </div>
    </div>
  );
}
