import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const certificacoes = [
	{
		titulo: "Tintas Certificadas",
		descricao: "Utilizamos apenas tintas aprovadas e de alta qualidade.",
		icone: <FaCheckCircle className="text-2xl text-green-500" />,
	},
	{
		titulo: "Garantia 2 Anos",
		descricao: "Todos os serviços incluem garantia real de 2 anos.",
		icone: <FaCheckCircle className="text-2xl text-green-500" />,
	},
	{
		titulo: "Profissionais Certificados",
		descricao: "Somos membros da Associação Portuguesa de Profissionais da Pintura.",
		icone: <FaCheckCircle className="text-2xl text-green-500" />,
	},
];

export default function Certificacoes() {
	return (
		<section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
			<div className="max-w-4xl mx-auto">
				<motion.h2
					className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Certificações & Garantias
				</motion.h2>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8">
					{certificacoes.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.2, duration: 0.5 }}
							className="bg-white/70 backdrop-blur-md border border-blue-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center min-w-[220px] max-w-xs"
						>
							<div className="mb-3">{item.icone}</div>
							<h3 className="text-lg font-semibold text-blue-900 mb-2">
								{item.titulo}
							</h3>
							<p className="text-sm text-gray-700">{item.descricao}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
