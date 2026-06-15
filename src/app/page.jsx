import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Home | Fabian Godoy',
  description: 'Portfolio of Fabian Godoy, Software Engineering student and Full-Stack Developer.',
};

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-[75vh] gap-8 max-w-3xl">
      
      {/* Indicador de estado o saludo */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-card/50 text-brand-primary text-sm font-mono shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
        </span>
        Welcome to my workspace
      </div>

      {/* Título Principal */}
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-brand-text leading-tight">
        Building structured solutions and <span className="text-brand-primary">seamless experiences.</span>
      </h1>

      {/* Descripción corta */}
      <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl">
        Hi, I'm Fabian Godoy. I'm a Software Engineering student bridging the gap between scalable full-stack development, user-centered design, and technical project management.
      </p>

      {/* Botones de acción usando tu componente personalizado */}
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
