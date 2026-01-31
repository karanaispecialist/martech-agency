"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content: "MarTech transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 150%. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GrowthLabs",
      content: "The digital marketing campaigns they ran for us were game-changing. We saw a 3x ROI within the first quarter. Professional, responsive, and results-driven.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Innovate Solutions",
      content: "From UI/UX design to full-stack development, MarTech exceeded our expectations. They truly understand modern web technologies and user experience.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
