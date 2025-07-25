import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ZonaAtuacao() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 flex justify-center items-center gap-3">
            <FaMapMarkedAlt className="text-blue-800 text-3xl" />
            Zona de Atuação
          </h2>
          <p className="text-blue-900 font text-lg mt-2 max-w-xl mx-auto">
            Com sede em <strong>Alcobaça, Leiria</strong>, realizamos obras de pintura por todo o território nacional — de norte a sul de Portugal.
          </p>
        </motion.div>

        <div className="mx-auto w-full max-w-2xl rounded-lg shadow-lg border border-gray-200 overflow-hidden aspect-video">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2227512.8676767875!2d-8.94946590534968!3d39.55179194949599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18a5ca4bcf120f%3A0x7c03b67566f99493!2zQWxjb2Jhw6dh!5e0!3m2!1spt-PT!2spt!4v1753354875639!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

        <br></br>        
        <br></br>
        <br></br>



      </div>
    </section>
  );
}
