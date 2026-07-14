/**
 * Data Program Survival — Six-Factor Rubric
 *
 * Scores five real-world data-sharing programs against six survival factors.
 * Each factor is scored -2 to +2. Total range: -12 to +12.
 *
 * Design principle: fail fast. Invalid data throws immediately —
 * no silent fallback, no default substitution.
 */

type Factor =
  | "adoptionCost"
  | "governanceModel"
  | "commercialCompatibility"
  | "fundingSustainability"
  | "scopeDiscipline"
  | "ownershipStructure";

const FACTORS: Factor[] = [
  "adoptionCost",
  "governanceModel",
  "commercialCompatibility",
  "fundingSustainability",
  "scopeDiscipline",
  "ownershipStructure",
];

const MIN_SCORE = -2;
const MAX_SCORE = 2;

interface ProgramScore {
  name: string;
  domain: string;
  status: string;
  scores: Record<Factor, number>;
  verdict: string;
}

const PROGRAMS: ProgramScore[] = [
  {
    name: "caBIG",
    domain: "Oncology research (cancer Biomedical Informatics Grid)",
    status: "Shut down 2012",
    scores: {
      adoptionCost: -2,
      governanceModel: -2,
      commercialCompatibility: -2,
      fundingSustainability: -2,
      scopeDiscipline: -2,
      ownershipStructure: -1,
    },
    verdict:
      "Built a monument. Competed with commercial CTMS vendors, cost $350M+, " +
      "2011 review found results 'not commensurate with investment.'",
  },
  {
    name: "Open PHACTS",
    domain: "Pharmacology data integration",
    status: "Foundation-transitioned",
    scores: {
      adoptionCost: 1,
      governanceModel: 0,
      commercialCompatibility: 1,
      fundingSustainability: -1,
      scopeDiscipline: 2,
      ownershipStructure: 1,
    },
    verdict:
      "Solid standard, but the funding cliff at grant end forced a difficult " +
      "transition to an independent foundation.",
  },
  {
    name: "MGI",
    domain: "Genomics (Mouse Genome Informatics)",
    status: "Active, NIH-funded",
    scores: {
      adoptionCost: 1,
      governanceModel: 0,
      commercialCompatibility: 1,
      fundingSustainability: -1,
      scopeDiscipline: 1,
      ownershipStructure: 1,
    },
    verdict:
      "Long-running and trusted, but sustained almost entirely by continuous " +
      "NIH funding — durable, not self-sustaining.",
  },
  {
    name: "OMOP / OHDSI",
    domain: "Clinical and observational health data",
    status: "Active, thriving",
    scores: {
      adoptionCost: 2,
      governanceModel: 2,
      commercialCompatibility: 2,
      fundingSustainability: 1,
      scopeDiscipline: 2,
      ownershipStructure: 1,
    },
    verdict:
      "Community-owned open standard. Complements rather than replaces " +
      "existing systems. Widely adopted because it asks little and gives a lot.",
  },
  {
    name: "GS1 GDSN",
    domain: "Supply chain / product data (Global Data Synchronization Network)",
    status: "Active, industry standard",
    scores: {
      adoptionCost: 2,
      governanceModel: 2,
      commercialCompatibility: 2,
      fundingSustainability: 2,
      scopeDiscipline: 2,
      ownershipStructure: 1,
    },
    verdict:
      "The model case. Industry-consortium governed, fee-sustained, narrow " +
      "in scope, near-universally adopted — never tried to be more than a standard.",
  },
];

/** Sum a program's six factor scores. Throws if any factor is missing or out of range. */
function computeTotal(program: ProgramScore): number {
  let total = 0;

  for (const factor of FACTORS) {
    const score = program.scores[factor];

    if (score === undefined) {
      throw new Error(
        `Program "${program.name}" is missing required factor "${factor}".`
      );
    }
    if (score < MIN_SCORE || score > MAX_SCORE) {
      throw new Error(
        `Program "${program.name}" factor "${factor}" score ${score} is outside ` +
          `the valid range [${MIN_SCORE}, ${MAX_SCORE}].`
      );
    }

    total += score;
  }

  return total;
}

/** Validate and print the full rubric. Fails fast on any malformed program entry. */
function run(): void {
  console.log("Data Program Survival — Six-Factor Rubric\n");
  console.log(
    `${"Program".padEnd(16)}${"Status".padEnd(28)}${"Score".padEnd(8)}Verdict`
  );
  console.log("-".repeat(100));

  for (const program of PROGRAMS) {
    const total = computeTotal(program);
    console.log(
      `${program.name.padEnd(16)}${program.status.padEnd(28)}${String(
        total
      ).padEnd(8)}${program.verdict}`
    );
  }
}

run();

export { PROGRAMS, computeTotal, FACTORS };
