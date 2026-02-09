import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  delay?: number;
}

const TextReveal = ({
  text,
  className = "",
  highlightText,
  highlightClassName = "text-gradient",
  delay = 0,
}: TextRevealProps) => {
  // Split into words, marking which belong to highlight
  const fullText = highlightText ? text.replace(highlightText, `|||${highlightText}|||`) : text;
  const segments = fullText.split("|||").filter(Boolean);

  let wordIndex = 0;

  return (
    <span className={className}>
      {segments.map((segment, si) => {
        const isHighlight = segment === highlightText;
        const words = segment.split(" ").filter(Boolean);

        return words.map((word, wi) => {
          const currentIndex = wordIndex++;
          return (
            <motion.span
              key={`${si}-${wi}`}
              className={`inline-block ${isHighlight ? highlightClassName : ""}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: delay + currentIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
              {/* Add space after each word except last in the whole text */}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          );
        });
      })}
    </span>
  );
};

export default TextReveal;
