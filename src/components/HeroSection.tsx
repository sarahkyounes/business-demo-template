import Image from "next/image";

import type { BusinessData } from "@/data/business";



type HeroSectionProps = {

  business: BusinessData;

};



export default function HeroSection({ business }: HeroSectionProps) {

  return (

    <section className="relative overflow-hidden border-b border-white/10">

      <div className="absolute inset-0">

        <Image

          src={business.photos[0]?.src || "/images/hero.jpg"}

          alt={business.photos[0]?.alt || business.name}

          fill

          priority

          className="object-cover opacity-30"

        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />

      </div>



      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">

            {business.category}

          </p>



          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">

            {business.name}

          </h1>



          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl">

            {business.tagline}

          </p>



          <div className="mt-8 flex flex-wrap gap-4">

            <a

              href={business.primaryCta.href}

              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"

            >

              {business.primaryCta.label}

            </a>



            <a

              href={business.secondaryCta.href}

              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"

            >

              {business.secondaryCta.label}

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}