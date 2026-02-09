import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  fadeUp,
  hoverScaleSmall,
  staggerContainer,
  staggerContainerFast,
} from "@/lib/animations";
import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "GitHub",
  "REST APIs",
  "SQL",
  "Figma",
  "Next.js",
  "Vite",
  "MongoDB",
];

const AboutSection = () => {
  return (
    <motion.section
      id="sobre"
      className="section-spacing"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Sobre <span className="text-gradient">mim</span>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Separator className="w-16 bg-primary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              Sou um desenvolvedor junior com paixão por tecnologia e
              aprendizado contínuo. Tenho experiência prática com
              desenvolvimento web moderno, focando em criar interfaces
              responsivas e acessíveis utilizando React e TypeScript.
            </motion.p>
            <motion.p variants={fadeUp}>
              Ao longo da minha trajetória, participei de projetos que
              envolveram desde a construção de SPAs completas até a integração
              com APIs REST. Busco sempre aplicar boas práticas de código e
              design patterns que tornem o software mais manutenível e
              escalável.
            </motion.p>
            <motion.p variants={fadeUp}>
              Atualmente, estou aprofundando meus conhecimentos em arquitetura
              de front-end e explorando tecnologias do ecossistema Node.js para
              me tornar um desenvolvedor fullstack mais completo.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Tecnologias & Ferramentas
            </h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div key={skill} variants={fadeUp} {...hoverScaleSmall}>
                  <Badge
                    variant="secondary"
                    className="font-mono text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUp}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-sm text-muted-foreground">
                  Anos de experiência
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">
                  Projetos realizados
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
