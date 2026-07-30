import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PianoCityPage, pianoCitySchema, type PianoFaq } from "@/components/site/PianoCityPage";

const PATH = "/piano-movers-orlando/";
const CITY = "Orlando";

const FAQS: PianoFaq[] = [
  {
    q: "How much does piano moving in Orlando cost?",
    a: "Uprights, spinets and consoles run $150 - $500 locally with a two-mover crew, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate transport is $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly around $150.",
  },
  {
    q: "Can a piano be delivered to a vacation home or short-term rental?",
    a: "Yes, and it is a common Orlando request. Give the mover the property manager's contact, the gate or lockbox procedure and the access window when you request quotes. Unattended deliveries still need someone authorised on site to sign for the instrument.",
  },
  {
    q: "Do you move church and community-hall uprights around Orlando?",
    a: "Regularly. Congregations and retirement communities across the metro move consoles and uprights between halls and campuses. Double doors, sloped ramps and platform steps are measured first, and partial disassembly is quoted at about $150 when clearance is tight.",
  },
  {
    q: "Should I tune the piano right after it arrives?",
    a: "Wait two to four weeks. The instrument needs to settle into the humidity of its new Orlando room before a tuning will hold. Tuning the same week usually means paying a technician twice, once now and again once the soundboard stabilises.",
  },
  {
    q: "How far in advance should Orlando moves be booked?",
    a: "Two to three weeks for a local move and four or more for interstate transport. Month-end weekends fill first, and seasonal second-home turnovers around the tourist corridor tighten specialist crew availability further.",
  },
];

export const Route = createFileRoute("/piano-movers-orlando/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers in Orlando FL | Free Quotes & Rates 2026",
      description:
        "Licensed Orlando piano movers. Uprights $150-$500, grands $300-$800 locally. CPM-trained, insured crews. Compare up to 4 free quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...pianoCitySchema(CITY, PATH)] };
  },
  component: () => (
    <PianoCityPage
      city={CITY}
      eyebrow="Orlando piano moving specialists"
      opening="Orlando piano moving costs $150 - $500 for an upright and $300 - $800 for a grand piano locally, with interstate transport at $450 - $2,300. Tell us the instrument and the address once, and up to 4 licensed, insured piano movers in Orlando FL send you written quotes at no cost."
      challenges={[
        {
          t: "Second homes and short-term rentals",
          d: "Orlando has an unusually high concentration of vacation homes and short-term rentals, so a large share of piano placements happen at a second property the owner is not living in. That means gate codes, property-manager scheduling and a signature from someone other than the buyer — details that belong in the quote, not on move day.",
        },
        {
          t: "Church and retirement community uprights",
          d: "Large retirement and church communities across the metro generate a steady stream of upright moves between halls, campuses and villas. These are short hauls with awkward access: double doors, platform steps and stage ramps rather than residential staircases.",
        },
        {
          t: "Placement in a home nobody occupies daily",
          d: "A piano in a rental or seasonal house sits in a room whose AC may be cycled down for weeks. Keep the instrument off exterior walls and out of direct vent airflow, and plan the tuning for two to four weeks after placement rather than the day it arrives.",
        },
      ]}
      areasIntro="Crews cover the whole Orlando metro, from Winter Park bungalows to newer two-story builds in the outer suburbs where a staircase is part of nearly every quote."
      areas={[
        "Winter Park",
        "Lake Mary",
        "Windermere",
        "Dr. Phillips",
        "Altamonte Springs",
        "Kissimmee",
        "Oviedo",
        "Apopka",
      ]}
      faqs={FAQS}
      related={[
        { to: "/movers-in-orlando/", label: "Full-service movers in Orlando", d: "Moving the whole house too? Adding an upright to a household move costs $75 - $150 extra." },
        { to: "/piano-movers-tampa/", label: "Piano movers in Tampa", d: "Bay-area crews for historic bungalows and downtown condo freight elevators." },
        { to: "/piano-movers-jacksonville/", label: "Piano movers in Jacksonville", d: "Cross-town hauls and interstate transport out of Northeast Florida." },
      ]}
    />
  ),
});
