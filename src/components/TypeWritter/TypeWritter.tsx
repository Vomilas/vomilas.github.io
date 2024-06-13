"use client";

import { memo, useState, useEffect } from "react";

type TypeWritterProps = {
  text: string;
  delay?: number;
  infinite?: boolean;
};

export const TypeWritter = memo(
  ({ text, delay, infinite = false }: TypeWritterProps) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;

      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        setCurrentIndex(0);
        setCurrentText("");
      }

      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span>{currentText}</span>;
  },
);

TypeWritter.displayName = "TypeWritter";
