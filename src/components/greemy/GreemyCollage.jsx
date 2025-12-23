import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/c68fcb6b0_greemy01643.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/5f4ebde22_greemy01645.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/3d01c000c_greemy01648.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/5f0f7feaf_greemy01654.jpg"
];

export default function GreemyCollage() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Viva a Experiência Verde
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Saúde e sabor em cada momento
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-5 row-span-2"
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[0]}
                alt="Greemy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-7"
          >
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[1]}
                alt="Greemy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-4"
          >
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[2]}
                alt="Greemy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-3"
          >
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[3]}
                alt="Greemy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={idx === 0 ? "col-span-2" : ""}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={`Greemy ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}