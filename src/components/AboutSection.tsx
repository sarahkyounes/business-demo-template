import type { BusinessData } from "@/data/business";
import SectionHeading from "./SectionHeading";

type AboutSectionProps = {
  business: BusinessData;
};

export default function AboutSection({ business }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title={`Built to represent ${business.name}`}
        description="A clean, mobile-friendly first impression for local businesses."
      />

      <div className="max-w-3xl">
        <p className="text-lg leading-8 text-zinc-300">{business.description}</p>
      </div>
    </section>
  );
}