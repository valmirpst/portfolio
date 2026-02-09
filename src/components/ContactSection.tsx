import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn, hoverScale } from "@/lib/animations";

const LINKEDIN_URL = "#";
const GITHUB_URL = "#";
const EMAIL = "valmir@email.com";

const ContactSection = () => {
  return (
    <motion.section
      id="contato"
      className="section-spacing"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-2">
          Vamos <span className="text-gradient">Conversar</span>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Separator className="w-16 bg-primary mb-8 mx-auto" />
        </motion.div>

        <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
          Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes.
          Sinta-se à vontade para entrar em contato!
        </motion.p>

        <motion.div variants={scaleIn} className="flex flex-wrap justify-center gap-4">
          <motion.div {...hoverScale}>
            <Button asChild className="glow">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
          <motion.div {...hoverScale}>
            <Button variant="outline" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
          <motion.div {...hoverScale}>
            <Button variant="outline" asChild>
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="container mx-auto px-4 mt-20 pt-8 border-t border-border"
        variants={fadeUp}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} Valmir Paiva Stachin
          </p>
          <div className="flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
