import Image from 'next/image';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Home | Fabian Godoy',
  description: 'Portfolio of Fabian Godoy, Software Engineering student and Full-Stack Developer.',
};

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-[75vh] gap-8 max-w-3xl">
      
      {/* Profile Picture / Avatar */}
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-brand-card/50 shadow-sm">
        <Image 
          src="/Picture2.jpg" 
          alt="Fabian Godoy" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Status Indicator */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-card/50 text-brand-primary text-sm font-mono shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
        </span>
        Welcome to my workspace
      </div>

      {/* Main Title */}
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-brand-text leading-tight">
        Building structured solutions and <span className="text-brand-primary">seamless experiences.</span>
      </h1>

      {/* Short Bio (Fixed unescaped entities) */}
      <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl">
        Hi, I&apos;m Fabian Godoy. I&apos;m a Software Engineering student bridging the gap between scalable full-stack development, user-centered design, and technical project management.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <Button href="/projects" variant="primary">
          Explore My Projects
        </Button>
        
        <Button href="/about" variant="secondary">
          More About Me
        </Button>
      </div>

    </div>
  );
}
