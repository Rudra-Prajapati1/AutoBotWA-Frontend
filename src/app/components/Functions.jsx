export function SocialIcon({ Icon, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export function FooterLink({ text }) {
  return (
    <li>
      <a className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
        {text}
      </a>
    </li>
  );
}

export function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
        <span className="w-3 h-3 text-emerald-600 dark:text-emerald-400">
          {icon}
        </span>
      </div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {text}
      </span>
    </div>
  );
}

export function MessageLeft({ text, time }) {
  return (
    <div className="flex justify-start">
      <div className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white text-xs px-3 py-2 rounded-lg rounded-bl-none max-w-xs">
        <p>{text}</p>
        <span className="text-xs opacity-70">{time}</span>
      </div>
    </div>
  );
}

export function MessageRight({ text, time }) {
  return (
    <div className="flex justify-end">
      <div className="bg-emerald-500 dark:bg-emerald-600 text-white text-xs px-3 py-2 rounded-lg rounded-br-none max-w-xs">
        <p>{text}</p>
        <span className="text-xs opacity-90">{time}</span>
      </div>
    </div>
  );
}
