import { ChevronDown, ArrowRight, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-76px)] flex items-center justify-center relative pb-20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 text-sm text-blue-300 backdrop-blur-sm animate-pulse">
          <Code2 size={16} />
          <span>Disponível para novos projetos</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Transformando ideias em <br className="hidden md:block" />
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            projetos reais
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Olá, eu sou o Eduardo, um <span className="text-white font-medium">Desenvolvedor Python</span>. Construo sistemas escaláveis, APIs eficientes e soluções confiáveis para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            <span>Alguns projetos</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="text-slate-300 hover:text-white px-8 py-3.5 font-medium transition-colors">
            Sobre minha jornada
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
