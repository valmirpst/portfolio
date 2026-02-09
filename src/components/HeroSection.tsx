import TextReveal from "@/components/TextReveal";
import { Button } from "@/components/ui/button";
import {
  fadeUp,
  floatAnimation,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const LINKEDIN_URL = "#";
const GITHUB_URL = "#";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/3 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none gradient-orb"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Secondary orb */}
      <motion.div
        className="absolute bottom-1/5 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none gradient-orb-secondary"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-sm text-primary mb-4"
          >
            Olá, eu sou
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <TextReveal
              text="Valmir Paiva Stachin"
              highlightText="Stachin"
              delay={0.3}
            />
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6">
            <TextReveal
              text="Desenvolvedor Junior"
              className="text-muted-foreground"
              delay={0.8}
            />
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Apaixonado por construir experiências digitais modernas e
            performáticas. Focado em React, TypeScript e no ecossistema
            JavaScript, buscando sempre entregar código limpo e soluções
            criativas.
          </motion.p>

          <motion.div variants={scaleIn} className="flex gap-4">
            <Button asChild className="glow ">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
