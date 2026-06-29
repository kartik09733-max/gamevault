import { motion } from "framer-motion";

function Badge({
  children,
  color = "orange",
  pulse = false,
  className = "",
}) {
  const colors = {
    orange:
      "from-orange-500 to-pink-500 text-white",

    green:
      "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",

    red:
      "bg-red-500/10 border border-red-500/20 text-red-400",

    blue:
      "bg-blue-500/10 border border-blue-500/20 text-blue-400",

    gray:
      "bg-white/10 border border-white/10 text-white",
  };

  return (
    <motion.div
      animate={
        pulse
          ? {
              scale: [1, 1.06, 1],
            }
          : {}
      }
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-4
        py-2
        text-xs
        font-black
        tracking-wide

        ${
          color === "orange"
            ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
            : colors[color]
        }

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Badge;