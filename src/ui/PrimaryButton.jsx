import { motion } from "framer-motion";

function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={{
        duration: 0.2,
      }}
      className={`
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-orange-500
        via-pink-500
        to-purple-600
        px-6
        py-4
        text-base
        font-black
        tracking-wide
        text-white
        shadow-lg
        shadow-orange-500/20
        transition-all
        duration-300
        hover:shadow-orange-500/40
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export default PrimaryButton;