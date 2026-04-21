"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload Your Asset",
    description:
      "Upload any image - a basketball court, stadium floor plan, event map, or website mockup. Our system automatically creates a customizable grid overlay.",
  },
  {
    number: "02",
    title: "Configure Your Grid",
    description:
      "Define grid dimensions, set pricing tiers, and customize the appearance. Choose which cells are available and set minimum purchase quantities.",
  },
  {
    number: "03",
    title: "Share & Embed",
    description:
      "Get a shareable link or embed code. Add the interactive grid to your website, email it to potential sponsors, or display it at events.",
  },
  {
    number: "04",
    title: "Collect Revenue",
    description:
      "Sponsors select and purchase spots directly. Payments are processed securely, and you receive funds automatically to your connected account.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] text-pretty">
            From upload to revenue in four simple steps. No technical expertise
            required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
              )}

              <div className="text-5xl font-bold text-[var(--primary)]/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
