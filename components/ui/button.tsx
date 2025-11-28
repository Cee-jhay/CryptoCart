import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
          variant === "default" && "bg-[#00c853] text-black hover:bg-[#00e85c] active:scale-95",
          variant === "outline" && "border border-[#00c853] text-[#00c853] hover:bg-[#00c853]/10",
          variant === "ghost" && "text-white hover:bg-white/10",
          size === "default" && "h-10 px-6 text-sm",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8 text-base",
          className
        )}
        ref={ref}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00e85c] via-[#ffd600] to-[#00c853] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };

