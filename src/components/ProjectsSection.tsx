import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  fadeUp,
  hoverScale,
  hoverScaleSmall,
  staggerContainer,
} from "@/lib/animations";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestão para Barbearias",
    description:
      "Sistema completo de gestão para barbearias, permitindo que proprietários gerenciem seus estabelecimentos, serviços e agendamentos, enquanto clientes podem visualizar e agendar serviços de forma fácil e intuitiva.",
    tech: [
      "Next.js",
      "TypeScript",
      "Radix UI",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "NeonDB",
      "Prisma",
    ],
    liveUrl: "https://barbearia-valmirpst.vercel.app",
    // repoUrl: "https://github.com/valmirpst/barbearia",
  },
  {
    title: "Projeto Integrador - Livraria Online",
    description:
      "Projeto integrador full stack de uma livraria online, com autenticação e gerenciamento de estoque, desenvolvido no 4º ano do Curso Técnico Integrado em Informática da UTFPR.",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/valmirpst/projeto-integrador",
  },
  {
    title: "Painel Escolar - Projeto Desenvolvimento Web",
    description:
      "Painel escolar para gerenciamento de alunos, notas e atividades, desenvolvido como projeto final do curso de Desenvolvimento Web, utilizando React, Next.js e Recharts para visualização de dados.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Lucide Icons",
      "Recharts",
    ],
    liveUrl: "https://dw-project-valmirpst.vercel.app",
    repoUrl: "https://github.com/valmirpst/dw-project-front",
  },
  {
    title: "Portfolio Pessoal (Este Site)",
    description:
      "Portfólio pessoal moderno e interativo para apresentação de projetos, habilidades e experiências, desenvolvido com apoio de agentes de IA para otimizar o design e o desenvolvimento.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Antigravity",
      "Agente de IA",
      "Framer Motion",
    ],
    repoUrl: "https://github.com/valmirpst/portfolio",
  },
];

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projetos"
      className="section-spacing relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Decor */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {!shouldReduceMotion && (
        <motion.div
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none gradient-orb opacity-40"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Projetos em <span className="text-gradient">Destaque</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Separator className="w-16 bg-primary mb-10" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              {...hoverScale}
              style={{ willChange: "transform, opacity" }}
            >
              <Card className="project-glass-card group h-full flex flex-col overflow-hidden relative border-white/5">
                <div className="absolute -inset-[1px] rounded-xl animate-border-gradient opacity-0 group-hover:opacity-5 transition-opacity" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center justify-between">
                    {project.title}
                    <a
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center scale-0 group-hover:scale-100 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                      href={project.liveUrl || project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base font-light mt-2 text-balance">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <motion.div key={t} {...hoverScaleSmall}>
                        <Badge
                          variant="outline"
                          className="text-[10px] font-mono border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 bg-white/5 cursor-default"
                        >
                          {t}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="default"
                        asChild
                        className="rounded-full px-6 h-9 text-xs font-semibold glow opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="rounded-full px-6 h-9 text-xs font-semibold border-white/10 hover:bg-gray-800 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 delay-75"
                      >
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3.5 w-3.5" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
