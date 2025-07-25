import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPaintRoller } from "react-icons/fa";

interface DestaqueProjetoProps {
  titulo: string;
  descricao: string;
  imagem: string;
  altImagem: string;
  local: string;
  duracao: string;
  tipo: string;
  tinta: string;
  imagemDireita?: boolean;
}

export default function DestaqueProjeto({
  titulo,
  descricao,
  imagem,
  altImagem,
  local,
  duracao,
  tipo,
  tinta,
  imagemDireita = false,
}: DestaqueProjetoProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ${
          imagemDireita ? "md:flex-row-reverse" : ""
        }`}
        style={imagemDireita ? { direction: "rtl" } : {}}
      >
        {/* Imagem do projeto */}
        <motion.img
          src={imagem}
          alt={altImagem}
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          initial={{ opacity: 0, x: imagemDireita ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Conteúdo descritivo */}
        <motion.div
          initial={{ opacity: 0, x: imagemDireita ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
          style={imagemDireita ? { direction: "ltr" } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            {titulo}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {descricao}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              <span><strong>Local:</strong> {local}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-700" />
              <span><strong>Duração:</strong> {duracao}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPaintRoller className="text-blue-700" />
              <span><strong>Tipo:</strong> {tipo}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPaintRoller className="text-blue-700" />
              <span><strong>Tinta:</strong> {tinta}</span>
            </div>
          </div>

          <a
            href="/contacto"
            className="inline-block mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Pedir orçamento semelhante
          </a>
        </motion.div>
      </div>
    </section>
  );
}
