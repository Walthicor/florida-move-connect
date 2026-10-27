import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection, CardGrid, SubBlock } from "@/components/site/ContentSections";

const PATH = "/movers-in-st-petersburg/";

const FAQS = [
  {
    q: "How much do movers cost in St. Petersburg, FL?",
    a: "A two-mover crew with a truck typically costs $95-$150 per hour. Typical estimates are $400-$700 for a studio or one-bedroom, $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom; condo towers and walk-ups push totals toward the top.",
  },
  {
    q: "Is a move from St. Petersburg to Tampa a local move?",
    a: "Yes. A move across the bay is usually a local hourly job. The bridge you cross and the time you cross it matter most: the Howard Frankland, Gandy and Courtney Campbell all back up at commute times, and that time is billed.",
  },
  {
    q: "Do downtown St. Pete condo buildings require a certificate of insurance?",
    a: "Most managed towers ask for a certificate of insurance from the moving company and a reserved service elevator or loading-dock slot before the move. Request the building's requirements early and send them to every mover you are comparing.",
  },
  {
    q: "How do I find a good St. Pete moving company?",
    a: "Ask each company for its FDACS registration number, a written estimate and its policy on date changes, then confirm the registration with FDACS before paying a deposit. One request here sends your move details to up to four independent licensed movers.",
  },
  {
    q: "Do St. Petersburg movers cover Clearwater, Largo and the beaches?",
    a: "Yes. Crews in our network work all of Pinellas County, including Clearwater, Largo, Pinellas Park, Seminole, Dunedin and the beach towns along Gulf Boulevard. Moves inside the county are billed by the hour.",
  },
  {
    q: "Can St. Petersburg movers move a piano?",
    a: "A piano needs a specialist crew with a piano board and the right valuation, not a standard household crew. Mention it in your request and compare piano movers who already work the Tampa Bay area.",
  },
  {
    q: "When is the best time to move in St. Petersburg?",
    a: "Mid-month on a weekday, with a 7 or 8 a.m. start. Cross-bay moves are cheapest outside the morning and evening bridge rush, and late-summer moves should keep a backup date in case of a tropical storm.",
  },
];

