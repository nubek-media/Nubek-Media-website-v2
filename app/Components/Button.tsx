type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[#A48C45] text-white border border-[#A48C45] hover:bg-[#b89b4d] hover:scale-[1.02]",
    secondary:
      "border border-[#A48C45] text-[#A48C45] hover:bg-[#A48C45] hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}