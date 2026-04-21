"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--accent)]/10 to-[var(--primary)]/20 rounded-3xl" />
          <div className="absolute inset-0 border border-[var(--primary)]/20 rounded-3xl" />

          {/* Content */}
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 text-balance">
              Ready to unlock your sponsorship potential?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto text-pretty">
              Join thousands of organizations already using SponsorGrid to
              transform their spaces into revenue-generating assets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demo"
                className="group flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all shadow-lg shadow-[var(--primary)]/25 hover:shadow-[var(--primary)]/40"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 text-lg font-medium rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-sm text-[var(--muted-foreground)]">
              No credit card required. Free plan available.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
