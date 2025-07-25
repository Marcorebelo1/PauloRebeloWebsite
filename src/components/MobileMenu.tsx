// src/components/MobileMenu.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaPaintBrush, FaImages, FaUsers, FaEnvelope } from "react-icons/fa";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`text-gray-700 focus:outline-none transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
        aria-label="Abrir menu"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg px-4 py-5 flex flex-col rounded-2xl space-y-3 md:hidden z-40 border border-blue-100"
          >
            <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"><FaHome className="text-blue-400" />Início</a>
            <a href="/servicos" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"><FaPaintBrush className="text-blue-400" />Serviços</a>
            <a href="/portefolio" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"><FaImages className="text-blue-400" />Portefolio</a>
            <a href="/quem_somos" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"><FaUsers className="text-blue-400" />Quem Somos</a>
            <a href="/contacto" className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow hover:from-cyan-400 hover:to-blue-600 transition-all"><FaEnvelope />Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
