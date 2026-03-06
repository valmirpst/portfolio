import { Separator } from "@/components/ui/separator";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, GraduationCap, Star } from "lucide-react";

interface Education {
  title: string;
  institution: string;
  period: string;
  status: "concluído" | "em andamento";
  highlight?: boolean;
}

const educationItems: Education[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Integrado",
    period: "2026 – Presente",
    status: "em andamento",
    highlight: true,
  },
  {
    title: "Curso Técnico Integrado em Informática para a Internet",
    institution: "Ensino Médio - Universidade Tecnológica Federal do Paraná (UTFPR)",
    period: "2022 - 2025",
    status: "concluído",
    highlight: true,
  },
  {
    title: "Fundamentos do C#",
    institution: "Rocketseat - Plataforma de Educação em Tecnologia",
    period: "2026",
    status: "concluído",
  },
  {
    title: "Lovable para Builders",
    institution: "Tera - Plataforma de Educação com foco em Inteligência Artificial",
    period: "2026",
    status: "concluído",
  },
  {
    title: "Fundamentos do Next.js",
    institution: "Rocketseat - Plataforma de Educação em Tecnologia",
    period: "2025",
    status: "concluído",
  },
  {
    title: "JavaScript & TypeScript Completo",
    institution: "Udemy - Plataforma de Cursos",
    period: "2023",
    status: "concluído",
  },
];

const highlighted = educationItems.filter((i) => i.highlight);
const others = educationItems.filter((i) => !i.highlight);

const EducationSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="formacao"
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
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none gradient-orb"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Formação & <span className="text-gradient">Estudos</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Separator className="w-16 bg-primary mb-12" />
          </motion.div>
        </div>

        {/* Destaques */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Destaques</span>
            <div className="flex-1 h-px bg-primary/20" />
          </motion.div>

          <div className="space-y-0">
            {highlighted.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative pl-12 pb-10 last:pb-0 group"
                style={{ willChange: "transform, opacity" }}
              >
                {i < highlighted.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-[2px] h-full bg-gradient-to-b from-primary/40 to-transparent" />
                )}

                <motion.div
                  className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-card border border-primary/20 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-500 shadow-xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  {item.status === "em andamento" ? (
                    <BookOpen className="h-5 w-5 text-primary" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  )}
                </motion.div>

                <div className="glass-card p-6 rounded-2xl ml-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                  <span className="text-xs text-primary/80 font-mono tracking-widest uppercase mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light mt-1">{item.institution}</p>

                  {item.status === "em andamento" && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-[10px] uppercase tracking-tighter font-bold text-primary">
                        Em andamento
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outros Cursos */}
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Outros Cursos</span>
            <div className="flex-1 h-px bg-muted-foreground/20" />
          </motion.div>

          <div className="space-y-0">
            {others.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative pl-12 pb-10 last:pb-0 group"
                style={{ willChange: "transform, opacity" }}
              >
                {i < others.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-[2px] h-full bg-gradient-to-b from-muted-foreground/20 to-transparent" />
                )}

                <motion.div
                  className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-card border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <GraduationCap className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>

                <div className="glass-card p-6 rounded-2xl ml-2">
                  <span className="text-xs text-primary/80 font-mono tracking-widest uppercase mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light mt-1">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
