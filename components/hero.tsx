"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SponsorGrid } from "./sponsor-grid";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm">
            <Sparkles className="w-4 h-4" />
            <span>The future of sponsorship is here</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-tight text-balance">
            Turn Your Space Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              Sponsorship Revenue
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto text-pretty">
            The modern platform for organizations to sell sponsorship space on
            any visual asset. Courts, fields, websites, events - monetize them
            all with our interactive grid system.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#demo"
            className="group flex items-center gap-2 px-6 py-3 text-base font-medium rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all shadow-lg shadow-[var(--primary)]/25 hover:shadow-[var(--primary)]/40"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 text-base font-medium rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Live Demo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 sm:mt-20"
        >
          <div className="text-center mb-8">
            <span className="text-sm text-[var(--muted-foreground)] uppercase tracking-wider">
              Interactive Demo
            </span>
          </div>
          <SponsorGrid rows={8} cols={10} demoMode={true} />
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Trusted by organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Sports Clubs", "Universities", "Non-Profits", "Events", "Venues"].map(
              (org) => (
                <span
                  key={org}
                  className="text-[var(--muted-foreground)] font-medium"
                >
                  {org}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
