import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function GlassCard({
  children,
  className,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        "rounded-2xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "p-5",
        "shadow-lg",
        "transition-all duration-300",
        "hover:border-sky-400/40",
        "hover:bg-white/10",
        "hover:shadow-sky-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}