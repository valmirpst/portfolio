import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/valmirpaivastachin/";
const GITHUB_URL = "https://github.com/valmirpst";
const EMAIL = "valmirpaivacpm@gmail.com";

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contato"
      className="section-spacing relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none gradient-orb opacity-70"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Vamos <span className="text-gradient">Conversar</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Separator className="w-16 bg-primary mb-12 mx-auto" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores. Sinta-se à vontade para
            entrar em contato através de qualquer uma das plataformas abaixo!
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="flex flex-wrap justify-center gap-6"
            style={{ willChange: "transform, opacity" }}
          >
            <Button
              asChild
              size="lg"
              className="glow rounded-full px-8 h-12 text-base font-semibold group transition-all hover:scale-105"
            >
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6 duration-300" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-semibold border-white/10 hover:bg-gray-800 hover:text-white transition-all hover:scale-105 group"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6 duration-300" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-semibold border-white/10 hover:bg-gray-800 hover:text-white transition-all hover:scale-105 group"
            >
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6 duration-300" />
                Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="container mx-auto px-4 mt-32 pt-12 border-t border-white/5 relative z-10"
        variants={fadeUp}
      >
        <div className="flex flex-col md:row items-center justify-between gap-6 text-sm text-muted-foreground pb-12">
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] text-center uppercase tracking-[0.2em] text-primary mb-2">
              Developed with excellence
            </p>
            <p className="font-light">© {new Date().getFullYear()} Valmir Paiva Stachin. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, y: -2 }}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ willChange: "transform" }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, y: -2 }}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ willChange: "transform" }}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, y: -2 }}
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              style={{ willChange: "transform" }}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
