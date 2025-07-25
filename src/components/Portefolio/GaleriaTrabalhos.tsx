import { motion } from "framer-motion";

const projetos = [
	{ imagem: "/assets/projetos/Obra1.jpeg", titulo: "Empresa de Escritórios em Óbidos" },
	{ imagem: "/assets/projetos/Obra2.jpeg", titulo: "Fachada em S. Martinho" },
	{ imagem: "/assets/projetos/Obra3.jpeg", titulo: "Pintura Vivenda em Leiria" },
	{ imagem: "/assets/projetos/Obra4.jpeg", titulo: "Vivenda em Alcobaça" },
	{ imagem: "/assets/projetos/Obra5.jpeg", titulo: "Moradia em Santarém" },
	{ imagem: "/assets/projetos/Obra7.jpeg", titulo: "Moradia em Leiria" },
	{ imagem: "/assets/projetos/Obra8.jpeg", titulo: "Moradia em Caldas da Rainha" },
	{ imagem: "/assets/projetos/Obra9.jpeg", titulo: "Moradia em Alcobaça" },
	{ imagem: "/assets/projetos/Obra10.jpeg", titulo: "Limpeza de Telhado em São Martinho do Porto" },
	{ imagem: "/assets/projetos/Obra11.jpeg", titulo: "Pintura de Armazéns em Alcobaça" },
	{ imagem: "/assets/projetos/Obra12.jpeg", titulo: "Apartamento na Foz de Orelho" },
	{ imagem: "/assets/projetos/Obra13.jpeg", titulo: "Fachada de Prédio em Alcobaça" },
	{ imagem: "/assets/projetos/Obra14.jpeg", titulo: "Isolamento e Impermiabilização de Terraço em Alcobaça" },
	{ imagem: "/assets/projetos/Obra15.jpeg", titulo: "Moradia na Nazaré" },
	{ imagem: "/assets/projetos/Obra16.jpeg", titulo: "Moradia em Alcobaça" },
	{ imagem: "/assets/projetos/Obra18.jpeg", titulo: "Fachadas de Prédio em Lisboa" },
	{ imagem: "/assets/projetos/Obra19.jpeg", titulo: "Moradia no Algarve" },
	{ imagem: "/assets/projetos/Obra23.jpeg", titulo: "Pintura Apartamentos em São Martinho" },
	{ imagem: "/assets/projetos/Obra24.jpeg", titulo: "Pintura de Armazém em Alcobaça" },
	{ imagem: "/assets/projetos/Obra25.jpeg", titulo: "Moradias em Caldas da Rainha" },
	{ imagem: "/assets/projetos/Obra26.jpeg", titulo: "Montagem de Pladur em Leiria" },
	{ imagem: "/assets/projetos/Obra27.jpeg", titulo: "Montagem de Pladur em Leiria" },
	{ imagem: "/assets/projetos/Obra28.jpeg", titulo: "Barramento de Pladur em Leiria" },
	{ imagem: "/assets/projetos/Obra29.jpeg", titulo: "Pintura de Contentor" },
	{ imagem: "/assets/projetos/Obra31.jpeg", titulo: "Pintura na Nazaré" },
];

export default function GaleriaTrabalhos() {
	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl font-bold text-blue-700 mb-10">
						Outros Trabalhos Realizados
					</h2>
				</motion.div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{projetos.map((proj, index) => (
						<motion.div
							key={index}
							className="overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300 group relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.05, duration: 0.4 }}
						>
							<img
								src={proj.imagem}
								alt={proj.titulo}
								className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium px-2 py-1">
								{proj.titulo}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
