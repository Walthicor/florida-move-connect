import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

const DEADLINE_ROWS: [string, string, string][] = [
  ["Florida driver license", "Commonly cited: within 30 days of establishing residency", "FLHSMV or your county tax collector"],
  ["Vehicle title and registration", "Commonly cited: within 10 days of starting work, enrolling children in school or establishing residency", "FLHSMV or your county tax collector"],
  ["Voter registration", "Any time; generally closes 29 days before an election", "Florida Division of Elections"],
  ["Homestead exemption", "Generally March 1 of the tax year", "County property appraiser"],
  ["Declaration of Domicile", "Optional, no deadline", "County clerk of court"],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        Your <strong>new Florida resident checklist</strong> comes down to five
        official steps after you arrive: get a Florida driver license, title and
        register your vehicle, register to vote, apply for the homestead
        exemption if you own your home, and optionally file a Declaration of
        Domicile. Along the way, set up utilities, review flood insurance and
        update your address everywhere. This guide covers the moving documents
        Florida requires and the money decisions that come with your first year.
      </p>
      <p className="mt-3 text-ink">
        Think of it as the after-arrival half of a moving to Florida checklist.
        It starts once you have moved in. For tasks before moving day,
        such as booking movers, packing and condo paperwork, use our{" "}
        <Link
          to="/blog/$slug/"
          params={{ slug: "florida-moving-checklist-8-weeks" }}
          className="text-brand underline"
        >
          8-week Florida moving checklist
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Are the Deadlines for New Florida Residents?
      </h2>
      <p className="mt-3 text-ink">
        Deadlines can change, so treat this table as a planning guide and confirm
        each one with the agency listed before you rely on it.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Task</th>
              <th className="px-4 py-3 text-left font-semibold">Timing</th>
              <th className="px-4 py-3 text-left font-semibold">Where</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {DEADLINE_ROWS.map(([task, timing, where]) => (
              <tr key={task}>
                <td className="px-4 py-3 font-semibold text-ink">{task}</td>
                <td className="px-4 py-3 text-ink">{timing}</td>
                <td className="px-4 py-3 text-ink">{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Which Moving Documents Should You Keep Handy in Florida?
      </h2>
      <p className="mt-3 text-ink">
        Most of the steps below ask for the same few originals, so keep them
        together in one folder that travels in your car, not in the moving
        truck:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>Passport or certified birth certificate, and your Social Security card.</li>
        <li>Marriage certificate or court order if your name has changed.</li>
        <li>Your current out-of-state driver license and vehicle titles.</li>
        <li>
          Proof of your Florida address: a signed lease, deed or closing
          statement, plus a recent utility bill once service starts.
        </li>
        <li>Your Florida auto insurance card.</li>
        <li>School and immunization records for children.</li>
        <li>
          Your moving contract, inventory and estimate, in case you need to file
          a claim after delivery.
        </li>
      </ul>
      <p className="mt-3 text-ink">
        Agencies generally want originals or certified copies, not photocopies.
        Check each agency's accepted-document list before your appointment.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Do You Get a Florida Driver License as a New Resident?
      </h2>
      <p className="mt-3 text-ink">
        New residents with a valid out-of-state license are expected to switch to
        a Florida license within a limited time after establishing residency. The
        commonly cited window is 30 days. Check the{" "}
        <a href="https://www.flhsmv.gov/" rel="noopener" className="text-brand underline">
          Florida Department of Highway Safety and Motor Vehicles (FLHSMV)
        </a>{" "}
        for the current deadline and requirements.
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          In many counties, driver license services are handled by the county tax
          collector's office. Book an appointment early, since offices in fast-growing
          areas fill up.
        </li>
        <li>
          Bring original documents: proof of identity, proof of your Social
          Security number and proof of your Florida residential address. FLHSMV
          publishes the exact list of accepted documents.
        </li>
        <li>
          Bring your current out-of-state license. If you have had a name change,
          bring the marriage certificate or court order that connects your names.
        </li>
        <li>
          Your new license is a strong piece of evidence that Florida is your
          home, which matters for homestead and domicile.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Do You Title and Register a Car in Florida?
      </h2>
      <p className="mt-3 text-ink">
        The vehicle deadline is usually shorter than the license deadline. The
        commonly cited rule is 10 days after you start a job, enroll a child in a
        Florida school or otherwise establish residency. Confirm the current rule
        with FLHSMV. Plan for these steps:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Buy Florida insurance first.</strong> Florida requires
          personal injury protection (PIP) and property damage liability (PDL)
          coverage on registered vehicles. You will need proof of a Florida
          policy to register.
        </li>
        <li>
          <strong>Get a VIN verification.</strong> Vehicles coming from another
          state need their vehicle identification number verified on an FLHSMV
          form, typically by a law enforcement officer, notary or licensed
          dealer.
        </li>
        <li>
          <strong>Bring your title.</strong> If a lender holds the title, the
          tag office can explain how to request it from the lienholder.
        </li>
        <li>
          <strong>Budget for fees.</strong> Vehicles not previously registered in
          Florida pay a one-time initial registration fee in addition to title
          and plate fees. Check FLHSMV for current amounts.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Do You Register to Vote in Florida?
      </h2>
      <p className="mt-3 text-ink">
        You can register when you get your driver license, online, or through your
        county Supervisor of Elections. The{" "}
        <a href="https://dos.fl.gov/elections/" rel="noopener" className="text-brand underline">
          Florida Division of Elections
        </a>{" "}
        has the online application and current deadlines. Registration generally
        closes 29 days before an election, so do it soon after you move if an
        election is coming up. Cancel your registration in your former state as
        well.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Does the Florida Homestead Exemption Work?
      </h2>
      <p className="mt-3 text-ink">
        If you own your home and it is your permanent residence, the homestead
        exemption can lower your property tax bill. Florida's homestead exemption
        can reduce the assessed value of a qualifying primary residence by up to
        $50,000; the second $25,000 does not apply to school taxes. Homestead
        properties also get the "Save Our Homes" cap, which limits how much the
        assessed value can rise each year.
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          You generally must own and live in the home as your permanent
          residence as of January 1 of the tax year.
        </li>
        <li>
          Apply with your county property appraiser. The filing deadline is
          generally March 1; confirm with your county property appraiser, since
          rules on late filing vary.
        </li>
        <li>
          Have your Florida driver license, vehicle registration and voter
          registration ready. Appraisers commonly ask for them as proof of
          residency.
        </li>
      </ul>
      <p className="mt-3 text-ink">
        The{" "}
        <a
          href="https://floridarevenue.com/property/Pages/Taxpayers_Exemptions.aspx"
          rel="noopener"
          className="text-brand underline"
        >
          Florida Department of Revenue exemptions page
        </a>{" "}
        explains homestead and other property tax exemptions, such as those for
        seniors, veterans and people with disabilities.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Is a Florida Declaration of Domicile?
      </h2>
      <p className="mt-3 text-ink">
        A Declaration of Domicile is a sworn statement, filed with the clerk of
        court in your county, that Florida is your permanent home. Filing is
        optional. It does not replace your license, registration or homestead
        application, but some people use it as added evidence of where they
        live, especially if they still own property in another state. Ask your
        county clerk about the form and filing fee.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Should Be on Your Florida Relocation Financial Checklist?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>No state income tax.</strong> Florida does not have a state
          personal income tax. Your former state may still tax income you earned
          there before you moved, so keep records of your move date and ask a tax
          professional about your final return.
        </li>
        <li>
          <strong>Property taxes and sales tax.</strong> Florida funds itself
          largely through property and sales taxes. Budget for both, and file for
          homestead if you qualify.
        </li>
        <li>
          <strong>Moving costs.</strong> Keep every receipt from the move in one
          folder. If you are still planning, see{" "}
          <Link
            to="/blog/$slug/"
            params={{ slug: "cost-to-move-new-york-to-florida" }}
            className="text-brand underline"
          >
            what a move from New York to Florida typically costs
          </Link>
          .
        </li>
        <li>
          <strong>Utility deposits.</strong> Some utilities ask new customers for
          a deposit. Ask when you set up service.
        </li>
        <li>
          <strong>Insurance premiums.</strong> Get homeowners or renters, flood
          and auto quotes before you close or sign a lease, not after.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Do You Need Flood Insurance in Florida?
      </h2>
      <p className="mt-3 text-ink">
        Ask about it even if your lender does not require it. Standard
        homeowners and renters policies generally do not cover flood damage.
        Flood coverage is a separate policy, available through the National Flood
        Insurance Program or private insurers. NFIP policies generally have a
        waiting period, typically 30 days, before coverage starts, so buy before
        you need it, not when a storm is forecast.
      </p>
      <p className="mt-3 text-ink">
        Also check how your homeowners policy handles wind. Many Florida policies
        carry a separate hurricane deductible. And look up your evacuation zone
        with your county emergency management office. If you arrived between
        June and November, our guide to{" "}
        <Link
          to="/blog/$slug/"
          params={{ slug: "hurricane-season-moving-florida" }}
          className="text-brand underline"
        >
          moving during Florida hurricane season
        </Link>{" "}
        covers storm prep for new arrivals.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Which Utilities and Accounts Should You Set Up First?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Electric.</strong> Depending on your address, service comes
          from a large investor-owned utility or a city-owned provider.
          Jacksonville, for example, is served by JEA. Ask your landlord, HOA or
          seller which provider covers the home.
        </li>
        <li>
          <strong>Water, sewer and trash.</strong> Usually handled by your city
          or county, sometimes billed together.
        </li>
        <li>
          <strong>Internet.</strong> Schedule installation before move-in;
          appointments can book out a week or more.
        </li>
        <li>
          <strong>Address updates.</strong> USPS, banks, credit cards, the IRS,
          the Social Security Administration, your employer, doctors and
          pharmacies.
        </li>
        <li>
          <strong>Local records.</strong> Find a primary care doctor, transfer
          prescriptions and enroll children in school (schools will ask for proof
          of address and immunization records).
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What If Part of Your Move Is Still on the Way?
      </h2>
      <p className="mt-3 text-ink">
        Interstate shipments arrive inside a delivery window, and closings slip.
        If your home is not ready, ask about{" "}
        <Link to="/storage-solutions/" className="text-brand underline">
          climate-controlled storage options in Florida
        </Link>{" "}
        so your furniture is protected from heat and humidity in the meantime.
        Still choosing a carrier? Compare{" "}
        <Link to="/long-distance-movers/" className="text-brand underline">
          FMCSA-registered long-distance movers to Florida
        </Link>
        , or if you are settling in Northeast Florida, see{" "}
        <Link to="/movers-in-jacksonville/" className="text-brand underline">
          Jacksonville movers for local moves
        </Link>
        . For in-town moves after you arrive, our{" "}
        <Link to="/local-movers-in-florida/" className="text-brand underline">
          Florida local moving rate guide
        </Link>{" "}
        has typical hourly rates.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "new-florida-resident-checklist",
    title: "New Florida Resident Checklist: Driver License, Tags and Homestead",
    excerpt:
      "Just moved to Florida? Here is what to do first: driver license, vehicle registration, voter registration, homestead exemption, flood insurance, utilities and domicile paperwork.",
    category: "Moving Guides",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/bbd937a6-cd2b-4a35-bad3-9ab459280159/moving-insurance-florida.jpg",
    imageAlt: "Florida homeowner reviewing paperwork at a bright kitchen table with a laptop",
    metaTitle: "New Florida Resident Checklist: License, Tags, Homestead",
    metaDescription:
      "New Florida resident checklist: driver license and vehicle registration deadlines, voter registration, homestead exemption, flood insurance and utilities.",
  },
  Body,
  faqs: [
    {
      q: "How long do I have to get a Florida driver license after moving?",
      a: "The commonly cited window is 30 days after establishing residency. Check FLHSMV for the current deadline and the documents you need to bring.",
    },
    {
      q: "When do I have to register my car in Florida?",
      a: "The commonly cited rule is within 10 days of starting work, enrolling a child in school or establishing residency. You need Florida insurance and a VIN verification first; confirm current rules with FLHSMV.",
    },
    {
      q: "What is the deadline to apply for the Florida homestead exemption?",
      a: "Generally March 1 of the tax year, and you must own and occupy the home as your permanent residence on January 1. Confirm with your county property appraiser.",
    },
    {
      q: "Do I need to file a Declaration of Domicile in Florida?",
      a: "No, it is optional. It is a sworn statement filed with your county clerk of court that some new residents use as extra evidence that Florida is their permanent home.",
    },
    {
      q: "Does Florida have a state income tax?",
      a: "No, Florida has no state personal income tax. Your former state may still tax income earned before your move, so ask a tax professional about your final return there.",
    },
    {
      q: "Does homeowners insurance cover flood damage in Florida?",
      a: "Standard homeowners policies generally do not cover flood. Flood coverage is a separate policy, and NFIP policies usually have a waiting period before they take effect.",
    },
  ],
  silo: ["florida-moving-checklist-8-weeks", "hurricane-season-moving-florida"],
  next: {
    service: { to: "/long-distance-movers/", label: "compare long-distance movers to Florida" },
    city: { to: "/movers-in-jacksonville/", label: "find licensed Jacksonville movers" },
  },
};

export default article;
