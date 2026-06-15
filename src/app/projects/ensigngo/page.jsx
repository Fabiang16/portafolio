import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'EnsignGo Mobile App | Fabian Godoy',
  description: 'Project details for the EnsignGo Mobile App.',
};

export default function EnsignGoProject() {
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
          EnsignGo Mobile App
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-brand-muted">
          <span className="px-3 py-1 rounded-full bg-brand-card border border-brand-card/50">Lead Developer & UX Designer</span>
          <span>Figma</span>
          <span>UX/UI Prototyping</span>
        </div>
      </header>

      {/* Project Description */}
      <section className="flex flex-col gap-6 text-brand-muted leading-relaxed text-lg">
        <p>
          EnsignGo is a comprehensive student resource mobile application designed to bridge the gap between academic management, campus living, and community events. My role spanned the entire design lifecycle, from defining initial user personas to executing high-fidelity interactive prototypes.
        </p>
        <p>
          The primary objective was to create a unified experience. I mapped out complex user flows to seamlessly connect distinct modules: the academic dashboard, event calendars, devotional schedules, and housing resources. By iterating on these flows, we ensured that the navigation felt intuitive for a diverse student demographic.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="flex flex-col gap-4 mt-4">
        <h2 className="text-xl font-semibold text-brand-text mb-2">User Flows & Wireframes</h2>
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-card/50 shadow-md bg-brand-card">
          <Image 
            src="/ensigngo-flow.jpg" 
            alt="EnsignGo High Fidelity Wireframes and User Flows" 
            fill
            className="object-contain p-4"
          />
        </div>
        <p className="text-sm text-center text-brand-muted mt-2">
          High-fidelity flows demonstrating the navigation architecture across Dashboard, Calendar, and Housing modules.
        </p>
      </section>

    </article>
  );
}