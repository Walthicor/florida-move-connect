import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";
import { ProseSection } from "@/components/site/ContentSections";

const PATH = "/grand-piano-movers/";

const FAQS = [
  {
    q: "How much do grand piano movers cost in Florida?",
    a: "A baby grand costs $300 - $800 to move locally and a concert grand $500 - $1,500. Interstate transport runs $450 - $2,300, plus $1,000 - $1,600 if heat-treated crating is required. Partial disassembly adds about $150.",
  },
  {
    q: "Do the legs really have to come off?",
    a: "On a grand, yes. The music rack, pedal box and legs are removed so the body can be laid on its straight side and strapped to a skid board. Rolling a grand on its own casters is how legs snap and floors get gouged.",
  },
  {
    q: "What if the grand will not fit through the door?",
    a: "The crew measures doors, turns and stairwells first. If the instrument cannot clear, it is removed through a window by crane as a separately quoted operation. Disassembly often solves the clearance problem before a crane is needed.",
  },
  {
    q: "What is the difference between a baby grand, a parlor grand and a concert grand for moving purposes?",
    a: "Length and weight decide the crew. A baby grand at roughly 5 to 5 foot 6 and 500-650 pounds usually takes three movers. Parlor or living-room grands at 5 foot 7 to 7 feet and 650-800 pounds take three to four. Semi-concert and concert grands from 7 to 9 feet can exceed 1,000 pounds and need four to five movers plus a wider clearance path.",
  },
  {
    q: "How many people does it take to move a grand piano?",
    a: "Three at an absolute minimum for a baby grand, and four to five for a semi-concert or concert instrument. Crew size is not padding on the invoice: the body has to be supported evenly while each leg comes off, and an under-staffed lift is how soundboards crack and backs get injured.",
  },
  {
    q: "Should a grand be tuned before or after a Florida move?",
    a: "After, and not immediately. Give the instrument two to four weeks in its new room so the soundboard settles to that room's humidity, then book the tuning. Tuning first simply pays for a tuning that the move and the climate change undo.",
  },
  {
    q: "Can a grand piano be stored in Florida between homes?",
    a: "Only in climate-controlled storage. An uncontrolled Florida unit swings through heat and humidity that swells the soundboard, corrodes strings and loosens glue joints. Ask specifically for a climate-controlled vault and keep the instrument crated or fully wrapped while it sits.",
  },
];

