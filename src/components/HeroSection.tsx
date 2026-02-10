import TextReveal from "@/components/TextReveal";
import { Button } from "@/components/ui/button";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background"
    >
      {/* Background Grid Pattern - Static, no will-change needed */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated gradient orbs - Performance critical */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none gradient-orb opacity-60"
            style={{ willChange: "transform" }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none gradient-orb-secondary opacity-40"
            style={{ willChange: "transform" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponível para novos projetos
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-sm text-primary/80 mb-4 tracking-wider uppercase"
          >
            Olá, eu sou
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[1.1]">
            <TextReveal
              text="Valmir Paiva Stachin"
              highlightText="Stachin"
              delay={0.2}
            />
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 flex items-center gap-3">
            <span className="text-muted-foreground/60 font-light">—</span>
            <TextReveal
              text="Full Stack Developer"
              className="text-muted-foreground"
              delay={0.6}
            />
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
          >
            Transformando ideias complexas em interfaces elegantes e escaláveis.
            Especializado em{" "}
            <span className="text-foreground font-normal">
              React, Next.js, TypeScript, .NET
            </span>
            , criando soluções de alto impacto que conectam tecnologia e
            pessoas.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="flex flex-wrap gap-5"
            style={{ willChange: "transform, opacity" }}
          >
            <Button
              asChild
              size="lg"
              className="glow h-12 px-8 rounded-full text-base font-semibold group transition-all hover:scale-105"
            >
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6 duration-300" />
                Conectar no LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-12 px-8 rounded-full text-base border-white/10 hover:bg-gray-800 hover:text-white transition-all hover:scale-105 group"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12 duration-300" />
                Ver Github
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
