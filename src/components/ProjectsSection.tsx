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
    title: "E-commerce Dashboard",
    description:
      "Painel administrativo para gerenciamento de produtos, pedidos e clientes com gráficos interativos e relatórios em tempo real.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicação de gerenciamento de tarefas com drag-and-drop, categorias, filtros avançados e persistência de dados local.",
    tech: ["React", "JavaScript", "CSS Modules", "LocalStorage"],
    repoUrl: "#",
  },
  {
    title: "Weather Forecast",
    description:
      "App de previsão do tempo com busca por cidades, exibição de dados meteorológicos em cards responsivos e integração com API externa.",
    tech: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Pessoal",
    description:
      "Site portfolio responsivo e moderno com animações suaves, design system personalizado e otimizado para performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    repoUrl: "#",
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
              <Card className="bg-card/40 backdrop-blur-sm border-white/5 transition-all duration-500 group h-full hover:border-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base font-light mt-2 text-balance">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <motion.div key={t} {...hoverScaleSmall}>
                        <Badge
                          variant="outline"
                          className="text-[10px] font-mono border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 bg-white/5"
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
                        className="rounded-full px-6 h-9 text-xs font-semibold border-white/10 hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 delay-75"
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
