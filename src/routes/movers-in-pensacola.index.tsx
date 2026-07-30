import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";

const PATH = "/movers-in-pensacola/";

const FAQS = [
  {
    q: "How much do movers cost in Pensacola?",
    a: "A two-mover crew with a truck runs $95-$150 per hour in Pensacola. A studio or one-bedroom typically lands at $400-$700, a two-bedroom at $650-$1,100 and a three-bedroom at $900-$1,600. Stairs, long carries and month-end weekends push totals higher.",
  },
  {
    q: "Is a move from Pensacola to Tampa or Miami priced as a local move?",
    a: "No. Pensacola sits closer to Mobile and New Orleans than to peninsular Florida, so a move to Tampa, Orlando or Miami is a long-haul intrastate job priced by inventory and mileage rather than by the hour. Ask for a written binding estimate on those routes.",
  },
  {
    q: "Do Pensacola movers handle military PCS moves from NAS Pensacola?",
    a: "Yes. NAS Pensacola and Corry Station drive steady relocation volume, and local carriers work regularly with service members on PCS timelines, short-notice orders, storage gaps between quarters and interstate transport out of the Panhandle.",
  },
  {
    q: "How far ahead should I book a mover in Pensacola?",
    a: "Two to three weeks is comfortable for a weekday move. Summer PCS season and month-end weekends tighten quickly, and hurricane season from June through November can force reschedules, so lock your date early and keep a backup day.",
  },
  {
    q: "Do movers cover Perdido Key, Gulf Breeze and Navarre?",
    a: "Yes. Beach and barrier-island addresses are routine work here, though bridge routes to Pensacola Beach and Navarre add drive time, and condo buildings on the water often require an elevator reservation and a certificate of insurance.",
  },
];

export const Route = createFileRoute("/movers-in-pensacola/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Pensacola FL | Compare Licensed Moving Companies",
      description:
        "Compare licensed movers in Pensacola FL. Local crews from $95/hr, military PCS and Panhandle long-haul routes. Get up to 4 free quotes in 2 minutes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Pensacola", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Pensacola"
      eyebrow="Licensed Escambia County Movers"
      opening={
        <>
          Moving services in Pensacola FL run $95-$150 per hour for a two-mover crew with a truck,
          or roughly $400-$700 for a one-bedroom and $900-$1,600 for a three-bedroom home. Tell us
          your dates once and up to 4 licensed, insured Pensacola movers send you free quotes.
        </>
      }
      challenges={[
        {
          t: "The Panhandle is its own market",
          d: "Pensacola sits closer to Mobile and New Orleans than to Tampa, so anything heading to peninsular Florida is a long-haul job, not an hourly one. Carriers price those routes by inventory and mileage and often consolidate loads, which is why the same 2-bedroom costs one thing inside Escambia County and something very different on I-10 east.",
        },
        {
          t: "NAS Pensacola relocation volume",
          d: "Naval Air Station Pensacola and Corry Station keep a constant flow of PCS moves through the city. That is good news for supply — crews here understand orders, weight allowances and storage gaps between quarters — but summer PCS season is the tightest booking window of the year.",
        },
        {
          t: "Beaches, bridges and storm season",
          d: "Perdido Key, Pensacola Beach and Navarre are reached by causeway, so drive time between origin and destination is real billable time on hourly jobs. From June to November, hurricane watches can freeze truck schedules for days, and coastal condo buildings tighten access rules during that period.",
        },
      ]}
      areas={[
        "Downtown Pensacola",
        "East Hill",
        "Perdido Key",
        "Gulf Breeze",
        "Navarre",
        "Pace",
        "Milton",
        "Pensacola Beach",
      ]}
      areasIntro={
        <>
          Our matched Pensacola crews work across Escambia and Santa Rosa counties every week —
          historic homes with narrow porches downtown, older bungalows in East Hill, beach condos on
          Perdido Key, and the fast-growing suburbs in Pace and Milton.
        </>
      }
      related={[
        { to: "/local-movers-in-florida/", label: "Florida local moving rates", d: "The full hourly rate card and what pushes a Pensacola quote up or down." },
        { to: "/long-distance-movers/", label: "Long-distance moving from the Panhandle", d: "How Pensacola to Tampa, Orlando or out of state is priced and scheduled." },
        { to: "/movers-in-tallahassee/", label: "Movers in Tallahassee", d: "The next major market east on I-10, with cost-led pricing detail." },
        { to: "/movers-in-jacksonville/", label: "Movers in Jacksonville", d: "Coast-to-coast intrastate route pricing and access notes." },
        { to: "/storage-solutions/", label: "Storage between homes", d: "Storage-in-transit options when PCS dates and closing dates do not line up." },
      ]}
      faqs={FAQS}
      ctaTitle="Compare Pensacola Moving Quotes"
    />
  ),
});
