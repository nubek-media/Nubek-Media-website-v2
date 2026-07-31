export default function FeaturedWork() {
  return (
    <section className="bg-[#021D26] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]">
          Selected Work
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Work That Moves
          <span className="text-[#A48C45]"> Brands.</span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="group overflow-hidden rounded-3xl border border-[#A48C45]/20">

            <div className="flex h-[450px] items-end bg-gradient-to-br from-[#0B2A35] to-[#021D26] p-8 transition duration-500 group-hover:scale-105">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#A48C45]">
                  Branding
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Luxury Brand Identity
                </h3>

              </div>

            </div>

          </div>

          <div className="group overflow-hidden rounded-3xl border border-[#A48C45]/20">

            <div className="flex h-[450px] items-end bg-gradient-to-br from-[#18303D] to-[#021D26] p-8 transition duration-500 group-hover:scale-105">

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-[#A48C45]">
                  Campaign
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Digital Marketing Strategy
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}