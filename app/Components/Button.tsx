type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-md border border-[#A48C45] bg-[#A48C45] px-6 py-3 text-sm font-medium text-white">
      {children}
    </button>
  );
}