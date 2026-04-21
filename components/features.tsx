"use client";

import { motion } from "framer-motion";
import {
  Grid3X3,
  CreditCard,
  BarChart3,
  Palette,
  Globe,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Grid3X3,
    title: "Interactive Grid System",
    description:
      "Let sponsors browse and select their preferred spots on your visual asset with our intuitive grid interface.",
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description:
      "Accept payments directly through the platform. Sponsors complete their purchase without leaving your site.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track sales, revenue, and grid occupancy with detailed dashboards and exportable reports.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Match your brand with custom colors, backgrounds, and overlay any image - from courts to floor plans.",
  },
  {
    icon: Globe,
    title: "Embed Anywhere",
    description:
      "Add the sponsor grid to your website, share via link, or display on digital signage with a single line of code.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime. Your sponsor data is always safe and accessible.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance">
            Everything you need to monetize your space
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] text-pretty">
            A complete platform for selling, managing, and tracking sponsorship
            opportunities across any visual asset.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
