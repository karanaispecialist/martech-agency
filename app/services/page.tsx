"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Database,
  Settings,
  Layout,
  Zap,
  LineChart,
  Mail,
  Search,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      features: [
        "Responsive Design",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization",
      ],
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "App Maintenance & Support",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
        "Responsive Design",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that maximize your ROI.",
      features: [
        "Google Ads Campaigns",
        "Meta Ads (Facebook & Instagram)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Conversion Optimization",
      ],
      technologies: ["Google Ads", "Facebook Ads Manager", "Google Analytics", "HubSpot"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: [
        "Technical SEO Audit",
        "On-Page Optimization",
        "Link Building",
        "Local SEO",
        "Keyword Research",
        "SEO Reporting & Analytics",
      ],
      technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Moz"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights for better decision-making.",
      features: [
        "Data Visualization",
        "Custom Dashboards",
        "Predictive Analytics",
        "Business Intelligence",
        "Data Integration",
        "Reporting Automation",
      ],
      technologies: ["Google Analytics", "Power BI", "Tableau", "Python"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Settings,
      title: "CRM & Automation",
      description: "Streamline your operations with custom CRM and automation solutions.",
      features: [
        "Custom CRM Development",
        "Workflow Automation",
        "Lead Management",
        "Sales Pipeline Optimization",
        "Integration with Existing Tools",
        "Process Automation",
      ],
      technologies: ["Salesforce", "HubSpot", "Zapier", "Make"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: [
        "Cloud Migration",
        "Server Configuration",
        "DevOps & CI/CD",
        "Database Management",
        "Cloud Security",
        "Performance Monitoring",
      ],
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      color: "from-cyan-500 to-blue-500",
    },
  ];

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Comprehensive technology and marketing solutions to accelerate your
              business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex">
                    Get Started
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass rounded-2xl p-8 h-full">
                    <div className={`w-full h-64 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-32 h-32 text-white opacity-20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
