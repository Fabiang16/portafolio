import Link from 'next/link';

export const metadata = {
  title: 'About | Fabian Godoy',
  description: 'Learn more about my background, journey, and technical skills.',
};

// Componente reutilizable para los enlaces sociales
function SocialLink({ icon, href, children }) {
  return (
    <Link 
      href={href} 
      className="group flex items-center gap-4 text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-400"
    >
      <span className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500">
        {icon}
      </span>
      {children}
    </Link>
  );
}

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
      
      {/* Columna Derecha en Desktop / Superior en Móvil (Imagen y Redes) */}
      <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 flex flex-col gap-10">
        
        {/* Contenedor de la Imagen */}
        <div className="aspect-[4/5] w-full bg-zinc-100 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-700/40 flex items-center justify-center overflow-hidden shadow-sm">
          {/* Aquí irá tu etiqueta <Image> de Next.js cuando tengas tu foto */}
          <span className="text-zinc-400 dark:text-zinc-500 text-sm font-mono">
            [ Tu foto irá aquí ]
          </span>
        </div>

        {/* Enlaces Sociales */}
        <div className="flex flex-col gap-6 pl-2">
          <SocialLink href="#" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" /></svg>
          }>
            Follow me on X
          </SocialLink>
          
          <SocialLink href="#" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.5C9.3375 21.5875 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5 18.8625C6.725 19.4625 6.1375 17.525 6.1375 17.525C5.6875 16.375 5.0375 16.075 5.0375 16.075C4.1375 15.4625 5.1 15.475 5.1 15.475C6.1 15.55 6.6125 16.5 6.6125 16.5C7.4875 18.0125 8.9 17.575 9.4625 17.3125C9.55 16.675 9.8125 16.25 10.1 16.0125C7.8875 15.7625 5.5625 14.9 5.5625 11.075C5.5625 9.9875 5.95 9.1 6.5875 8.3875C6.4875 8.1375 6.15 7.125 6.6875 5.7625C6.6875 5.7625 7.525 5.5 9.5 6.825C10.3 6.6 11.15 6.5 12 6.5C12.85 6.5 13.7 6.6 14.5 6.825C16.475 5.5 17.3125 5.7625 17.3125 5.7625C17.85 7.125 17.5125 8.1375 17.4125 8.3875C18.05 9.1 18.4375 9.9875 18.4375 11.075C18.4375 14.9125 16.1 15.7625 13.875 16.0125C14.2375 16.325 14.5625 16.9375 14.5625 17.8875C14.5625 19.25 14.55 20.35 14.55 20.6875C14.55 20.95 14.7375 21.275 15.25 21.1875C19.225 19.825 22 16.0625 22 11.6625C22 6.1375 17.525 2 12 2Z" /></svg>
          }>
            Follow me on GitHub
          </SocialLink>
          
          <SocialLink href="#" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.9897 3C20.5404 3 20.9897 3.44924 20.9897 4V20C20.9897 20.5508 20.5404 21 19.9897 21H3.98975C3.43899 21 2.98975 20.5508 2.98975 20V4C2.98975 3.44924 3.43899 3 3.98975 3H19.9897ZM8.23975 8.49902C8.23975 9.32745 7.56817 9.99902 6.73975 9.99902C5.91132 9.99902 5.23975 9.32745 5.23975 8.49902C5.23975 7.6706 5.91132 6.99902 6.73975 6.99902C7.56817 6.99902 8.23975 7.6706 8.23975 8.49902ZM18.7397 18.999V13.6212C18.7397 11.2384 17.1897 10.199 15.3897 10.199C14.0097 10.199 13.3897 10.979 13.0397 11.539V10.439H10.7397C10.7797 11.139 10.7397 18.999 10.7397 18.999H13.0397V14.2185C13.0397 13.9685 13.0597 13.7185 13.1397 13.5385C13.3597 13.0385 13.8297 12.5185 14.5997 12.5185C15.6297 12.5185 16.0397 13.3085 16.0397 14.4685V18.999H18.7397ZM7.88975 18.999V10.439H5.58975V18.999H7.88975Z" /></svg>
          }>
            Follow me on LinkedIn
          </SocialLink>

          <div className="border-t border-zinc-200 dark:border-zinc-700/40 my-2 w-full"></div>

          <SocialLink href="mailto:your.email@example.com" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM20.25 6.75V17.25H3.75V6.75H20.25ZM18.5982 7.72851L12 12.2359L5.40182 7.72851L4.54297 8.9859L12 14.0776L19.457 8.9859L18.5982 7.72851Z" /></svg>
          }>
            fabian@example.com
          </SocialLink>
        </div>
      </div>

      {/* Columna Izquierda (Texto Principal) */}
      <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-10">
        
        {/* Título Principal e Introducción */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
            About Me
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I’m a Software Engineering student with experience in project management, workflow automation, and dashboard creation. I enjoy building clean, user‑focused solutions and collaborating with teams to bring clarity and structure to technical projects.
          </p>
        </div>
        
        {/* Secciones de Contenido */}
        <div className="flex flex-col gap-8 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              My Journey
            </h2>
            <p>
              Having lived in Chile, Uruguay, Canada, and now the Salt Lake City metropolitan area, I’ve learned to adapt quickly to new environments and collaborate with diverse teams. At Ensign College, I’m pursuing a Bachelor of Science in Software Engineering and have taken courses in Python, Java, HTML, and UX/UI design. This combination of coursework and hands‑on experience has helped me expand my technical skills and strengthen my problem‑solving abilities.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              What I Enjoy Building
            </h2>
            <p>
              I love creating clean, functional systems—whether that’s a dashboard, a design system in Figma, or a React component. I focus on clarity, accessibility, and ensuring that every feature solves a real problem and improves the user experience.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Beyond Tech
            </h2>
            <p>
              Outside of academia and software development, I enjoy assembling computers, performing hardware maintenance, working on automotive projects, and learning more about artificial intelligence. I like working on projects that require precision, structure, and attention to detail.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}
