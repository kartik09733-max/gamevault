import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

import { usePlayer } from "../../context/PlayerContext";

import GlassCard from "../../ui/GlassCard";
import Badge from "../../ui/Badge";
import PrimaryButton from "../../ui/PrimaryButton";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <GlassCard className="group relative overflow-hidden bg-[#141922]">

        {/* Glow */}

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

          <div className="pointer-events-none absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[100px]" />

        </div>

        {/* Badge */}

        {product.badge && (

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute left-4 top-4 z-20"
          >

            <Badge pulse>

              🔥 {product.badge}

            </Badge>

          </motion.div>

        )}

        {/* Discount */}

        <div className="pointer-events-none absolute right-4 top-4 z-20">

          <Badge color="green">

            {discount}% OFF

          </Badge>

        </div>

        {/* Product Image */}

        <div className="relative flex justify-center pt-14">

          <motion.img
            src={product.image}
            alt={product.title}
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative z-10 h-[185px] object-contain"
          />

        </div>

        {/* Divider */}

        <div className="mx-6 mt-6 border-t border-white/10" />

        {/* Content */}

        <div className="relative z-10 px-6 pb-6 pt-6">

          <h3 className="text-center text-2xl font-black text-white">

            {product.title}

          </h3>

          {/* Price */}

          <div className="mt-6 text-center">

            <h2 className="text-5xl font-black text-orange-400">

              ₹{product.price}

            </h2>

            <p className="mt-2 text-gray-500 line-through">

              ₹{product.oldPrice}

            </p>

          </div>

          {/* Delivery */}

          <div className="mt-6 flex justify-center">

            <Badge color="green">

              <Zap
                size={15}
                className="mr-2"
              />

              Instant Delivery

            </Badge>

          </div>

          {/* Status */}

          <div className="mt-5 flex items-center justify-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-gray-400">

              Ready for Instant Delivery

            </span>

          </div>

          {/* Premium */}

          <div className="mt-4 flex items-center justify-center gap-2">

            <Sparkles
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm font-medium text-gray-300">

              Official Top-Up Partner

            </span>

          </div>
                    {/* Buy Button */}

          <div className="relative z-20 mt-7">

            <PrimaryButton
              type="button"
              onClick={() => {
                if (player && onBuy) {
                  onBuy();
                }
              }}
              disabled={!player}
            >

              {player ? (
                <span className="flex items-center justify-center gap-2">

                  🛒 BUY NOW

                </span>
              ) : (
                "VERIFY UID FIRST"
              )}

            </PrimaryButton>

          </div>

        </div>

        {/* Bottom Glow */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      </GlassCard>

    </motion.div>
  );
}

export default ProductCard;