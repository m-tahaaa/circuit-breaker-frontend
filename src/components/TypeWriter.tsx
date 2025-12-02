import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TypeWriter = ({ text, delay = 100, className = "" }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{displayedText}</span>;
};
