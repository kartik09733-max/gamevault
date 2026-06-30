import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import recentPurchases from "../../data/recentPurchases";
import playerAvatar from "../../assets/player/player-avatar.png";

function RecentPurchase() {
  const [purchase, setPurchase] = useState(
    recentPurchases[Math.floor(Math.random() * recentPurchases.length)]
  );

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let nextTimeout;
    let hideTimeout;

    const showNextNotification = () => {
      // Hide current notification
      setVisible(false);

      hideTimeout = setTimeout(() => {
        // Pick random purchase
        const randomPurchase =
          recentPurchases[
            Math.floor(Math.random() * recentPurchases.length)
          ];

        setPurchase(randomPurchase);

        // Show notification
        setVisible(true);

        // Schedule next notification randomly (8-18 sec)
        nextTimeout = setTimeout(
          showNextNotification,
          Math.floor(Math.random() * 10000) + 8000
        );
      }, 500);
    };

    // First notification changes after 5 sec
    nextTimeout = setTimeout(showNextNotification, 5000);

    return () => {
      clearTimeout(nextTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : -40,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="flex w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-[#141922]/95 p-3 shadow-2xl backdrop-blur-xl">

        {/* Avatar */}

        <img
          src={playerAvatar}
          alt="Player"
          className="h-11 w-11 rounded-full object-cover"
        />

        {/* Content */}

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              RECENT PURCHASE
            </p>

          </div>

          <p className="mt-1 text-sm font-bold text-white">
            {purchase.name} from {purchase.city}
          </p>

          <p className="mt-1 text-xs font-medium text-gray-300">
            Purchased
          </p>

          <p className="mt-1 text-xs font-semibold text-orange-400">
            💎 {purchase.product}
          </p>

          <p className="mt-2 text-[10px] text-gray-500">
            {purchase.time}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default RecentPurchase;