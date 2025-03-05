import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface MarqueeItemProps extends MotionProps {
  children: ReactNode;
  orientation: "Horizontal" | "Vertical";
  initial: {
    x?: number | string;
    y?: number | string;
  };
  animate: {
    x?: number | string;
    y?: number | string;
  };
  className?: string;
  speed?: number;
}

const MarqueeItem = ({
  children,
  orientation = "Horizontal",
  initial,
  animate,
  className = "",
  speed = 5,
  ...motionProps
}: MarqueeItemProps) => {
  const defaultInitial = orientation === "Horizontal" ? { x: 0 } : { y: 0 };

  const defaultAnimate =
    orientation === "Horizontal" ? { x: "-100%" } : { y: "-100%" };

  return (
    <motion.div
      initial={initial || defaultInitial}
      animate={animate || defaultAnimate}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`flex ${
        orientation === "Horizontal" ? "flex-row" : "flex-col"
      } flex-shrink-0 gap-4 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default MarqueeItem;
