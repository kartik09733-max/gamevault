import { motion } from "framer-motion";

function SectionTitle({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center" : ""} mb-12`}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;