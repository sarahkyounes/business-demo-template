import type { BusinessData } from "@/data/business";

import SectionHeading from "./SectionHeading";



type InfoSectionProps = {

  business: BusinessData;

};



export default function InfoSection({ business }: InfoSectionProps) {

  return (

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

      <SectionHeading

        eyebrow="Hours and Location"

        title="Easy for customers to find and contact"

        description="The essentials should be instantly visible on mobile."

      />



      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">

          <h3 className="mb-3 text-lg font-semibold text-white">Address</h3>

          <p className="leading-7 text-zinc-300">{business.address}</p>

        </div>



        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">

          <h3 className="mb-3 text-lg font-semibold text-white">Hours</h3>

          <div className="space-y-2 text-zinc-300">

            {business.hours.map((line) => (

              <p key={line}>{line}</p>

            ))}

          </div>

        </div>



        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">

          <h3 className="mb-3 text-lg font-semibold text-white">Phone</h3>

          <a

            href={`tel:${business.phone}`}

            className="text-lg font-medium text-red-400 hover:text-red-300"

          >

            {business.phoneDisplay}

          </a>



          <div className="mt-5">

            <a

              href={business.directionsUrl}

              target="_blank"

              rel="noreferrer"

              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"

            >

              Get Directions

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

