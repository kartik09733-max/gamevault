import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShieldCheck, X } from "lucide-react";

import logo from "../../assets/logo/gamevault-logo.png";
import { scrollToSection } from "../../utils/scrollToSection";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { title: "Home", id: "hero" },
    { title: "Products", id: "products" },
    { title: "FAQ", id: "faq" },
    { title: "Support", id: "footer" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#090D14]/85 backdrop-blur-2xl shadow-lg"
            : "bg-transparent"
        }`}
      >

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

          {/* Logo */}

          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3"
          >

           <img
             src={logo}
             alt="GameVault Logo"
             className="h-14 w-14 rounded-2xl object-cover shadow-lg shadow-orange-500/20"
           />

            <div>

              <h1 className="text-lg font-black tracking-wide text-white">

                GameVault

              </h1>

              <p className="text-xs text-gray-400">

                Premium Top-Up Store

              </p>

            </div>

          </button>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">

            {links.map((link) => (

              <button
                key={link.title}
                onClick={() => scrollToSection(link.id)}
                className="font-semibold text-gray-300 transition hover:text-orange-400"
              >

                {link.title}

              </button>

            ))}

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 md:flex">

              <ShieldCheck
                size={16}
                className="text-emerald-400"
              />

              <span className="text-xs font-semibold text-emerald-300">

                Verified Store

              </span>

            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
            >

              <Menu size={22} />

            </button>

          </div>

        </div>

      </header>
            {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-80 flex-col bg-[#10151D] shadow-2xl lg:hidden"
            >

              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 p-6">

                <div>

                  <h2 className="text-xl font-black text-white">
                    GameVault
                  </h2>

                  <p className="text-sm text-gray-400">
                    Premium Top-Up Store
                  </p>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/10 p-2"
                >
                  <X className="text-white" size={22} />
                </button>

              </div>

              {/* Links */}

              <div className="flex flex-1 flex-col p-6">

                {links.map((link) => (

                  <button
                    key={link.title}
                    onClick={() => {
                      scrollToSection(link.id);
                      setOpen(false);
                    }}
                    className="rounded-2xl px-4 py-4 text-left text-lg font-bold text-white transition hover:bg-white/5 hover:text-orange-400"
                  >

                    {link.title}

                  </button>

                ))}

              </div>

              {/* Footer */}

              <div className="border-t border-white/10 p-6">

                <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

                  <ShieldCheck
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="font-semibold text-emerald-300">

                    Verified & Secure Store

                  </span>

                </div>

              </div>

            </motion.aside>

          </>

        )}

      </AnimatePresence>

    </>
  );
}

export default Navbar;