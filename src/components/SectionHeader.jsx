export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
        {number}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-500 mt-3 max-w-lg text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full max-w-xs bg-gradient-to-r from-indigo-500/60 to-transparent rtl:bg-gradient-to-l" />
    </div>
  );
}
