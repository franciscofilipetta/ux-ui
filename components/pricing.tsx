"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for trying out SponsorGrid with a single project.",
    features: [
      "1 sponsor grid",
      "Up to 50 cells",
      "Basic customization",
      "Email support",
      "Standard embed code",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For organizations ready to scale their sponsorship revenue.",
    features: [
      "Unlimited sponsor grids",
      "Unlimited cells",
      "Full customization",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SSO / SAML",
      "SLA guarantee",
      "White-label options",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] text-pretty">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-[var(--primary)]/10 to-[var(--accent)]/10 border-2 border-[var(--primary)]"
                  : "bg-[var(--card)] border border-[var(--border)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--primary)] text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[var(--muted-foreground)]">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--muted-foreground)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block w-full text-center py-3 px-4 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 shadow-lg shadow-[var(--primary)]/25"
                    : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
