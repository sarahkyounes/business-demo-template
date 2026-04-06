type DemoBadgeProps = {
  label: string;
  preview: string;
};

export default function DemoBadge({ label, preview }: DemoBadgeProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-zinc-200">{label}</p>
        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
          {preview}
        </span>
      </div>
    </div>
  );
}