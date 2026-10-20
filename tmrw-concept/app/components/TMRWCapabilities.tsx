import Image from "next/image";
import {
  PanelsTopLeft,
  UsersRound,
  Workflow,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
const capabilities = [
  {
    title: "Brand & Channel Strategy",
    description:
      "Creating consistent, distinctive brand experiences across every touchpoint.",
    icon: PanelsTopLeft,
  },
  {
    title: "Consumer Understanding",
    description:
      "Turning insights into meaningful experiences that build trust and loyalty.",
    icon: UsersRound,
  },
  {
    title: "Connected Operations",
    description:
      "Integrating sourcing, distribution and execution for efficient, scalable growth.",
    icon: Workflow,
  },
  {
    title: "Fashion & Lifestyle Intelligence",
    description:
      "Keeping brands ahead with a deeper understanding of trends, culture and consumers.",
    icon: Sparkles,
  },
  {
    title: "Digital Commerce Ecosystem",
    description:
      "Connecting brands and consumers through innovative, scalable digital solutions.",
    icon: ShoppingBag,
  },
];

export default function TMRWCapabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[#f7f6f2] px-5 py-16 text-[#242424] sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-12 flex items-center justify-between border-b border-[#eae8e5] pb-5 md:mb-16">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
            TMRW / Our Capabilities
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Introduction */}
          <div className="max-w-xl">
            <h2 className="text-[36px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-[54px]">
              Everything brands need
              <br />
              <span className="text-[#6b35d5]">to grow.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#706d68] md:text-[15px]">
              We combine strategy, creativity and commerce to help fashion and
              lifestyle brands build meaningful connections and grow with
              purpose.
            </p>

            <a
              href="#partnership"
              className="mt-8 inline-flex items-center gap-5 border-b border-[#242424] pb-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors hover:border-[#6b35d5] hover:text-[#6b35d5]"
            >
              Explore our approach
              <span aria-hidden="true" className="text-base">
                →
              </span>
            </a>

            {/* Image */}
            <div className="relative mt-12 aspect-[5/3] overflow-hidden bg-[#f3f0eb] sm:mt-16 lg:mt-20">
              <Image
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1792498188/close-up-volunteer-oganizing-stuff-donation_auyj7s.jpg"
                alt="Contemporary fashion editorial"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03] rounded"
              />
            </div>
          </div>

          {/* Right: Capabilities list */}
          <div>
            <div className="mb-3 hidden grid-cols-[48px_minmax(0,1fr)_24px] gap-5 md:grid">
              <span />
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#8a867f]">
                What we bring
              </span>
              <span />
            </div>

            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group grid grid-cols-[44px_minmax(0,1fr)_20px] gap-4 border-b border-[#eae8e5] py-6 sm:grid-cols-[48px_minmax(0,1fr)_24px] sm:gap-5 sm:py-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f6f3] transition-colors duration-300 group-hover:bg-[#f0e9ff]">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#55514c] transition-colors duration-300 group-hover:text-[#6b35d5]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-medium leading-snug tracking-[-0.025em] sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-[13px] leading-6 text-[#77736e] sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pt-1 text-base text-[#77736e] transition-all group-hover:translate-x-1 group-hover:text-[#6b35d5]"
                  >
                    →
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col gap-4 bg-white px-6 py-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:px-9 md:py-9">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#77736e]">
            Our belief
          </p>

          <p className="text-xl font-medium tracking-[-0.04em] sm:text-2xl md:text-[28px]">
            Independent thinking.{" "}
            <span className="text-[#6b35d5]">Collective ambition.</span>
          </p>

          <a
            href="#partnership"
            aria-label="Explore partnership opportunities"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dedbd5] text-lg transition-colors hover:border-[#6b35d5] hover:bg-[#6b35d5] hover:text-white"
          >
            →
          </a>
        </div>
      </div>
    </section>
  );
}
