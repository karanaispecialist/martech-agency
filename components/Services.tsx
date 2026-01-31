"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, TrendingUp, Database, Settings } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern frameworks like Next.js, React, and Node.js for optimal performance.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that captivate users and drive engagement.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic Google Ads, Meta Ads, and SEO campaigns that maximize your ROI.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Settings,
      title: "CRM & Automation",
      description: "Streamline operations with custom CRM solutions and intelligent automation.",
      color: "from-yellow-500 to-orange-500",
    },
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology and marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-primary-600 dark:text-primary-400 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
