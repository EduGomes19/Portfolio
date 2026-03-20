import { Github, ExternalLink, Code } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "KLibras",
      description: "Um app voltado ao ensino de LIBRAS utilizando IA treinada para identificação e tradução de sinais",
      tags: ["Kotlin", "Python", "Mobile", "AI / ML", "Accessibility", "API"],
      githubUrl: "https://github.com/KLibras",
      color: "from-blue-600/20 to-purple-600/20",
      border: "hover:border-blue-600/50"
    },
    {
      title: "RepubliBot",
      description: "Uma automação projetada para captação de dados da web, e postagem nas redes sociais da Meta, otimizando o tempo e facilitando a gestão de conteúdo.",
      tags: ["Python", "Bot", "Automation", "API", "Scraping"],
      githubUrl: "https://github.com/EduGomes19/RepubliBot",
      color: "from-purple-600/20 to-blue-800/20",
      border: "hover:border-purple-600/50"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Projetos em Destaque</h2>
            <p className="text-slate-400 text-lg">
              Uma seleção dos projetos onde trabalhei, neles aplico o que aprendo com a tecnologia e coloco em prática, para melhorar a vida das pessoas e resolver problemas.
            </p>
          </div>
          <a href="https://github.com/EduGomes19" target="_blank" rel="noreferrer" className="hidden md:flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
            <span>Meu perfil no GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.githubUrl} target="_blank" rel="noreferrer" className={`block glass rounded-2xl p-6 md:p-8 overflow-hidden relative group transition-all duration-300 ${project.border}`}>
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <Code className="text-white" size={24} />
                  </div>
                  <div className="text-slate-400 group-hover:text-white transition-colors p-2 bg-white/5 rounded-full group-hover:bg-white/10 border border-transparent group-hover:border-white/20">
                    <Github size={20} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <a href="https://github.com/EduGomes19" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
            <span>Meu perfil no GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
