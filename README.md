# Data Program Survival: A Six-Factor Rubric

Why do some data-sharing and interoperability programs become permanent infrastructure — while others, backed by hundreds of millions of dollars and genuine scientific ambition, quietly disappear?

This project scores five real-world data-sharing programs against a six-factor survival rubric, built to make one pattern visible: **the programs that survive are rarely the ones with the biggest budget or the boldest vision. They are the ones designed, from day one, to be adopted rather than administered.**

---

## The Six Factors

Each program is scored **-2 to +2** on six factors. Total possible range: **-12 to +12**.

| # | Factor | -2 (fails) | +2 (succeeds) |
|---|---|---|---|
| 1 | **Adoption Cost** | High friction to join; requires new infrastructure | Opt-in with minimal new infrastructure |
| 2 | **Governance Model** | Centralized, single-agency control | Distributed, community/consortium governance |
| 3 | **Commercial Compatibility** | Competes directly with commercial tooling | Complements and integrates with existing tools |
| 4 | **Funding Sustainability** | Entirely grant-dependent, no self-sustaining model | Membership, fee, or embedded funding model |
| 5 | **Scope Discipline** | Comprehensive "platform" trying to do everything | Narrow, well-defined interoperability standard |
| 6 | **Ownership Structure** | Owned by a single agency or vendor | Owned by the community that uses it |

---

## Programs Scored

| Program | Domain | Status | Score | Verdict |
|---|---|---|---|---|
| **caBIG** (cancer Biomedical Informatics Grid) | Oncology research | Shut down 2012 | **-11** | Built a monument. Competed with commercial CTMS vendors, cost $350M+, review found results "not commensurate with investment." |
| **Open PHACTS** | Pharmacology data | Foundation-transitioned | **+4** | Solid standard, but funding cliff at grant end forced a difficult transition to independent foundation. |
| **MGI** (Mouse Genome Informatics) | Genomics | Active, NIH-funded | **+3** | Long-running and trusted, but sustained almost entirely by continuous NIH funding — a durable model, not a self-sustaining one. |
| **OMOP / OHDSI** | Clinical/observational health data | Active, thriving | **+10** | Community-owned open standard. Complements rather than replaces existing systems. Widely adopted precisely because it asks little and gives a lot. |
| **GS1 GDSN** (Global Data Synchronization Network) | Supply chain / product data | Active, industry standard | **+11** | The model case. Industry-consortium governed, fee-sustained, narrow in scope, and near-universally adopted because it never tried to be more than a standard. |

---

## The Pattern

The two programs that died or struggled (caBIG, Open PHACTS) both tried to be **comprehensive platforms** — administered, centrally governed, and dependent on time-limited funding.

The two that thrive (GS1 GDSN, OMOP/OHDSI) are both **narrow standards** — community-governed, funded sustainably, and designed to complement rather than replace what already existed.

MGI sits in between: genuinely valuable and durable, but structurally dependent on a single funding source in a way the strongest survivors are not.

**The lesson for any R&D data or AI strategy today is the same:** the risk isn't the technology. It's whether adoption, governance, and sustainability were designed in from day one — or assumed to follow once the platform existed. They rarely do.

---

## Methodology Note

Factor scores in this repository reflect the author's own analysis of publicly documented program history, funding, and adoption outcomes (see `SOURCES.md`). This is an interpretive framework, not a peer-reviewed instrument — it is offered as a lens for reflection, not a definitive verdict on any program's scientific merit.

## Validation

`rubric.ts` contains the scoring data and a fail-fast validator — it throws immediately if any score falls outside the defined range or if a program is missing a required factor, rather than silently accepting bad data.

```bash
npx ts-node rubric.ts
```

---

## The Question This Raises

Every R&D or data organisation has had at least one caBIG — a program with real funding, real sponsorship, and a good name, that still died on the vine.

**What was yours?**

---

*Author: [Inguva Sivaram](https://www.linkedin.com/in/inguvasivaram-0376845) — R&D Data & Digital Leader*

