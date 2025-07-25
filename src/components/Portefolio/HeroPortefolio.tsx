import { motion } from "framer-motion";

export default function HeroPortefolio() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white overflow-hidden">
      
      {/* Overlay decorativo opcional */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Conteúdo central */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Há mais de 30 anos<br />
          <span className="text-cyan-100">a pintar Portugal</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-cyan-100 font-medium">
          Veja os nossos projetos mais marcantes — de Norte a Sul do país.
        </p>
      </motion.div>

    </section>
  );
}
