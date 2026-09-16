import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PianoCityPage, pianoCitySchema, type PianoFaq } from "@/components/site/PianoCityPage";

const PATH = "/piano-movers-jacksonville/";
const CITY = "Jacksonville";

const FAQS: PianoFaq[] = [
  {
    q: "Why did my Jacksonville quote switch to per-mile pricing?",
    a: "Jacksonville is Florida's largest city by land area, so a cross-town move often exceeds the 20-30 mile flat-rate radius most piano movers work within. Past that radius the job is priced per mile instead of as a flat local move. Ask which applies before booking.",
  },
  {
    q: "Do you handle PCS and military piano transport?",
    a: "Yes. NAS Jacksonville and Mayport generate steady interstate piano transport on service timelines. Interstate moves run $450 - $2,300, and heat-treated crating adds $1,000 - $1,600 when the instrument needs it. Book four or more weeks out where orders allow.",
  },
  {
    q: "What does moving a piano cost in Jacksonville?",
    a: "Uprights are $150 - $500 locally, baby grands $300 - $800 and concert grands $500 - $1,500. Each flight of stairs adds $40 - $130, upper-floor placement about $100, and partial disassembly of a grand roughly $150.",
  },
  {
    q: "Can a grand piano leave a historic Riverside or Avondale home?",
    a: "Usually yes, once the legs, pedal box and music rack come off and the body is strapped to a skid board. Period doorways, tight porch turns and brick steps are measured first. If nothing clears, the instrument exits by window crane, quoted separately.",
  },
  {
    q: "Will the piano need tuning after the move?",
    a: "Yes. Homes near the beaches and the river swing in humidity, and that moves the soundboard as much as the trip does. Let the instrument acclimate two to four weeks in its new room, then book the tuning so it holds pitch.",
  },
];

export const Route = createFileRoute("/piano-movers-jacksonville/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers Jacksonville FL | Licensed & Insured",
      description: "Jacksonville piano movers charge $150-$500 for uprights, $300-$800 for grands and $450-$2,300 interstate, using FDACS-registered, CPM-trained crews. Free quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...pianoCitySchema(CITY, PATH)] };
  },
  component: () => (
    <PianoCityPage
      city={CITY}
      eyebrow="Licensed & insured Jacksonville crews"
      opening="Piano moving in Jacksonville costs $150 - $500 for an upright and $300 - $800 for a grand piano locally, with interstate transport at $450 - $2,300. Send one short request and up to 4 licensed, insured Jacksonville piano movers reply with written quotes, free and with no obligation."
      challenges={[
        {
          t: "Distance beats stairs here",
          d: "Jacksonville is the largest city in Florida by land area. A move from the Westside to the beaches can exceed the 20-30 mile flat-rate radius most piano movers price within, at which point the job shifts to per-mile pricing. Confirm which model your estimate uses before you sign it.",
        },
        {
          t: "Military relocations drive interstate work",
          d: "The large military population at NAS Jacksonville and Mayport means a high share of local piano jobs are actually interstate piano transport on orders. Those moves run $450 - $2,300, often with heat-treated crating at $1,000 - $1,600, and they benefit from the longest lead time you can give.",
        },
        {
          t: "Historic housing stock",
          d: "Riverside, Avondale and San Marco homes were built long before anyone measured for a baby grand. Narrow front steps, period doorways and tight porch turns are the constraint, so the route is measured end to end before the piano moves an inch.",
        },
      ]}
      areasIntro="Coverage runs from the historic riverfront neighborhoods out to the beaches and south into St. Johns County — worth flagging your exact address early, since distance changes how the job is priced here."
      areas={[
        "Riverside",
        "Avondale",
        "San Marco",
        "Mandarin",
        "Ponte Vedra Beach",
        "Orange Park",
        "Nocatee",
        "Jacksonville Beach",
      ]}
      faqs={FAQS}
      related={[
        { to: "/movers-in-jacksonville/", label: "Full-service movers in Jacksonville", d: "Whole-home moves across Duval and St. Johns, with the piano bundled in for $75 - $150 extra." },
        { to: "/piano-movers-orlando/", label: "Piano movers in Orlando", d: "Vacation-home placements and church upright moves across Central Florida." },
        { to: "/piano-movers-the-villages/", label: "Piano movers in The Villages", d: "Downsizing moves and grands arriving from out of state." },
      ]}
    />
  ),
});
