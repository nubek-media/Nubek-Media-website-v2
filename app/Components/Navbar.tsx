export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="text-2xl font-bold text-[#A48C45]">
        NUBEK
      </div>

      <div className="flex items-center gap-8 text-sm text-white">
        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Home
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Services
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Industries
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Our Team
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Blog
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          About
        </a>

        <a 
          href="#" 
          className="transition hover:text-[#A48C45]"
        >
          Contact
        </a>

        <button className="rounded-md bg-[#A48C45] px-5 py-2.5 text-sm font-medium text-[#021D26] transition hover:opacity-90">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}