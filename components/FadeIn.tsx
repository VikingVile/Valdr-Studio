"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type FadeInProps = {
  children: ReactNode;
};

export default function FadeIn({ children }: FadeInProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile === null) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      key={isMobile ? "mobile" : "desktop"}
      initial={
        isMobile
          ? { opacity: 0, y: 26 }
          : { opacity: 0, y: 70, scale: 0.97 }
      }
      whileInView={
        isMobile
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{
        once: true,
        amount: isMobile ? 0.01 : 0.15,
        margin: isMobile ? "0px 0px -10px 0px" : "0px 0px -80px 0px",
      }}
      transition={{
        duration: isMobile ? 0.45 : 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

