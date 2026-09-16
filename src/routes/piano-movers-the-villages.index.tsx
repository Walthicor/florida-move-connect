import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection } from "@/components/site/ContentSections";
import { PianoCityPage, pianoCitySchema, type PianoFaq } from "@/components/site/PianoCityPage";

const PATH = "/piano-movers-the-villages/";
const CITY = "The Villages";

const FAQS: PianoFaq[] = [
  {
    q: "Can a grand piano be delivered into a villa?",
    a: "Usually yes. Villa layouts here are golf-cart oriented, so the truck often stages on the street or a shared drive and the crew rolls the instrument in from there. Legs, pedal box and music rack come off first, at roughly $150 for partial disassembly.",
  },
  {
    q: "My grand is shipping down from up north — what will that cost?",
    a: "Interstate piano transport runs $450 - $2,300 depending on route and instrument, and heat-treated crating adds $1,000 - $1,600 when it is required. Downsizing moves into The Villages frequently arrive this way, so book four or more weeks out.",
  },
  {
    q: "What do local piano moves inside The Villages cost?",
    a: "Uprights are $150 - $500 and baby grands $300 - $800, with concert grands at $500 - $1,500. Short hops between villages are still priced on crew size, stairs and disassembly rather than mileage, so a five-minute move is not a five-minute price.",
  },
  {
    q: "Do you move instruments for resident music and choral groups?",
    a: "Yes. Active resident music and choral groups move uprights between recreation centers and community halls regularly. Those venues have double doors, stage steps and ramps rather than staircases, and the route is measured before the piano leaves the room.",
  },
  {
    q: "When should the piano be tuned after arriving?",
    a: "Two to four weeks after placement. An instrument that has just come from a northern home faces a large humidity change in Central Florida, and the soundboard needs to settle before a tuning will hold pitch in its new room.",
  },
];

export const Route = createFileRoute("/piano-movers-the-villages/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers The Villages FL | Grand Piano Specialists",
      description: "Piano movers in The Villages charge $150-$500 for uprights, $300-$800 for grands locally and $450-$2,300 interstate. Insured, CPM-trained crews, free quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...pianoCitySchema(CITY, PATH)] };
  },
  component: () => (
    <PianoCityPage
      city={CITY}
      eyebrow="Grand piano specialists"
      opening="Grand piano moving in The Villages FL costs $300 - $800 locally and $150 - $500 for an upright, with interstate transport at $450 - $2,300. Tell us the instrument and the villa once, and up to 4 licensed, insured piano movers send free written quotes with no obligation."
      challenges={[
        {
          t: "More pianos per household than anywhere",
          d: "As one of the largest retirement communities in the United States, The Villages has an unusually high density of pianos per household, supported by active resident music and choral groups. Instruments move between homes, recreation centers and community halls far more often than in a typical Florida market.",
        },
        {
          t: "Downsizing from a larger northern home",
          d: "A great many moves here start out of state: a grand piano leaving a big northern house and arriving in a smaller Florida villa. That means interstate transport at $450 - $2,300, possible crating at $1,000 - $1,600, and a destination room that must be measured before the truck is booked.",
        },
        {
          t: "Golf-cart streets and villa garages",
          d: "Street layouts here are built around golf carts, and villa garage access is narrow. Truck staging is the real planning problem: crews often park at a distance and roll the instrument in on a piano board, which affects crew size and time on the estimate.",
        },
      ]}
      areasIntro="Coverage spans the town squares and the surrounding Lake, Sumter and Marion County towns, including out-of-state deliveries arriving through Central Florida."
      areas={[
        "Spanish Springs",
        "Lake Sumter Landing",
        "Brownwood",
        "Fenney",
        "Leesburg",
        "Lady Lake",
        "Wildwood",
      ]}
      extra={
        <ProseSection title="Downsizing, Villas and Out-of-State Arrivals" bg="bg-surface-alt">
          <p>
            Almost no piano move in The Villages is a routine cross-town job. Two patterns dominate:
            an instrument arriving from a northern family home as part of a retirement relocation,
            and a piano moving between homes inside the community as residents change villas or
            hand the instrument to a family member. The first is interstate transport, priced by
            route and instrument and often needing crating. The second is a short local hop still
            priced on crew size, stairs and disassembly rather than distance.
          </p>
          <p>
            The housing here is genuinely unusual. Designer and patio villas are compact and
            single-story with narrow garage entries, and the street network is built around golf
            carts rather than 26-foot trucks. Crews frequently stage at a distance and roll the
            instrument in on a piano board — that staging distance, not the piano, is what changes
            the estimate. Courtyard villas add a gated wall and a turn most grands cannot make fully
            assembled, and recreation centers and church halls around the town squares move consoles
            over ramps and platform steps.
          </p>
          <p>
            Because so many of these moves are downsizing decisions, the piano question is often
            part of a larger one: what fits in the new home at all. Our{" "}
            <Link to="/senior-moving-services/">senior moving services</Link> cover the sorting and
            timeline side, <Link to="/movers-in-the-villages/">movers in The Villages</Link> handle
            the rest of the household, and{" "}
            <Link to="/piano-moving-cost/">piano moving costs by instrument</Link> explains what the
            instrument itself should run.
          </p>
        </ProseSection>
      }
      faqs={FAQS}
      related={[
        { to: "/movers-in-ocala/", label: "Full-service movers in Ocala and the north Villages area", d: "Whole-home and downsizing moves nearby, with an upright bundled in for $75 - $150 extra." },
        { to: "/piano-movers-orlando/", label: "Piano movers in Orlando", d: "Vacation-home placements and church upright moves across Central Florida." },
        { to: "/piano-movers-jacksonville/", label: "Piano movers in Jacksonville", d: "Per-mile cross-town pricing and interstate transport out of Northeast Florida." },
      ]}
    />
  ),
});
