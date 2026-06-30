import { motion } from "framer-motion";
import { Zap } from "lucide-react";

import { usePlayer } from "../../context/PlayerContext";

import GlassCard from "../../ui/GlassCard";
import Badge from "../../ui/Badge";
import PrimaryButton from "../../ui/PrimaryButton";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function ProductCard({ product, onBuy }) {
  const { player } = usePlayer();

  const discount = Math.round(
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <GlassCard className="group relative overflow-hidden rounded-3xl bg-[#141922]">

        {/* Glow */}

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

          <div className="absolute left-1/2 top-4 h-36 w-36 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[80px]" />

        </div>

        {/* Top Badges */}

        {product.badge && (

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-3 top-3 z-20"
          >

            <Badge
              pulse
              className="px-2 py-1 text-[10px]"
            >
              🔥 {product.badge}
            </Badge>

          </motion.div>

        )}

        <div className="absolute right-3 top-3 z-20">

          <Badge
            color="green"
            className="px-2 py-1 text-[10px]"
          >
            {discount}% OFF
          </Badge>

        </div>

        {/* Product Image */}

        <div className="relative flex justify-center pt-6">

          <motion.img
            src={product.image}
            alt={product.title}
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10 h-24 object-contain md:h-36"
          />

        </div>

        {/* Content */}

        <div className="relative z-10 px-4 pb-4 pt-3">

          <h3 className="line-clamp-2 text-center text-[15px] font-black leading-5 text-white md:text-xl">

            {product.title}

          </h3>

          {/* Price */}

          <div className="mt-3 text-center">

            <h2 className="text-2xl font-black text-orange-400 md:text-4xl">

              ₹{product.price}

            </h2>

            <p className="mt-1 text-[11px] text-gray-500 line-through">

              ₹{product.oldPrice}

            </p>

          </div>

          {/* Delivery */}

          <div className="mt-3 flex justify-center">

            <Badge
              color="green"
              className="px-2.5 py-1 text-[10px]"
            >

              <Zap
                size={12}
                className="mr-1"
              />

              Instant Delivery

            </Badge>

          </div>

                    {/* Buy Button */}

          <div className="relative z-20 mt-4">

            <PrimaryButton
              type="button"
              onClick={() => {
                if (player && onBuy) {
                  onBuy();
                }
              }}
              disabled={!player}
              className="h-10 rounded-xl text-sm font-bold"
            >
              {player ? (
                <span className="flex items-center justify-center gap-1">
                  🛒 BUY NOW
                </span>
              ) : (
                "VERIFY UID"
              )}
            </PrimaryButton>

          </div>

        </div>

        {/* Bottom Accent */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 transition duration-300 group-hover:opacity-100" />

      </GlassCard>

    </motion.div>
  );
}

export default ProductCard;