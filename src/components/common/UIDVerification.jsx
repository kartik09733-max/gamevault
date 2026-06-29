import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Gamepad2, LoaderCircle } from "lucide-react";

import { verifyUID } from "../../services/uidService";
import { usePlayer } from "../../context/PlayerContext";

import Container from "../../ui/Container";
import GlassCard from "../../ui/GlassCard";
import PrimaryButton from "../../ui/PrimaryButton";
import SectionTitle from "../../ui/SectionTitle";

import VerifiedCard from "./VerifiedCard";

import { scrollToSection } from "../../utils/scrollToSection";

function UIDVerification() {
  const { player, setPlayer } = usePlayer();

  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (!uid.trim()) {
      setError("Please enter your Free Fire UID.");
      return;
    }

    setLoading(true);
    setError("");
    setPlayer(null);

    const result = await verifyUID(uid);

    setLoading(false);

    if (result.success) {
      setPlayer(result.player);

      setTimeout(() => {
        scrollToSection("products");
      }, 700);
    } else {
      setError(result.message || "Player not found.");
    }
  };

  return (
    <section
      id="uid-section"
      className="relative py-24"
    >
      <Container>

        <GlassCard className="p-6 md:p-10">

          <SectionTitle
            badge="STEP 1"
            title="Verify Your Free Fire Account"
            description="Securely verify your account before purchasing Diamonds, Memberships or Weekly Passes."
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto mt-10 max-w-3xl"
          >

            <div className="flex flex-col gap-4 md:flex-row">

              <div className="relative flex-1">

                <Gamepad2
                  size={22}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400"
                />

                <input
                  type="number"
                  placeholder="Enter Free Fire UID"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleVerify();
                    }
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-[#0B0F17] py-4 pl-14 pr-5 text-lg text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />

              </div>

              <PrimaryButton
                onClick={handleVerify}
                disabled={loading}
                className="md:w-auto md:px-10"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">

                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />

                    Verifying...

                  </span>
                ) : (
                  "Verify Account"
                )}
              </PrimaryButton>

            </div>

            {error && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-center"
              >

                <h3 className="font-bold text-red-400">

                  Verification Failed

                </h3>

                <p className="mt-2 text-sm text-gray-300">

                  {error}

                </p>

              </motion.div>

            )}

            {/* Trust Row */}

            <div className="mt-8 grid grid-cols-3 gap-4">              <GlassCard
                hover={false}
                className="p-4 text-center"
              >
                <ShieldCheck
                  className="mx-auto text-emerald-400"
                  size={26}
                />

                <h3 className="mt-3 font-bold text-white">
                  Secure
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  Safe verification
                </p>

              </GlassCard>

              <GlassCard
                hover={false}
                className="p-4 text-center"
              >
                <Zap
                  className="mx-auto text-orange-400"
                  size={26}
                />

                <h3 className="mt-3 font-bold text-white">
                  Instant
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  Fast response
                </p>

              </GlassCard>

              <GlassCard
                hover={false}
                className="p-4 text-center"
              >
                <Gamepad2
                  className="mx-auto text-purple-400"
                  size={26}
                />

                <h3 className="mt-3 font-bold text-white">
                  Official
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  Player data
                </p>

              </GlassCard>

            </div>

          </motion.div>

          {player && (
            <VerifiedCard player={player} />
          )}

        </GlassCard>

      </Container>

    </section>
  );
}

export default UIDVerification;