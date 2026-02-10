import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  fadeUp,
  hoverScaleSmall,
  staggerContainer,
  staggerContainerFast,
} from "@/lib/animations";
import { motion, useReducedMotion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  ".NET 8",
  "Python",
  "SQL",
  "MongoDB",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Figma",
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="sobre"
      className="section-spacing relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
          className="absolute top-1/2 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none gradient-orb opacity-30"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Sobre <span className="text-gradient">mim</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Separator className="w-16 bg-primary mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-lg font-light"
            >
              <motion.p variants={fadeUp}>
                Técnico em Informática pela{" "}
                <span className="text-foreground font-normal">UTFPR</span>, com
                experiência em JavaScript, TypeScript, Python, React, Next.js,
                Node.js e .NET 8. Inglês avançado, focado em alta performance e
                código limpo.
              </motion.p>
              <motion.p variants={fadeUp}>
                Busco constantemente ampliar meus conhecimentos em tecnologia,
                com interesse especial em{" "}
                <span className="text-foreground font-normal">
                  Inteligência Artificial e DevOps
                </span>
                , focando em automação e melhoria contínua dos processos.
              </motion.p>
              <motion.p variants={fadeUp}>
                Atualmente{" "}
                <span className="text-foreground font-normal">
                  Programador Júnior na Unimake Software
                </span>
                , desenvolvendo soluções robustas e escaláveis. Busco
                crescimento constante tanto no cenário nacional quanto
                internacional.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <div className="bg-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  Stack Técnico
                </h3>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={fadeUp}
                      {...hoverScaleSmall}
                    >
                      <Badge
                        variant="secondary"
                        className="font-mono text-[10px] px-3 py-1 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-none cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                    <p className="text-3xl font-bold text-gradient">2+</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                      Anos de Exp.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                    <p className="text-3xl font-bold text-gradient">5+</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                      Projetos
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
