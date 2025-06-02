//? Dashed divider
function DashedDivider({ 
  className = "", 
  ...rest
}) {
  return (
    <div 
      className={`w-full border-t border-dashed border-gray-400 my-8 ${className}`} 
      {...rest}
    />
  );
}

//? Add animate-pulse, transition-opacity, or group-hover: effects.
function GradientDivider({ className = "", ...rest }) {
  return (
    <div 
      className={`w-full h-[1px] my-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent ${className}`} 
      {...rest}
    />
  );
}

//? Use: <IconDivider icon="★" /> or <IconDivider icon={<MySvg />} />
//? Add animate-pulse, transition-opacity, or group-hover: effects.
function IconDivider({ icon = "✨", className = "", ...rest }) {
  return (
    <div 
      className={`relative w-full my-12 flex items-center justify-center ${className}`}
      {...rest}
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <span className="relative px-2 text-xl text-gray-400 dark:text-gray-600 bg-white dark:bg-gray-900">
        {icon}
      </span>
    </div>
  );
}

//? Use: <LabelDivider label="About Me" />
//? Add animate-pulse, transition-opacity, or group-hover: effects.
function LabelDivider({ 
  label = "Section", 
  className = "", 
  ...rest //! catch any additional props like `data-aos`
}) {
  return (
    <div 
      className={`relative w-full my-12 flex items-center justify-center ${className}`}
      {...rest} //! spread them onto the div
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <span className="relative px-4 bg-white dark:bg-gray-900 text-gray-500 text-xs uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

//? can pass through className
//? Add animate-pulse, transition-opacity, or group-hover: effects.
function SectionDivider({
   className = "",
   ...rest 
  }: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`relative w-full my-12 flex items-center justify-center ${className}`}
      {...rest}
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <span className="relative px-4 bg-white dark:bg-gray-900 text-gray-500 text-sm uppercase tracking-widest">
        ✦
      </span>
    </div>
  );
}


export { LabelDivider, DashedDivider, GradientDivider, IconDivider, SectionDivider };