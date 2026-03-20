import { BookOpen, Briefcase, Terminal, Instagram } from 'lucide-react';
import profileImg from '../../assets/Eduu.jpeg';

export function About() {
  const experiences = [
    {
      icon: <Terminal className="text-blue-400" size={24} />,
      title: "O Início e Estudos",
      description: "Minha jornada na programação começou motivada pela curiosidade de entender como as coisas funcionam 'debaixo do capô' e comecei meu curso de Bacharel em Ciências da computação",
      year: "2021"
    },
    {
      icon: <BookOpen className="text-purple-400" size={24} />,
      title: "Aprofundamento Técnico",
      description: "Tive experiéncia com diversas áreas de tecnologia e diversas línguagens de programação, mas a que mais me identifiquei foi Python por sua facilidade e versatilidade",
      year: "2023"
    },
    {
      icon: <Briefcase className="text-blue-500" size={24} />,
      title: "Construindo Projetos",
      description: "Atualmente focado em desenvolvimento de automações e softwares para uso pessoal e profissional com foco em IA e Machine Learning",
      year: "Hoje"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Sobre a minha jornada</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Acredito que as melhores tecnologias são aquelas que resolvem os problemas da melhor maneira.
            </p>

            <a href="https://www.instagram.com/eduu1904/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-purple-500/25">
              <Instagram size={20} />
              <span className="tracking-wide">Me acompanhe no Instagram</span>
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-full" />
              <img
                src={profileImg}
                alt="Eduu"
                className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-white/10 shadow-[0_0_40px_rgba(147,51,234,0.15)] rotate-2 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="glass p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                {exp.icon}
              </div>
              <div className="text-sm font-bold text-blue-400 mb-2">{exp.year}</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{exp.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
