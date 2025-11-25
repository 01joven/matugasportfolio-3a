"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Scheduling", path: "/round-robin" },
  { name: "Contact", path: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Portfolio
        </Link>

        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-slate-300 hover:text-cyan-300 transition relative"
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute bottom-[-10px] left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.7)]"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}