export const Route = createFileRoute("/grand-piano-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Grand Piano Movers in Florida | Baby & Concert Grands",
      description: "Florida grand piano movers price baby grands at $300-$800 and concert grands at $500-$1,500 locally, using skid boards, crating and crane exits when needed.",
      faqs: FAQS,
      service: { serviceType: "Grand Piano Moving", areaServed: "Florida" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Grand piano specialists"
        h1={<>Grand Piano Movers in <span className="text-brand">Florida</span></>}
        intro="Moving a grand piano in Florida costs $300-$800 locally and $450-$2,300 interstate, with crane or window removals quoted separately. Baby grands through concert grands are disassembled, wrapped, strapped to a skid board and rolled — never lifted and carried. Compare up to 4 licensed, insured Florida crews free."
        ctaLabel="Get Grand Piano Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Grand piano moving rates"
        col1="Instrument"
        col2="Local price"
        col3="Crew & weight"
        rows={[
          { size: "Baby grand", price: "$300 - $800", detail: "3-4 movers · 500-800 lb" },
          { size: "Concert grand", price: "$500 - $1,500", detail: "4-5 movers · up to 1,300 lb" },
          { size: "Interstate transport (any)", price: "$450 - $2,300", detail: "Crew varies" },
          { size: "Heat-treated crating (interstate)", price: "$1,000 - $1,600", detail: "Added to transport" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Method"
        title="How a grand is prepared"
        items={[
          { t: "Disassembly", d: "Lid locked, music rack and pedal box removed, legs taken off one at a time while the body is supported. Roughly $150 for partial disassembly." },
          { t: "Skid board and straps", d: "The body is laid on its straight side onto a padded skid board, wrapped in blankets and strapped down. It travels on that edge, never flat on its back." },
          { t: "Clearance and crane exits", d: "Doors, turns and stairwells are measured first. If the grand will not clear, it leaves through a window by crane, quoted separately." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Coverage"
        title="Insurance on a high-value grand"
        items={[
          { t: "Released value pays $0.60/lb", d: "A 500-pound baby grand is covered for $300 — whether the instrument is worth $5,000 or $50,000." },
          { t: "Full value protection", d: "Paid coverage tied to the declared value of your instrument. Get it in writing on the estimate before the crew arrives." },
          { t: "Re-tune after acclimating", d: "Florida humidity shifts the soundboard. Wait two to four weeks in the new room, then book the tuning." },
        ]}
      />
      <ProseSection
        eyebrow="By instrument"
        title="Which Grand Do You Actually Have?"
        bg="bg-surface-alt"
      >
        <p>
          "Grand piano" covers instruments from 4 foot 11 to nine feet, and the difference decides
          crew size, clearance and price far more than the brand does. Measure from the very front
          edge of the keyboard end to the tip of the tail with the lid closed, then match it below.
        </p>
        <p>
          <strong>Baby grand (about 4'11" - 5'6", 500-650 lb).</strong> Three movers, legs and lyre
          off, body on a skid board. This is the instrument most Florida households own, and the one
          most likely to clear a standard doorway once it is on its side. Typical local estimate
          $300-$800.
        </p>
        <p>
          <strong>Parlor or living-room grand (about 5'7" - 7', 650-800 lb).</strong> Three to four
          movers. The extra length is what fails interior turns — hallway corners and stair landings
          are measured before the crew commits to a route.
        </p>
        <p>
          <strong>Semi-concert and concert grand (7' - 9', up to roughly 1,300 lb).</strong> Four to
          five movers, wider clearance, and the instruments most likely to need a window or crane
          exit. Typical local estimate $500-$1,500, quoted after someone has seen the path.
        </p>
        <p>
          <strong>Player and hybrid grands.</strong> The player mechanism and its electronics are
          part of the instrument's weight and are handled with it — tell the mover it is a player
          system so the quote reflects the added care and weight rather than being revised on the
          day.
        </p>
      </ProseSection>
      <ProseSection
        eyebrow="Florida specifics"
        title="Humidity, Storage and Florida Homes"
      >
        <p>
          Florida is a harder climate on a grand than the move itself. Soundboards respond to
          humidity, so a piano crossing from a dehumidified northern house into a Gulf-coast room
          will shift regardless of how carefully it travelled. That is why tuning waits two to four
          weeks and why any storage gap belongs in a climate-controlled vault rather than an
          uncontrolled unit.
        </p>
        <p>
          The homes matter too. Tile and polished-concrete floors are common here and unforgiving of
          a dropped caster; lanai doors, pool decks and step-down living rooms create routes that do
          not exist up north; and high-rise condos along both coasts add a certificate of insurance,
          a reserved service elevator and a fixed loading window. Give each mover the floor type,
          the exact path and any elevator or gate rule while you are still comparing quotes.
        </p>
        <p>
          Comparing instruments or planning a whole-home move around the piano? See{" "}
          <Link to="/piano-moving-cost/">piano moving costs by instrument and access</Link>, the{" "}
          <Link to="/piano-movers/">Florida piano movers</Link> page for crews and specialty
          services, and{" "}
          <Link to="/storage-solutions/">climate-controlled storage in Florida</Link> if the
          instrument needs to wait between homes. City-level access detail lives on{" "}
          <Link to="/piano-movers-tampa/">Tampa piano movers</Link>,{" "}
          <Link to="/piano-movers-miami/">Miami piano movers</Link> and{" "}
          <Link to="/piano-movers-orlando/">Orlando piano movers</Link>.
        </p>
      </ProseSection>
      <PageFaq title="Grand piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
