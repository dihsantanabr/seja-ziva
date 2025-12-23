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
        <div className="hidden lg:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={`Greemy ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
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