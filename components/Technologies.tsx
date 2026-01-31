"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Palette } from "lucide-react";

const Technologies = () => {
  const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "AWS", color: "#FF9900" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "TypeScript", color: "#3178C6" },
  ];

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, performant solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-8 glass rounded-2xl card-hover"
            >
              <div
                className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: tech.color + "20", color: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
