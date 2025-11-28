import { Check } from "lucide-react";

export default function PricingCard({
  title,
  price,
  billing,
  tagline,
  features,
  highlighted,
  badge,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className={`
        relative rounded-3xl h-full p-8 border 
        transition-all duration-300
        ${
          highlighted
            ? "bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-700 shadow-2xl scale-105"
            : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl"
        }
      `}
    >
      {/* Badge */}
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-md">
          {badge}
        </span>
      )}

      {/* Header */}
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
        {tagline}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-6">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">
          {price}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {billing}
        </span>
      </div>

      {/* Feature List */}
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`
          w-full mt-8 py-3 rounded-full font-semibold transition-all duration-200
          ${
            highlighted
              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          }
        `}
      >
        {highlighted
          ? "Upgrade to Pro"
          : title === "Enterprise"
          ? "Contact Sales"
          : "Get Started"}
      </button>
    </div>
  );
}
