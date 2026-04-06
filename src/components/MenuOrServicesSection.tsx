import type { BusinessData } from "@/data/business";

import SectionHeading from "./SectionHeading";



type MenuOrServicesSectionProps = {

  business: BusinessData;

};



export default function MenuOrServicesSection({

  business,

}: MenuOrServicesSectionProps) {

  return (

    <section

      id="menu"

      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"

    >

      <SectionHeading

        eyebrow={business.menuTitle}

        title={`Readable Menu`}

        description="Real text is cleaner, easier to browse on mobile, and more professional than a blurry menu image."

      />



      <div className="grid gap-6 lg:grid-cols-2">

        {business.menuSections.map((section) => (

          <div

            key={section.title}

            className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"

          >

            <h3 className="mb-5 text-xl font-semibold text-white">

              {section.title}

            </h3>



            <div className="space-y-5">

              {section.items.map((item) => (

                <div

                  key={item.name}

                  className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"

                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-medium text-white">{item.name}</p>

                      {item.description ? (

                        <p className="mt-1 text-sm leading-6 text-zinc-400">

                          {item.description}

                        </p>

                      ) : null}

                    </div>



                    {item.price ? (

                      <span className="shrink-0 text-sm font-semibold text-red-400">

                        {item.price}

                      </span>

                    ) : null}

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}