"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Lightbulb, Handshake, Layers3, TrendingUp } from "lucide-react";
import TMRWCapabilities from "./components/TMRWCapabilities";

const slides = [
  {
    number: "01",
    eyebrow: "THE NEW EXPRESSION",
    title: "STYLE HAS NO UNIFORM.",
    description: "A new perspective on the way we wear.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2400&q=90",

    position: "center 40%",
    label: "Discover our brands",
    primaryText: "SHOP NOW",
    secondaryText: "EXPLORE OUR FIRST COLLECTION",
  },
  {
    number: "02",
    eyebrow: "INDEPENDENT BY NATURE",
    title: "MAKE ROOM FOR DIFFERENCE.",
    description: "Distinct identities. One collective vision.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2400&q=90",
    position: "center 35%",
    label: "Explore the collective",
    primaryText: "FIND YOUR STYLE",
    secondaryText: "DISCOVER OUR DISTINCT IDENTITIES",
  },
  {
    number: "03",
    eyebrow: "A NEW POINT OF VIEW",
    title: "THE FUTURE IS PERSONAL.",
    description: "Built around a generation that moves differently.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2400&q=90",

    position: "center 30%",
    label: "Discover the story",
    primaryText: "BE YOURSELF",
    secondaryText: "EXPRESS YOUR OWN POINT OF VIEW",
  },
];

