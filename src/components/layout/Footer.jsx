import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import logo from "../../assets/logo/gamevault-logo.png";
const links = [
  {
    title: "Home",
    id: "hero",
  },
  {
    title: "Products",
    id: "products",
  },
  {
    title: "FAQ",
    id: "faq",
  },
  {
    title: "Support",
    id: "footer",
  },
];

function Footer() {
  const scroll = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <footer
      id="footer"
      className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#090D14]"
    >

      {/* Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

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
          className="grid gap-14 lg:grid-cols-3"
        >

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="GameVault Logo"
                className="h-16 w-16 rounded-2xl object-cover shadow-lg shadow-orange-500/20"
              />

              <div>

                <h2 className="text-2xl font-black text-white">

                  GameVault

                </h2>

                <p className="text-gray-400">

                  Premium Top-Up Store

                </p>

              </div>

            </div>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">

              Fast, secure and trusted Free Fire top-ups with instant delivery and verified payment support.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <Zap className="text-orange-400" />

                <span className="text-gray-300">

                  Instant Delivery

                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-emerald-400" />

                <span className="text-gray-300">

                  Secure Payments

                </span>

              </div>

              <div className="flex items-center gap-3">

                <MessageCircle className="text-sky-400" />

                <span className="text-gray-300">

                  24×7 Support

                </span>

              </div>

            </div>

          </div>
                    {/* Quick Links */}

          <div>

            <h3 className="text-xl font-black text-white">

              Quick Links

            </h3>

            <div className="mt-8 space-y-4">

              {links.map((link) => (

                <button
                  key={link.title}
                  onClick={() => scroll(link.id)}
                  className="flex items-center gap-3 text-gray-400 transition hover:text-orange-400"
                >

                  <ChevronRight
                    size={18}
                  />

                  {link.title}

                </button>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-black text-white">

              Contact

            </h3>

            <p className="mt-6 leading-8 text-gray-400">

              Need help with your order or payment?
              Our support team is always ready to assist you.

            </p>

            <a
              href="https://wa.me/919703121668"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4 font-bold text-white transition hover:scale-105"
            >

              <MessageCircle size={20} />

              WhatsApp Support

            </a>

          </div>

        </motion.div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-gray-500">

              © 2026 GameVault. All Rights Reserved.

            </p>

            <p className="font-medium text-gray-400">

              Made with ❤️ for Free Fire Players

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;