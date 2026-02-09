import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, hoverGlow, hoverScaleSmall } from "@/lib/animations";

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
  return (
    <motion.section
      id="projetos"
      className="section-spacing"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-2">
          Projetos em <span className="text-gradient">Destaque</span>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Separator className="w-16 bg-primary mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp} {...hoverScale} {...hoverGlow}>
              <Card className="bg-card border-border transition-colors group h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <motion.div key={t} {...hoverScaleSmall}>
                        <Badge variant="outline" className="text-xs font-mono border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
                          {t}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.div {...hoverScale}>
                        <Button size="sm" variant="ghost" asChild className="text-muted-foreground hover:text-primary">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.repoUrl && (
                      <motion.div {...hoverScale}>
                        <Button size="sm" variant="ghost" asChild className="text-muted-foreground hover:text-primary">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1.5 h-3.5 w-3.5" />
                            Código
                          </a>
                        </Button>
                      </motion.div>
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