const brands = [
  {
    number: "01",
    name: "Street culture",
    category: "CONTEMPORARY / STREETWEAR",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85",
    description: "A different kind of everyday.",
  },
  {
    number: "02",
    name: "New classics",
    category: "MODERN / ESSENTIALS",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
    description: "Familiar forms. Fresh perspectives.",
  },
  {
    number: "03",
    name: "Beyond ordinary",
    category: "EXPERIMENTAL / EXPRESSION",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    description: "For those who define their own way.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);

  const slide = slides[activeSlide];

  const menuItems = [
    {
      number: "01",
      label: "Home",
      href: "#home",
      image: slides[0].image,
      alt: "TMRW fashion campaign",
    },
    {
      number: "02",
      label: "Our brands",
      href: "#brands",
      image: brands[1].image,
      alt: "TMRW independent fashion brands",
    },
    {
      number: "03",
      label: "Our story",
      href: "#story",
      image: slides[1].image,
      alt: "TMRW editorial campaign",
    },
    {
      number: "04",
      label: "Get in touch",
      href: "mailto:hello@tmrw.example",
      image: slides[2].image,
      alt: "TMRW fashion editorial",
    },
  ];

  const menuPreview =
    menuItems.find((item) => item.number === hoveredMenuItem) ?? menuItems[0];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "ArrowRight") {
        setActiveSlide((current) => (current + 1) % slides.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveSlide(
          (current) => (current - 1 + slides.length) % slides.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[720px] h-[100svh] max-h-[1100px] flex-col justify-between overflow-hidden bg-[#77716a] text-white"
      >
        <div
          key={slide.number}
          className="absolute inset-0 bg-cover hero-enter"
          style={{
            backgroundImage: `url("${slide.image}")`,
            backgroundPosition: slide.position,
          }}
        />
        <div className="absolute inset-0 bg-[#342e29]/35" />{" "}
        {/* <div className="absolute inset-0 bg-black/35" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50" /> */}
        {/* NAVBAR */}
        <header className="relative z-20 grid grid-cols-3 items-center px-5 py-6 md:flex md:justify-between md:px-10 md:py-8">
          {/* MENU — left on mobile, centered on desktop */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="justify-self-start sm:text-[10px] sm:tracking-[0.12em] md:ml-auto md:text-xs md:tracking-[0.16em] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-70 md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            MENU
          </button>

          {/* LOGO — centered on mobile, left on desktop */}

          <a
            href="#home"
            aria-label="TMRW home"
            className="col-start-2 row-start-1 justify-self-center md:static md:order-first"
          >
            <Image
              src="https://res.cloudinary.com/dasvdkncm/image/upload/v1792487103/TMRW_Logo-1-2_offsgm.gif"
              alt="TMRW"
              width={120}
              height={40}
              unoptimized
              priority
              className="h-auto w-[90px] md:w-[120px]"
            />
          </a>

          {/* SHOP BRANDS — right */}
          <a href="#brands" className="col-start-3 row-start-1  text-right">
            <span className="md:hidden">SHOP</span>
            <span className="hidden md:inline-flex md:items-center md:gap-3">
              <span>SHOP</span>
              <span>EXPLORE ↗</span>
            </span>
          </a>
        </header>
        {/* SLIDE CONTROLS */}
        <div className="pointer-events-none absolute inset-x-5 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between md:inset-x-10">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="pointer-events-auto cursor-pointer font-serif text-sm italic text-white/80 transition hover:text-white"
          >
            {activeSlide === 0
              ? "01"
              : slides[(activeSlide - 1 + 3) % 3].number}
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveSlide((current) => (current + 1) % slides.length)
            }
            aria-label="Next slide"
            className="pointer-events-auto relative z-20 cursor-pointer font-serif text-sm italic text-white/80 transition hover:text-white"
          >
            Next ↗
          </button>
        </div>
        {/* HERO COPY */}
        <div
          key={`copy-${slide.number}`}
          className="relative z-10 mt-auto grid grid-cols-1 items-end gap-8 px-5 pb-8 hero-enter md:grid-cols-[1fr_auto] md:px-10 md:pb-12"
        >
          <div className="max-w-4xl">
            <a
              href="#brands"
              className="block w-fit text-[clamp(2rem,3.2vw,3rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white transition-opacity hover:opacity-80"
            >
              {slide.primaryText}
            </a>

            <a
              href="#brands"
              className="mt-1 block max-w-[22ch] text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white/50 transition-colors duration-300 hover:text-white"
            >
              {slide.secondaryText}
            </a>
          </div>
          <div className="flex items-center gap-3 md:pb-1">
            {slides.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${item.number}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-[2px] transition-all duration-300 ${
                  activeSlide === index
                    ? "w-12 bg-white"
                    : "w-5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
            <span className="ml-2 font-serif text-xs italic">
              {slide.number} / 03
            </span>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.25em] text-white/70 lg:block">
          Independent by nature
        </div>
      </section>
      {/* FULL-SCREEN NAVIGATION */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex min-h-[100svh] flex-col bg-white p-5 text-black md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              aria-label="TMRW home"
              className="inline-flex items-center bg-black rounded"
            >
              <Image
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1792487103/TMRW_Logo-1-2_offsgm.gif"
                alt="TMRW"
                width={120}
                height={40}
                unoptimized
                priority
                className="h-auto w-[90px] md:w-[120px]"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.16em]"
            >
              Close ×
            </button>
          </div>

          <div className="grid flex-1 grid-cols-1 items-center gap-10 py-12 md:grid-cols-2">
            <div className="hidden aspect-[4/5] max-h-[55vh] overflow-hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={menuPreview.image}
                alt={menuPreview.alt}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
            <nav className="flex flex-col items-start">
              {menuItems.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onMouseEnter={() => setHoveredMenuItem(item.number)}
                  onMouseLeave={() => setHoveredMenuItem(null)}
                  onFocus={() => setHoveredMenuItem(item.number)}
                  onBlur={() => setHoveredMenuItem(null)}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-baseline gap-4 py-2 text-4xl font-bold uppercase tracking-[-0.07em] transition-colors duration-200 md:text-6xl ${
                    hoveredMenuItem === null
                      ? "text-black"
                      : hoveredMenuItem === item.number
                        ? "text-[#1717ff]"
                        : "text-[#c9c9c9]"
                  }`}
                >
                  <span className="text-[10px] font-normal tracking-normal">
                    {item.number}
                  </span>

                  {item.label}

                  <span className="text-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-between border-t border-black/20 pt-5 text-[9px] uppercase tracking-[0.16em]">
            <span>Independent by nature.</span>
            <span>Collective vision.</span>
          </div>
        </div>
      )}
      {/* BRAND HOUSE INTRODUCTION */}
      <section
        id="story"
        className="bg-white px-5 py-20 text-black md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-center justify-between border-b border-black/15 pb-4 md:mb-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] md:text-xs">
              TMRW — HOUSE OF BRANDS
            </span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-black/55 md:text-xs">
              A NEW CHAPTER / 01
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50 md:text-xs">
                INDEPENDENT BY NATURE. UNITED BY VISION.
              </p>

              <h2 className="max-w-[900px] text-[clamp(3rem,6.2vw,5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.055em]">
                WE BUILD
                <br />
                WHAT&apos;S
                <br />
                <span className="text-[#6b35d5]">NEXT.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end md:col-span-4 md:pb-1">
              <p className="max-w-sm text-[15px] leading-7 text-black/75">
                We partner with ambitious entrepreneurs to build the next
                generation of fashion and lifestyle brands.
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
                An Aditya Birla Group venture, TMRW brings together consumer
                insights, technology and commerce expertise to help
                digital-first brands grow.
              </p>

              <a
                href="#brands"
                className="group mt-7 flex w-fit items-center gap-3 border-b border-black/70 pb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#6b35d5] hover:text-[#6b35d5] md:text-xs"
              >
                MEET OUR BRANDS
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between border-t border-black/15 pt-4 md:mt-20">
            <span className="text-[9px] uppercase tracking-[0.14em] text-black/50 md:text-[10px]">
              BUILT FOR A NEW GENERATION
            </span>
            <span className="font-serif text-sm italic text-[#6b35d5] md:text-base">
              The future is now.
            </span>
          </div>
        </div>
      </section>
      {/* OUR BRANDS — CLEAN PREMIUM EDITORIAL */}
      <section
        id="brands"
        className="bg-[#f7f6f2] px-5 py-20 text-[#242421] md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
                TMRW / HOUSE OF BRANDS
              </p>

              <h2 className="text-[32px] font-medium leading-tight tracking-[-0.045em] sm:text-4xl md:text-[44px]">
                A new generation of brands.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#6d6a64] md:text-[15px]">
              We partner with ambitious entrepreneurs to shape the future of
              fashion and lifestyle through distinctive, digital-first brands.
            </p>
          </div>

          {/* Brand portfolio */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "WROGN",
                category: "Contemporary fashion",
                href: "https://wrogn.com/",
                image:
                  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
                imagePosition: "center",
              },
              {
                name: "THE INDIAN GARAGE CO.",
                category: "Everyday style",
                href: "https://tigc.in/",
                image:
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
                imagePosition: "center",
              },
              {
                name: "BEWAKOOF",
                category: "Casualwear",
                href: "https://www.bewakoof.com/",
                image:
                  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
                imagePosition: "center",
              },
              {
                name: "NOBERO",
                category: "Lifestyle",
                href: "https://nobero.com/",
                image:
                  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
                imagePosition: "center",
              },
            ].map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e5df]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.image}
                    alt={`${brand.name} fashion campaign`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-base text-[#242421] transition-colors duration-300 group-hover:bg-[#6b35d5] group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3 border-b border-[#dcd9d2] py-4">
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold tracking-[-0.025em] sm:text-base">
                      {brand.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#77746e]">
                      {brand.category}
                    </p>
                  </div>

                  <span className="mt-0.5 shrink-0 text-xs text-[#77746e] transition-colors group-hover:text-[#6b35d5]">
                    Explore
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Portfolio link */}
          <div className="mt-10 flex justify-start md:mt-12 md:justify-end">
            <a
              href="https://www.tmrw.in/our-brands/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-b border-[#242421] pb-2 text-xs font-medium transition-colors hover:border-[#6b35d5] hover:text-[#6b35d5]"
            >
              Discover all brands
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      {/* THE TMRW DIFFERENCE */}
      <section
        id="difference"
        className="bg-white px-5 py-20 text-[#242421] md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#e5e3de] pb-8 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
                TMRW / OUR APPROACH
              </p>

              <h2 className="max-w-2xl text-[32px] font-medium leading-tight tracking-[-0.045em] sm:text-4xl md:text-[44px]">
                More than a house of brands.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#6d6a64] md:text-[15px]">
              We bring people, insights and capabilities together to help
              ambitious entrepreneurs build distinctive brands for the next
              generation.
            </p>
          </div>

          {/* Our approach */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                label: "INSIGHT",
                title: "Consumer first",
                description:
                  "Understanding evolving needs, emerging trends and the communities shaping tomorrow.",
                Icon: Lightbulb,
              },
              {
                number: "02",
                label: "PARTNERSHIP",
                title: "Entrepreneurial spirit",
                description:
                  "Working alongside founders to turn ambitious ideas into meaningful brands.",
                Icon: Handshake,
              },
              {
                number: "03",
                label: "CAPABILITY",
                title: "Digital expertise",
                description:
                  "Bringing together technology, data and commerce to create better brand experiences.",
                Icon: Layers3,
              },
              {
                number: "04",
                label: "GROWTH",
                title: "Built to scale",
                description:
                  "Building strong foundations that support sustainable, long-term brand growth.",
                Icon: TrendingUp,
              },
            ].map((item, index) => (
              <article
                key={item.number}
                className={`group border-t border-[#e5e3de] py-6 sm:px-5 sm:py-7 lg:min-h-[270px] lg:px-6 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l sm:border-l-[#e5e3de]"
                } ${index === 3 ? "lg:pr-0" : ""}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#77746e]">
                    {item.number}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#77746e]">
                    {item.label}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e3de] text-[#6b35d5] transition-colors duration-300 group-hover:border-[#6b35d5] group-hover:bg-[#6b35d5] group-hover:text-white">
                  <item.Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#6b35d5] md:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[#6d6a64]">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-8 bg-[#6b35d5] transition-all duration-300 group-hover:w-14" />
              </article>
            ))}
          </div>

          {/* Closing line */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#e5e3de] pt-5 md:mt-14 md:flex-row md:items-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#77746e]">
              INDEPENDENT THINKING. COLLECTIVE AMBITION.
            </p>

            <a
              href="#story"
              className="group inline-flex w-fit items-center gap-3 text-xs font-medium transition-colors hover:text-[#6b35d5]"
            >
              Discover our vision
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <TMRWCapabilities />
      {/* ENTREPRENEURSHIP & PARTNERSHIP */}
      <section
        id="partnership"
        className="overflow-hidden bg-white px-5 py-20 text-[#242421] md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Editorial header */}
          <div className="mb-10 flex items-center justify-between border-b border-[#e5e3de] pb-4 md:mb-14">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
              TMRW / OUR PARTNERSHIP
            </p>

            <span className="text-[10px] tracking-[0.14em] text-[#77746e]">
              04 — 06
            </span>
          </div>

          {/* Main heading */}
          <div className="mb-10 grid gap-5 md:mb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b35d5] md:text-xs">
                BUILT TOGETHER
              </p>

              <h2 className="max-w-3xl text-[32px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-[44px]">
                Great brands aren&apos;t built alone.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6d6a64] md:col-span-4 md:justify-self-end">
              Ambitious ideas deserve the right people, perspective and
              capabilities to turn them into something lasting.
            </p>
          </div>

          {/* Full-width editorial image */}
          <div className="relative overflow-hidden bg-[#f7f6f2]">
            {/* Replace with your approved partnership or fashion campaign image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90"
              alt="Contemporary fashion editorial"
              loading="lazy"
              className="h-[320px] w-full object-cover object-[center_35%] sm:h-[420px] md:h-[520px]"
            />

            <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] sm:bottom-6 sm:left-6">
              INDEPENDENT BY NATURE
            </span>

            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#6b35d5] sm:right-6 sm:top-6">
              ↗
            </span>
          </div>

          {/* Editorial statement */}
          <div className="mt-8 grid gap-6 border-b border-[#e5e3de] pb-8 md:mt-10 md:grid-cols-12 md:items-start md:gap-8">
            <div className="flex items-center gap-3 md:col-span-3">
              <span className="text-3xl font-medium tracking-[-0.06em] text-[#6b35d5]">
                01
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#77746e]">
                THE TMRW APPROACH
              </span>
            </div>

            <div className="md:col-span-6">
              <h3 className="max-w-lg text-xl font-medium leading-snug tracking-[-0.035em] md:text-2xl">
                Independent vision.
                <br />
                Collective strength.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#6d6a64] md:text-[15px]">
                We work alongside entrepreneurs, combining their vision with
                consumer understanding, technology and commerce expertise to
                support the growth of distinctive fashion and lifestyle brands.
              </p>
            </div>

            <div className="md:col-span-3 md:justify-self-end">
              <a
                href="#story"
                className="group inline-flex items-center gap-3 border-b border-[#242421] pb-2.5 text-xs font-medium transition-colors hover:border-[#6b35d5] hover:text-[#6b35d5]"
              >
                OUR PHILOSOPHY
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="flex flex-col justify-between gap-2 pt-4 sm:flex-row sm:items-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#77746e]">
              AMBITION MEETS OPPORTUNITY
            </p>

            <p className="text-xs text-[#6d6a64]">Building what comes next.</p>
          </div>
        </div>
      </section>
      {/* CLOSING BRAND STATEMENT */}
      <section
        id="future"
        className="relative isolate overflow-hidden bg-white px-5 py-20 text-[#242421] md:px-10 md:py-28"
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dasvdkncm/image/upload/v1792495096/Sunlit_Minimalist_Fashion_Editorial_zguuk5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient overlay: keeps image visible and text readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white/20 via-white/20 to-white/10"
        />

        <div className="mx-auto max-w-[1440px]">
          <div className="border-y border-[#e5e3de]/80 py-10 md:py-16">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
                  TMRW / THE BIGGER PICTURE
                </p>

                <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-[44px]">
                  The future doesn&apos;t wait.
                  <span className="block text-[#6b35d5]">We build it.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-[#6d6a64] md:text-[15px]">
                  A new generation of ideas. A new way to build brands. A new
                  chapter starts tomorrow.
                </p>
              </div>

              <a
                href="#brands"
                className="group inline-flex w-fit shrink-0 items-center gap-3 text-xs font-medium transition-colors hover:text-[#6b35d5]"
              >
                EXPLORE OUR BRANDS
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e3de] transition-all duration-300 group-hover:border-[#6b35d5] group-hover:bg-[#6b35d5] group-hover:text-white">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}

      <footer className="overflow-hidden bg-[#f7f5f0] px-5 pt-12 text-[#242421] md:px-10 md:pt-16">
        <div className="mx-auto max-w-[1440px]">
          {/* Editorial masthead */}
          <div className="mb-8 flex items-center gap-4">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746e] md:text-xs">
              TMRW / A House of Brands
            </p>
          </div>

          {/* Main editorial composition */}
          <div className="relative grid gap-10 md:min-h-[570px] md:grid-cols-12 md:gap-5">
            {/* Left content */}
            <div className="relative z-10 flex flex-col md:col-span-7 md:justify-between md:pb-8">
              <div>
                <h2 className="max-w-[680px] text-[43px] font-normal leading-[0.98] tracking-[-0.065em] sm:text-[58px] md:text-[68px] lg:text-[76px]">
                  Building
                  <br />
                  what comes{" "}
                  <span className="font-serif italic text-[#6b35d5]">
                    next.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-[#6d6a64] md:text-[15px]">
                  A house for ambitious ideas, distinctive brands and the people
                  shaping tomorrow.
                </p>
              </div>

              {/* Navigation columns */}
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:mt-16 md:gap-x-8">
                <div>
                  <p className="mb-4 border-b border-[#c9c5bd] pb-3 text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Explore
                  </p>

                  <nav
                    aria-label="Footer navigation"
                    className="flex flex-col items-start gap-3"
                  >
                    <a
                      href="#story"
                      className="text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      Our Story
                    </a>
                    <a
                      href="#brands"
                      className="text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      Our Brands
                    </a>
                    <a
                      href="#difference"
                      className="text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      Our Approach
                    </a>
                    <a
                      href="#partnership"
                      className="text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      Our Partnership
                    </a>
                  </nav>
                </div>

                <div>
                  <p className="mb-4 border-b border-[#c9c5bd] pb-3 text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Connect
                  </p>

                  <div className="flex flex-col items-start gap-3">
                    <a
                      href="https://www.tmrw.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      Official Website
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/tmrw-house-of-brands/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-[#6b35d5] md:text-sm"
                    >
                      LinkedIn
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="mb-4 border-b border-[#c9c5bd] pb-3 text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Philosophy
                  </p>

                  <p className="max-w-[170px] text-xs leading-5 text-[#77746e]">
                    Independent thinking. Collective ambition. Brands built for
                    what comes next.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: fashion image and editorial details */}
            <div className="relative min-h-[420px] md:col-span-5 md:min-h-0">
              {/* Main photograph */}
              <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden bg-[#e8e1d6] md:left-[-10%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1792496805/kidswear_2_qzcxdl.png"
                  alt="TMRW fashion editorial"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              {/* Soft editorial fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191817]/15 via-transparent to-transparent" />

              {/* Circular brand motif */}
              <div className="absolute right-2 top-4 flex h-36 w-36 items-center justify-center rounded-full border border-white/80 bg-[#f7f5f0]/90 sm:right-5 sm:top-8 sm:h-40 sm:w-40 md:-right-5 md:top-5">
                <div className="absolute inset-2 rounded-full border border-[#d6d1c8]" />

                <div className="relative px-5 text-center">
                  <span className="mx-auto mb-3 block h-2.5 w-2.5 rounded-full bg-[#6b35d5]" />
                  <p className="text-[8px] font-medium uppercase leading-[2] tracking-[0.2em] text-[#625e57] sm:text-[9px]">
                    A new
                    <br />
                    generation.
                    <br />
                    A new
                    <br />
                    tomorrow.
                  </p>
                </div>
              </div>

              {/* Architectural detail inset */}
              <div className="absolute bottom-5 right-0 w-[47%] overflow-hidden border-[4px] border-[#f7f5f0] bg-[#e8e1d6] sm:bottom-7 sm:right-[-2%] md:bottom-10 md:right-[-6%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=85"
                  alt="Minimal contemporary architecture and natural shadows"
                  width={700}
                  height={540}
                  sizes="(max-width: 640px) 47vw, 300px"
                  className="aspect-[1.3/1] w-full object-cover"
                />
              </div>

              {/* Image caption */}
              <p className="absolute bottom-2 left-0 text-[8px] font-medium uppercase tracking-[0.18em] text-white sm:bottom-3 md:bottom-4">
                TMRW / THE NEXT CHAPTER
              </p>
            </div>
          </div>

          {/* Signature wordmark */}
          <div className="mt-12 overflow-hidden border-t border-[#c9c5bd] pb-5 pt-6 md:mt-14 md:pt-8 text-center">
            <p
              aria-hidden="true"
              className="select-none whitespace-nowrap text-[25vw] font-semibold leading-[0.77] tracking-[-0.105em] text-[#242421]/[0.055] sm:text-[22vw] md:text-[19vw]"
            >
              TMRW.
            </p>
          </div>

          {/* Signature bottom bar */}
          <div className="flex flex-col gap-4 border-t border-[#c9c5bd] py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <a
                href="#top"
                aria-label="TMRW home"
                className="text-xl font-semibold tracking-[-0.07em]"
              >
                TMRW<span className="text-[#6b35d5]">.</span>
              </a>

              <span className="h-7 w-px bg-[#c9c5bd]" />

              <p className="text-[9px] uppercase tracking-[0.14em] text-[#77746e]">
                © 2026 TMRW. All rights reserved.{" "}
              </p>
            </div>

            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#77746e]">
              Independent thinking. Collective ambition.
            </p>

            <a
              href="#top"
              className="group inline-flex w-fit items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#6b35d5]"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9c5bd] text-sm transition-all duration-300 group-hover:border-[#6b35d5] group-hover:bg-[#6b35d5] group-hover:text-white">
                ↑
              </span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
