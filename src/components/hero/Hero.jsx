import { motion } from "framer-motion";
import heroBg from "../../assets/backgrounds/hero-bg.jpg";

import Container from "../../ui/Container";
import PrimaryButton from "../../ui/PrimaryButton";
import Badge from "../../ui/Badge";
import GlassCard from "../../ui/GlassCard";

import { scrollToSection } from "../../utils/scrollToSection";

function Hero() {
  return (
    <section
  id="hero"
  className="relative flex min-h-screen items-center overflow-hidden"
>
      {/* Background */}

      <motion.img
        src={heroBg}
        alt="Hero"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Orange Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-24 h-[430px] w-[430px] rounded-full bg-orange-500/20 blur-[140px]"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-purple-600/20 blur-[150px]"
      />

      <Container className="relative z-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-2xl"
        >

          <Badge pulse>
            🔥 India's Trusted Free Fire Store
          </Badge>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Power Up

            <br />

            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">

              Your Game

            </span>

          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">

            Premium Free Fire Top-Up with instant delivery,
            secure verification and a premium shopping experience.

          </p>

          <div className="mt-10">

            <PrimaryButton
              className="w-auto px-10"
              onClick={() => scrollToSection("uid-section")}
            >

              Verify UID →

            </PrimaryButton>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-5">          {/* Orders */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-5 text-center">

              <h2 className="text-3xl font-black text-orange-400">
                2.4M+
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Orders
              </p>

            </GlassCard>
          </motion.div>

          {/* Rating */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-5 text-center">

              <h2 className="text-3xl font-black text-orange-400">
                4.9★
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Rating
              </p>

            </GlassCard>
          </motion.div>

          {/* Delivery */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-5 text-center">

              <h2 className="text-3xl font-black text-orange-400">
                {"<5s"}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Delivery
              </p>

            </GlassCard>
          </motion.div>

        </div>

      </motion.div>

    </Container>

    {/* Scroll Indicator */}

    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
    >

      <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">

        <motion.div
          animate={{
            y: [0, 14, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="mt-2 h-2 w-2 rounded-full bg-orange-400"
        />

      </div>

    </motion.div>

  </section>
  );
}

export default Hero;