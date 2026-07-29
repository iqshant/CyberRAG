import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-sky-500 text-white hover:bg-sky-400 border border-sky-400/30",

  secondary:
    "bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10",

  ghost:
    "bg-transparent text-slate-300 hover:bg-white/5",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function GlassButton({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        "font-medium transition-all duration-200",
        "backdrop-blur-xl",
        "shadow-lg",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}