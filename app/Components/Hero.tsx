export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-20 md:flex-row md:justify-between md:px-10">

        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">

          <span className="inline-block rounded-full border border-[#A48C45]/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#A48C45]">
            Creative Advertising Agency
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We Build
            <span className="text-[#A48C45]"> Brands </span>
            That Inspire
            <br />
            And Drive Results.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            NUBEK Media helps brands grow through strategic branding,
            creative campaigns, content production, motion graphics,
            digital marketing, and innovative experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-[#A48C45] px-7 py-3 text-base font-semibold text-[#021D26] transition duration-300 hover:scale-105">
              Let's Talk
            </button>

            <button className="rounded-full border border-[#A48C45] px-7 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#A48C45] hover:text-[#021D26]">
              View Our Work
            </button>

          </div>

        </div>

       {/* Right Visual */}
        <div className="relative mt-16 flex h-[260px] w-[260px] items-center justify-center md:mt-0 md:h-[420px] md:w-[420px]">

          <div className="absolute h-full w-full rounded-full bg-[#A48C45]/20 blur-3xl"></div>

          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#A48C45]/40 bg-[#021D26] md:h-80 md:w-80">
            <span className="text-center text-lg font-semibold tracking-[0.3em] text-[#A48C45]">
              NUBEK
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}