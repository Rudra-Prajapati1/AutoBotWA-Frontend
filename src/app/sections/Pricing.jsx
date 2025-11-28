"use client";

import { Check, Sparkles } from "lucide-react";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <section className="relative py-24 px-6 ">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="inline-flex items-center gap-2 mb-3"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Simple, Transparent Pricing
            </p>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Plans that grow with you
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg"
          >
            Choose a plan that fits your WhatsApp automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <PricingCard
              title="Starter"
              price="$29"
              billing="/month"
              tagline="Perfect for individuals and small teams"
              highlighted={false}
              features={[
                "5,000 contacts",
                "1,000 bulk messages/day",
                "Basic automations",
                "Standard analytics",
                "Email support",
              ]}
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="450">
            <PricingCard
              title="Pro"
              price="$79"
              billing="/month"
              tagline="Best for growing businesses"
              highlighted={true}
              badge="Most Popular"
              features={[
                "50,000 contacts",
                "Unlimited bulk messaging",
                "Advanced workflows",
                "Real-time analytics",
                "Priority chat support",
                "Campaign scheduling",
              ]}
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <PricingCard
              title="Enterprise"
              price="Custom"
              billing="pricing"
              tagline="For large-scale automation needs"
              highlighted={false}
              features={[
                "Unlimited contacts",
                "Unlimited messaging",
                "Custom workflows",
                "Advanced analytics",
                "24/7 dedicated support",
                "API + integrations",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
