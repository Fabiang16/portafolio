import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Library App UI Reconstruction | Fabian Godoy',
  description: 'Project details for the Library App UI Reconstruction.',
};

export default function LibraryProject() {
  return (
    <article className="flex flex-col gap-10 pb-12 mt-4 sm:mt-8 max-w-3xl mx-auto w-full">
      
      {/* Back Navigation */}
      <Link href="/projects" className="text-sm font-medium text-brand-primary hover:opacity-80 flex items-center gap-2 transition-opacity w-fit">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
        Back to Projects
      </Link>

      {/* Project Header */}
      <header className="flex flex-col gap-4 border-b border-brand-card/50 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text">
          Library App UI Reconstruction
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-brand-muted">
          <span className="px-3 py-1 rounded-full bg-brand-card border border-brand-card/50">Frontend & UI Specialist</span>
          <span>Atomic Design</span>
          <span>Figma</span>
          <span>Accessibility</span>
        </div>
      </header>

      {/* Project Description */}
      <section className="flex flex-col gap-6 text-brand-muted leading-relaxed text-lg">
        <p>
          This project was an extensive ground-up reconstruction of a library application&apos;s interface. The primary goal was to modernize the user experience while strictly adhering to Atomic Design principles, ensuring that every element—from the smallest icon to the most complex menu—was highly scalable and reusable.
        </p>
        <p>
          I focused heavily on the settings interface and core browsing views. By systematically creating a library of modular components (such as list menus, status info cards, and dynamic navigation bars), I was able to rapidly prototype distinct states, including fully functional Light and Dark modes.
        </p>
        <p>
          Accessibility was a major driver in the design decisions. I implemented redundant iconography alongside text labels and optimized color contrast ratios to ensure the application was navigable and legible for all users.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        
        <div className="flex flex-col gap-3">
          <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-brand-card/50 shadow-md bg-white">
            <Image 
              src="/library-light.jpg" 
              alt="Library App Main Screens Light Mode" 
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-center text-brand-muted">Core browsing and account views.</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-brand-card/50 shadow-md bg-[#0F1115]">
            <Image 
              src="/library-dark.jpg" 
              alt="Library App Settings Components Dark Mode" 
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="text-sm text-center text-brand-muted">Atomic components for settings in Dark Mode.</p>
        </div>

      </section>

    </article>
  );
}