import type { BusinessData } from "@/data/business";



type FooterCTAProps = {

  business: BusinessData;

};



export default function FooterCTA({ business }: FooterCTAProps) {

  return (

    <section className="border-t border-white/10">

      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">

          Demo Footer CTA

        </p>



        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">

          Built to help customers take action faster

        </h2>



        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">

          Call, get directions, order, or book with less friction and a much

          stronger first impression.

        </p>



        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

          {business.footerCtas.map((cta) => (

            <a

              key={`${cta.label}-${cta.href}`}

              href={cta.href}

              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"

            >

              {cta.label}

            </a>

          ))}

        </div>

      </div>

    </section>

  );

}