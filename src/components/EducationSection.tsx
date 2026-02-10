import { Separator } from "@/components/ui/separator";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

interface Education {
  title: string;
  institution: string;
  period: string;
  status: "concluído" | "em andamento";
}

const educationItems: Education[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade / Faculdade",
    period: "2023 – Presente",
    status: "em andamento",
  },
  {
    title: "Bootcamp Desenvolvimento Web Full Stack",
    institution: "Plataforma de Ensino",
    period: "2023",
    status: "concluído",
  },
  {
    title: "React do Zero à Maestria",
    institution: "Udemy / Plataforma de Cursos",
    period: "2023",
    status: "concluído",
  },
  {
    title: "JavaScript & TypeScript Completo",
    institution: "Udemy / Plataforma de Cursos",
    period: "2022",
    status: "concluído",
  },
];

const EducationSection = () => {
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

      <motion.div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none gradient-orb opacity-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Formação & <span className="text-gradient">Estudos</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Separator className="w-16 bg-primary mb-12" />
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="relative pl-12 pb-12 last:pb-0 group"
            >
              {i < educationItems.length - 1 && (
                <div className="absolute left-[19px] top-10 w-[2px] h-full bg-gradient-to-b from-primary/30 to-transparent" />
              )}

              <motion.div
                className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-card border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item.status === "em andamento" ? (
                  <BookOpen className="h-5 w-5 text-primary" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>

              <div className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl group-hover:border-primary/10 transition-colors duration-500 ml-2">
                <span className="text-xs text-primary/80 font-mono tracking-widest uppercase mb-2 block">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light mt-1">
                  {item.institution}
                </p>

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
    </motion.section>
  );
};

export default EducationSection;
