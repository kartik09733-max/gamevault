import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {/* Top Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[80px]" />
      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>
    </motion.div>
  );
}

export default GlassCard;