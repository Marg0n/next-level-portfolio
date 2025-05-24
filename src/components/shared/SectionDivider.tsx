//* components/SectionDivider.tsx
export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full my-12 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <span className="relative px-4 bg-white dark:bg-gray-900 text-gray-500 text-sm uppercase tracking-widest">
        ✦
      </span>
    </div>
  );
}
