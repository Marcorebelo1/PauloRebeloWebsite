
import { motion } from "framer-motion";
import { FaPaintRoller } from "react-icons/fa";

export default function Hero() {


  return (
    <section
      className="bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 text-white 
      py-16 md:py-24 px-2 sm:px-4 text-center shadow-2xl rounded-2xl
       md:rounded-3xl mx-2 sm:mx-6 md:mx-20 mt-6 md:mt-8 relative overflow-hidden"
    >
      {/* Decoração de fundo suave + partículas animadas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Glassmorphism card */}
      <div className="max-w-2xl md:max-w-4xl mx-auto space-y-7 md:space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-2">
          <FaPaintRoller className="text-3xl md:text-4xl text-white drop-shadow-lg mb-1 sm:mb-0" />
          <span className="uppercase tracking-widest text-xs sm:text-sm md:text-base font-semibold text-cyan-100">Pintura Profissional</span>
          {/* Badge de experiência */}
          <span className="ml-0 sm:ml-4 mt-2 sm:mt-0 bg-white/20 text-cyan-50 text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md border border-white/30 font-semibold shadow-sm animate-fade-in">+20 anos de experiência</span>
        </div>
        <motion.div
          className="backdrop-blur-xl bg-white/10 rounded-2xl px-3 sm:px-8 py-6 md:py-10 shadow-xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight relative group"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transformamos os seus espaços<br className="hidden sm:inline" />
            <span className="text-cyan-100 block sm:inline"> com cor e elegância</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-cyan-50/90 font-medium max-w-xl md:max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Pintura de interiores e exteriores com garantia de qualidade, atenção ao detalhe e acabamento premium.
          </motion.p>
          <motion.a
            href="/contacto"
            className="inline-block bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-[length:200%_200%] bg-left-bottom animate-gradient-move text-blue-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:scale-105 hover:from-white hover:to-cyan-200 transition-all border-2 border-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
          >
            Peça um Orçamento
          </motion.a>
          {/* Microtexto de confiança */}
          <div className="text-xs sm:text-sm text-white mt-6 font-medium animate-fade-in delay-500">Orçamento Rápido e sem compromisso</div>
        </motion.div>
      </div>
    </section>
  );
}
