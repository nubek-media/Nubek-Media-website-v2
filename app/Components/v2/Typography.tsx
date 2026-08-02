type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export function Display({
  children,
  className = "",
}: TypographyProps) {
  return (
    <h1
      className={`font-bold tracking-tight text-white leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] ${className}`}
    >
      {children}
    </h1>
  );
}

export function Heading({
  children,
  className = "",
}: TypographyProps) {
  return (
    <h2
      className={`font-bold text-white text-3xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`text-[#B8C2C6] leading-8 text-base md:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

export function Label({
  children,
  className = "",
}: TypographyProps) {
  return (
    <span
      className={`uppercase tracking-[0.25em] text-[#A48C45] text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}