import { fadeDown, fadeUp, staggerContainerFast } from "@/lib/animations";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        initial={shouldReduceMotion ? { y: 0 } : { y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <motion.div
            className="font-mono text-sm font-medium text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HashLink smooth to="#hero" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Logo"
                width={32}
                height={32}
              />
            </HashLink>
          </motion.div>

          {/* Desktop */}
          <motion.ul
            className="hidden md:flex items-center gap-8"
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.li key={item.href} variants={fadeDown}>
                <HashLink
                  smooth
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </HashLink>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2 flex items-center justify-center rounded-md hover:bg-accent/50"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-2 pb-4 pt-2 shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.05 }}
                  >
                    <HashLink
                      smooth
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block w-full py-3 px-4 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </HashLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
