import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full relative py-12 border-t border-slate-800 bg-[#0c0c0e]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-slate-400">
        <div className="mb-4 md:mb-0">
          <p className="text-sm tracking-wide">© {new Date().getFullYear()} Eduardo G. Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/EduGomes19" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/edugomes19/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/eduu1904/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
