import { motion } from "framer-motion";
import {
  CheckCircle2,
  Copy,
  Heart,
  ShieldCheck,
  Star,
} from "lucide-react";

import playerAvatar from "../../assets/player/player-avatar.png";

import GlassCard from "../../ui/GlassCard";
import PrimaryButton from "../../ui/PrimaryButton";
import Badge from "../../ui/Badge";

import useCopy from "../../hooks/useCopy";

function VerifiedCard({ player }) {
  const { copy, copied } = useCopy();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="mt-8"
    >
      <GlassCard className="overflow-hidden">

        {/* Header */}

        <div className="relative overflow-hidden p-8">

          {/* Background Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

          {/* Online */}

          <div className="absolute right-6 top-6 flex items-center gap-2">

            <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm font-semibold text-emerald-400">

              Online

            </span>

          </div>

          {/* Avatar */}

          <motion.div
            whileHover={{
              rotate: 6,
              scale: 1.05,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative mx-auto w-fit"
          >

            {/* Online Dot */}

            <span className="absolute bottom-1 right-1 z-20 h-5 w-5 rounded-full border-2 border-[#10151D] bg-green-400" />

            {/* Avatar */}

            <div className="rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-[3px] shadow-[0_0_35px_rgba(249,115,22,.45)]">

              <img
                src={playerAvatar}
                alt="Player"
                className="h-24 w-24 rounded-full object-cover"
              />

            </div>

          </motion.div>

          {/* Verified Badge */}

          <div className="mt-6 flex justify-center">

            <Badge color="green">

              <ShieldCheck
                size={15}
                className="mr-2"
              />

              VERIFIED PLAYER

            </Badge>

          </div>

          {/* Name */}

          <h2 className="mt-6 text-center text-3xl font-black text-white">

            {player.name}

          </h2>

          <p className="mt-2 text-center font-mono text-gray-400">

            UID {player.uid}

          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-5 px-6">

          <GlassCard
            hover={false}
            className="p-6 text-center"
          >

            <Star
              size={28}
              className="mx-auto text-orange-400"
            />

            <h3 className="mt-4 text-4xl font-black text-orange-400">

              {player.level}

            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">

              Level

            </p>

          </GlassCard>

          <GlassCard
            hover={false}
            className="p-6 text-center"
          >

            <Heart
              size={28}
              className="mx-auto text-pink-400"
            />

            <h3 className="mt-4 text-4xl font-black text-pink-400">

              {player.likes}

            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">

              Likes

            </p>

          </GlassCard>

        </div>
                {/* Success Section */}

        <div className="mt-6 px-6 pb-6">

          <GlassCard
            hover={false}
            className="border-emerald-500/20 bg-emerald-500/10 p-6"
          >

            <div className="flex items-start gap-4">

              <div className="rounded-full bg-emerald-500/20 p-3">

                <CheckCircle2
                  size={28}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <h3 className="text-lg font-black text-white">

                  Ready to Purchase

                </h3>

                <p className="mt-2 leading-7 text-gray-300">

                  Your Free Fire account has been verified successfully.
                  You can now continue to purchase Diamonds,
                  Memberships and Weekly Passes.

                </p>

              </div>

            </div>

          </GlassCard>

          {/* Copy UID Button */}

          <div className="mt-6">

            <PrimaryButton
              type="button"
              onClick={() => copy(player.uid)}
            >

              <span className="flex items-center justify-center gap-2">

                <Copy size={20} />

                {copied ? "UID Copied ✓" : "Copy UID"}

              </span>

            </PrimaryButton>

          </div>

        </div>

      </GlassCard>

    </motion.div>
  );
}

export default VerifiedCard;