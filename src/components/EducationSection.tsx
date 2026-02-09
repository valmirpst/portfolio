import { Separator } from "@/components/ui/separator";
import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

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
      className="section-spacing"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-2">
          Formação & <span className="text-gradient">Estudos</span>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Separator className="w-16 bg-primary mb-10" />
        </motion.div>

        <div className="max-w-2xl space-y-0">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="relative pl-10 pb-8 last:pb-0 group"
            >
              {i < educationItems.length - 1 && (
                <div className="absolute left-[15px] top-8 w-px h-full bg-border" />
              )}
              <motion.div
                className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                {item.status === "em andamento" ? (
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </motion.div>

              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                {item.status === "em andamento" && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Em andamento
                  </span>
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
