"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Web Development Trends to Watch in 2026",
      excerpt: "Explore the cutting-edge technologies and practices shaping the future of web development.",
      author: "Alex Johnson",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Web Development",
      slug: "web-development-trends-2026",
    },
    {
      id: 2,
      title: "How to Maximize ROI with Google Ads",
      excerpt: "Learn proven strategies to optimize your Google Ads campaigns and achieve better returns on investment.",
      author: "Michael Brown",
      date: "January 20, 2026",
      readTime: "7 min read",
      category: "Digital Marketing",
      slug: "maximize-roi-google-ads",
    },
    {
      id: 3,
      title: "The Ultimate Guide to UI/UX Design Principles",
      excerpt: "Master the fundamentals of creating intuitive and beautiful user interfaces that users love.",
      author: "Sarah Williams",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "UI/UX Design",
      slug: "ultimate-guide-uiux-design",
    },
    {
      id: 4,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "A comprehensive guide to developing cross-platform mobile applications efficiently.",
      author: "Alex Johnson",
      date: "January 10, 2026",
      readTime: "10 min read",
      category: "Mobile Development",
      slug: "scalable-mobile-apps-react-native",
    },
    {
      id: 5,
      title: "SEO Best Practices for 2026",
      excerpt: "Stay ahead of the curve with the latest SEO strategies and algorithm updates.",
      author: "Michael Brown",
      date: "January 5, 2026",
      readTime: "6 min read",
      category: "SEO",
      slug: "seo-best-practices-2026",
    },
    {
      id: 6,
      title: "Data Analytics: Turning Numbers into Insights",
      excerpt: "Learn how to leverage data analytics to make informed business decisions.",
      author: "Sarah Williams",
      date: "December 30, 2025",
      readTime: "9 min read",
      category: "Data Analytics",
      slug: "data-analytics-insights",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO",
    "Data Analytics",
  ];

  const featuredPost = blogPosts[0];

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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Insights, tutorials, and industry trends from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block glass rounded-2xl overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800 sticky top-20 z-30 border-y border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white dark:bg-slate-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block glass rounded-2xl overflow-hidden card-hover h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500"></div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm inline-flex items-center">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center space-x-2 mt-12"
          >
            <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary-600 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300">
              3
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300">
              Next
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get the latest insights and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg outline-none"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