export const Route = createFileRoute("/movers-in-st-petersburg/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in St. Petersburg FL | St. Pete Moving Companies",
      description:
        "Movers in St. Petersburg FL charge $95-$150 an hour. Compare licensed St. Pete moving companies for condos, bungalows, the beaches and cross-bay moves, free.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("St. Petersburg", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="St. Petersburg"
      eyebrow="Licensed Pinellas County Movers"
      opening={
        <>
          Movers in St. Petersburg, FL charge $95-$150 per hour for a two-mover crew with a truck —
          typically $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom, as estimates
          rather than fixed prices. Compare up to 4 licensed St. Pete moving companies covering
          Clearwater, Largo, Pinellas Park and the beaches with one free request.
        </>
      }
      challenges={[
        {
          t: "Three bridges to Tampa, three different clocks",
          d: "Pinellas is a peninsula, and every move to or from Tampa crosses the bay. The Howard Frankland carries I-275 between St. Pete and Westshore, the Gandy links St. Pete to South Tampa, and the Courtney Campbell connects Clearwater to the airport area. All three slow to a crawl at rush hour. Crews price the bridge and the hour they expect, so a 7 a.m. crossing usually costs less than a 5 p.m. one.",
        },
        {
          t: "Downtown condo towers and the waterfront",
          d: "Downtown St. Pete and the waterfront have a growing number of high-rise condo and apartment buildings. Expect a certificate of insurance, a reserved service elevator, a fixed loading-dock window and sometimes a ban on weekend moves. Street parking near the waterfront is tight, so the truck must use the dock or a permitted spot.",
        },
        {
          t: "Old Northeast bungalows and brick streets",
          d: "The historic Old Northeast and nearby neighborhoods like Kenwood and Crescent Lake are full of early twentieth century bungalows and craftsman homes. Narrow doorways, tight stairs to second-floor rooms, brick streets and rear alleys change how the crew loads. Many homes are best reached from the alley; tell the mover if yours is.",
        },
        {
          t: "Beach towns along Gulf Boulevard",
          d: "St. Pete Beach, Treasure Island, Madeira Beach and the other barrier-island towns sit on one main road with limited parking. Many homes sit above ground-level parking, so most furniture goes up or down an exterior staircase. Seasonal traffic on the causeways also adds time.",
        },
        {
          t: "Mobile home and 55+ communities",
          d: "Largo, Pinellas Park and mid-county have many manufactured-home parks and 55+ communities with narrow interior streets and office rules on move hours. A smaller truck or a shuttle can be needed. Ask the park office for its rules before you book.",
        },
        {
          t: "US-19 and mid-county traffic",
          d: "Moves north toward Clearwater and Countryside usually run along US-19 or the Bayside Bridge. US-19 has heavy traffic and many signals, so a move from south St. Pete to north Pinellas can take longer than the miles suggest.",
        },
      ]}
      areas={[
        "Downtown St. Pete",
        "Old Northeast",
        "Kenwood",
        "Snell Isle",
        "Shore Acres",
        "Clearwater",
        "Largo",
        "Pinellas Park",
        "Seminole",
        "St. Pete Beach",
        "Treasure Island",
      ]}
      areasIntro={
        <>
          Matched crews cover St. Petersburg and the rest of Pinellas County — downtown towers, Old
          Northeast and Kenwood bungalows, Snell Isle and Shore Acres on the water, mid-county
          Largo, Pinellas Park and Seminole, Clearwater and Dunedin to the north, and the beach
          towns from St. Pete Beach to Clearwater Beach.
        </>
      }
      extra={
        <>
          <ProseSection title="Moving Between St. Petersburg and Tampa" bg="bg-surface-alt">
            <p>
              Cross-bay moves are among the most common jobs in Tampa Bay. A move from a downtown
              St. Pete condo to a South Tampa house, or from Clearwater to Westshore, is billed
              hourly like any local move. What changes the total is the bridge and the hour.
            </p>
            <CardGrid>
              <SubBlock title="Pick the bridge with the crew">
                <p>
                  The Howard Frankland usually suits Westshore, downtown Tampa and New Tampa; the
                  Gandy suits South Tampa; the Courtney Campbell suits Clearwater and the airport
                  side. Ask the mover which route it plans and when.
                </p>
              </SubBlock>
              <SubBlock title="Plan the Tampa end too">
                <p>
                  Tampa buildings have their own elevator and insurance rules. Compare{" "}
                  <Link to="/movers-in-tampa/">Tampa movers and city building requirements</Link> if
                  your pickup or delivery is on that side of the bay.
                </p>
              </SubBlock>
            </CardGrid>
          </ProseSection>
          <ProseSection title="Condos, Pianos and Storage in St. Pete">
            <p>
              Condo and apartment moves need paperwork before the truck arrives. Our{" "}
              <Link to="/apartment-movers/">apartment and condo moving requirements guide</Link>{" "}
              covers certificates of insurance, elevator reservations and loading windows. Every
              hourly figure on this page follows the{" "}
              <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>.
            </p>
            <p>
              A piano is a specialist job. For uprights and grands anywhere in Pinellas, compare{" "}
              <Link to="/piano-movers-tampa/">piano movers in the Tampa Bay area</Link>, who also
              serve St. Petersburg and Clearwater. If you are leaving a beach home for repairs or a
              closing does not line up, see{" "}
              <Link to="/storage-solutions/">climate-controlled storage options in Florida</Link> to
              protect wood furniture and electronics from the humidity.
            </p>
          </ProseSection>
        </>
      }
      related={[
        {
          to: "/movers-in-tampa/",
          label: "Movers in Tampa",
          d: "The other side of the bay: downtown towers, South Tampa and Westshore.",
        },
        {
          to: "/piano-movers-tampa/",
          label: "Piano movers in Tampa Bay",
          d: "Upright and grand piano crews for St. Pete and Clearwater.",
        },
        {
          to: "/apartment-movers/",
          label: "Apartment and condo moving",
          d: "Certificates of insurance, elevators and loading-dock windows.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage solutions",
          d: "Climate-controlled storage and storage-in-transit in Florida.",
        },
        {
          to: "/movers-in-sarasota/",
          label: "Movers in Sarasota",
          d: "South across the Skyway: Bradenton, Sarasota and Venice.",
        },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your St. Petersburg Moving Quotes"
    />
  ),
});
