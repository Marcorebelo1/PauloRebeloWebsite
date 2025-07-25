import { motion } from "framer-motion";

const servicos = [
  { titulo: "Pintura Interior", imagem: "/assets/pintura-interior.jpg", descricao: "Ambientes renovados com elegância" },
  { titulo: "Pintura Exterior", imagem: "/assets/pintura-exterior.jpg", descricao: "Durabilidade e proteção para o exterior" },
  { titulo: "Papel de Parede", imagem: "/assets/papel-parede.jpg", descricao: "Estilo e personalidade aos espaços" },
  { titulo: "Isolamento Térmico", imagem: "/assets/isolamento.jpg", descricao: "Conforto e eficiência energética" },
  { titulo: "Lacagem de Portas", imagem: "/assets/lacagem.jpg", descricao: "Acabamento moderno e uniforme" },
  { titulo: "Tetos Falsos", imagem: "/assets/tetos.jpg", descricao: "Acústica e iluminação melhorada" },
  { titulo: "Pintura de Fachadas", imagem: "/assets/fachadas.jpg", descricao: "Realce do aspeto exterior" },
  { titulo: "Esmaltação de Ferros", imagem: "/assets/ferros.jpg", descricao: "Proteção contra ferrugem" },
  { titulo: "Decoração com Texturas", imagem: "/assets/texturas.jpg", descricao: "Efeitos visuais modernos" },
  { titulo: "Verniz e Acabamentos", imagem: "/assets/verniz.jpg", descricao: "Proteção e brilho" },
];

export default function HeroServicos() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">Serviços Disponíveis</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-8">
          {servicos.map((servico, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800">{servico.titulo}</h3>
                <p className="text-sm text-gray-700 mt-1">{servico.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
