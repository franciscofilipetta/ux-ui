"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap, Heart, Calendar, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Trophy,
    title: "Sports Clubs & Teams",
    description:
      "Sell court-side, field-side, or arena sponsorship spots. Perfect for basketball courts, soccer fields, ice rinks, and more.",
    examples: ["Basketball courts", "Soccer fields", "Ice rinks", "Tennis courts"],
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description:
      "Fund athletics, arts, and campus projects by selling sponsorship space on facilities, publications, and event materials.",
    examples: ["Gym floors", "Yearbooks", "Event programs", "Campus maps"],
  },
  {
    icon: Heart,
    title: "Non-Profits & Charities",
    description:
      "Run creative fundraising campaigns with visual sponsor walls, virtual galas, and community project funding grids.",
    examples: ["Donor walls", "Fundraiser events", "Community projects", "Memorial grids"],
  },
  {
    icon: Calendar,
    title: "Events & Conferences",
    description:
      "Monetize event spaces with sponsor grids on floor plans, stage backdrops, digital displays, and printed materials.",
    examples: ["Trade shows", "Conferences", "Festivals", "Galas"],
  },
  {
    icon: Building2,
    title: "Venues & Real Estate",
    description:
      "Sell advertising space in malls, airports, transit stations, and commercial properties with interactive location maps.",
    examples: ["Shopping malls", "Airports", "Transit stations", "Office buildings"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card)]">
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
            Built for every organization
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] text-pretty">
            From local sports clubs to international events, organizations of
            all types use SponsorGrid to generate revenue.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--primary)]/20">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {useCase.title}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                {useCase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {useCase.examples.map((example) => (
                  <span
                    key={example}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
