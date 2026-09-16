import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PianoCityPage, pianoCitySchema, type PianoFaq } from "@/components/site/PianoCityPage";

const PATH = "/piano-movers-boca-raton/";
const CITY = "Boca Raton";

const FAQS: PianoFaq[] = [
  {
    q: "How do gated communities in Boca Raton affect the move?",
    a: "Country-club and gated developments keep approved-contractor lists and fixed service hours, and some require the mover's insurance on file before the gate opens. Send the community name and its rules with your quote request so the crew arrives inside an approved window.",
  },
  {
    q: "My piano sat unplayed all season — what should I expect?",
    a: "A high share of Boca Raton residents are seasonal, so instruments often sit idle for months before a move. Have the tuning assessed on arrival rather than assuming it survived the layoff, and still allow two to four weeks of acclimation before the technician works on it.",
  },
  {
    q: "What does moving a piano in Boca Raton cost?",
    a: "Uprights are $150 - $500 locally, baby grands $300 - $800 and concert grands $500 - $1,500, with interstate transport at $450 - $2,300. Each flight of stairs adds $40 - $130 and partial disassembly of a grand about $150.",
  },
  {
    q: "How is a high-value grand actually insured?",
    a: "Released value protection, the free minimum, pays $0.60 per pound — $300 on a 500-pound baby grand no matter what the instrument is worth. For a valuable grand, get full value protection with the declared value written on the estimate before the crew arrives.",
  },
  {
    q: "Can you move a piano between two Boca Raton condos?",
    a: "Yes, and short in-town moves are still priced by crew size, stairs and disassembly rather than mileage. Both buildings may need a certificate of insurance and an elevator reservation, so give the mover both addresses and management contacts up front.",
  },
];

export const Route = createFileRoute("/piano-movers-boca-raton/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers Boca Raton FL | Condo & Grand Piano Moves",
      description: "Boca Raton piano movers handle condos and high-value grands, with uprights at $150-$500 and grands at $300-$800 plus full value protection. Four free quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...pianoCitySchema(CITY, PATH)] };
  },
  component: () => (
    <PianoCityPage
      city={CITY}
      eyebrow="Condo & country-club piano moves"
      opening="Piano unit moving in Boca Raton FL costs $150 - $500 for an upright and $300 - $800 for a grand piano locally, with interstate transport at $450 - $2,300. One request matches you with up to 4 licensed, insured Boca Raton piano movers who reply with free written quotes."
      challenges={[
        {
          t: "Contractor access rules",
          d: "Gated communities and country-club developments here run approved-vendor lists, guarded entries and scheduled service hours. A crew that is not cleared at the gate loses its window entirely, so community name, gate procedure and permitted hours belong in the quote request, not in a phone call on move morning.",
        },
        {
          t: "Seasonal residents, idle instruments",
          d: "A high share of Boca Raton homes are second residences, which means pianos frequently sit unplayed for months at a time. Those instruments need a tuning assessment on arrival rather than a routine touch-up, since a season of sitting affects pitch as much as the move itself does.",
        },
        {
          t: "High-value grands need declared value",
          d: "The free minimum coverage pays $0.60 per pound: $300 on a 500-pound baby grand whether it is worth $5,000 or $50,000. On the instruments common here, full value protection with the declared value written on the estimate is the only sensible option.",
        },
      ]}
      areasIntro="Crews work the Boca corridor and neighbouring Palm Beach and Broward towns, from country-club villas to oceanfront condos with strict service-elevator schedules."
      areas={[
        "Boca West",
        "Mizner Park",
        "Broken Sound",
        "Woodfield",
        "Highland Beach",
        "Delray Beach",
        "Deerfield Beach",
      ]}
      faqs={FAQS}
      related={[
        { to: "/movers-in-boca-raton/", label: "Full-service movers in Boca Raton", d: "Whole-home moves through the same gated-community access rules, piano included for $75 - $150 extra." },
        { to: "/piano-movers-miami/", label: "Piano movers in Miami", d: "High-rise COI paperwork, elevator windows and crane exits in Miami-Dade." },
        { to: "/piano-movers-the-villages/", label: "Piano movers in The Villages", d: "Downsizing and out-of-state grand arrivals in Central Florida." },
      ]}
    />
  ),
});
