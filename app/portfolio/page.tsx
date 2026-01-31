"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce platform with real-time inventory management and secure payment processing.",
      results: ["150% increase in sales", "40% faster load times", "50k+ monthly users"],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "iOS and Android app for fitness enthusiasts with workout tracking, nutrition planning, and social features.",
      results: ["10k+ downloads in 3 months", "4.8★ rating", "30% retention rate"],
      technologies: ["React Native", "Firebase", "Redux"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Modern, intuitive dashboard for a B2B SaaS platform with advanced data visualization.",
      results: ["60% improvement in UX", "35% increase in conversions", "Reduced support tickets by 40%"],
      technologies: ["Figma", "React", "D3.js", "Tailwind CSS"],
      image: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing and management platform with advanced search filters and virtual tours.",
      results: ["2000+ active listings", "80% increase in leads", "45% faster property search"],
      technologies: ["Next.js", "PostgreSQL", "AWS S3"],
      image: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      description: "Multi-channel marketing campaign for a growing e-commerce brand across Google Ads and Meta platforms.",
      results: ["3x ROI", "250% increase in website traffic", "$150k revenue in 6 months"],
      technologies: ["Google Ads", "Meta Ads", "Google Analytics"],
      image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      title: "Healthcare Management System",
      category: "Web Development",
      description: "Comprehensive patient management system with appointment scheduling and telemedicine features.",
      results: ["500+ healthcare providers", "99.9% uptime", "HIPAA compliant"],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
  ];

  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "Marketing"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Explore our successful projects and the measurable results we've achieved
              for our clients across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white dark:bg-slate-900 sticky top-20 z-30 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Image Placeholder */}
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary-600 dark:text-primary-400 font-semibold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's create something amazing together. Contact us to discuss your ideas.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
