import Image from "next/image";

import type { BusinessData } from "@/data/business";

import SectionHeading from "./SectionHeading";



type PhotoGalleryProps = {

  business: BusinessData;

};



export default function PhotoGallery({ business }: PhotoGalleryProps) {

  return (

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

      <SectionHeading

        eyebrow="Photos"

        title="A visual preview"

        description="Show off the business with strong photography, storefront shots, interiors, or service highlights."

      />



      <div className="grid gap-4 md:grid-cols-2">

        {business.photos.slice(1).map((photo, index) => (

          <div

            key={`${photo.src}-${index}`}

            className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"

          >

            <Image

              src={photo.src}

              alt={photo.alt}

              fill

              className="object-cover transition duration-500 hover:scale-105"

            />

          </div>

        ))}

      </div>

    </section>

  );

}