export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="
        group bg-white dark:bg-slate-900 
        border border-slate-200 dark:border-slate-800 
        rounded-2xl p-6 shadow-sm 
        hover:shadow-lg hover:-translate-y-1 
        transition-all duration-300
        relative overflow-hidden
      "
    >
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-10 
        bg-linear-to-br from-emerald-500 to-blue-500
        transition-all duration-500 blur-xl
      "
      ></div>

      {/* ICON */}
      <div
        className="
        w-12 h-12 rounded-xl 
        bg-emerald-100 dark:bg-emerald-900/40
        flex items-center justify-center 
        mb-5 relative z-10
      "
      >
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white relative z-10">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
        {desc}
      </p>
    </div>
  );
}
