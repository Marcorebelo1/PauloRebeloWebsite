"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const dados = [
	{
		icon: <FiPhone />,
		titulo: "Telefone",
		texto: "+351 969352635",
		link: "tel:+351969352635",
	},
	{
		icon: <FiMail />,
		titulo: "Email",
		texto: "paulo-rebelo-@hotmail.com",
		link: "mailto:paulo-rebelo-@hotmail.com",
	},
	{
		icon: <FiMapPin />,
		titulo: "Morada",
		texto: "Alcobaça, Leiria, Portugal",
		link: "https://www.google.com/maps/place/Alcoba%C3%A7a/@39.533733,-9.0140483,13z/data=!3m1!4b1!4m6!3m5!1s0xd18a5ca4bcf120f:0x7c03b67566f99493!8m2!3d39.5503343!4d-8.9730531!16zL20vMDEzMnk?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
	},
];

export default function ContactosCards() {
	return (
		<section className="pt-16 pb-8 px-4 bg-gradient-to-b from-blue-50 to-white">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3"
			>
				{dados.map((c, i) => (
					<motion.a
						key={i}
						href={c.link}
						target={c.titulo === "Morada" ? "_blank" : undefined}
						whileHover={{
							scale: 1.06,
							boxShadow: "0 8px 32px rgba(30, 64, 175, 0.15)",
						}}
						className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 transition hover:bg-blue-50 hover:shadow-xl"
					>
						<div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
							<span className="text-4xl text-blue-700">{c.icon}</span>
						</div>
						<h3 className="font-bold text-xl text-blue-800 mb-2">
							{c.titulo}
						</h3>
						<p className="text-gray-700 text-base">{c.texto}</p>
					</motion.a>
				))}
			</motion.div>
		</section>
	);
}
