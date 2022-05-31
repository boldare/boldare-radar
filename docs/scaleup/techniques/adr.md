# ADR

## What is ADR?

ADR stands for **Architectural Decision Records**.

> An [Architectural Decision (AD)](https://en.wikipedia.org/wiki/Architectural_decision) is a software design choice that addresses a functional or non-functional requirement that is architecturally significant. This might, for instance, be a technology choice (e.g., Java vs. JavaScript), a choice of the IDE (e.g., IntelliJ vs. Eclipse IDE), a choice between a library (e.g., SLF4J vs java.util.logging), or a decision on features (e.g., infinite undo vs. limited undo). Do not take the term "architecture" too seriously or interpret it too strongly. As the examples illustrate, any decisions that might have an impact on the architecture somehow are architectural decisions.

## Links

- [What is ADR](https://github.com/joelparkerhenderson/architecture-decision-record#what-is-an-architecture-decision-record)
- [ADR from Github](https://adr.github.io)
- [Example of ADR with Markdown file](https://adr.github.io/madr/#example)

## Benefits

- **Phase change** - Decision that we made in MVP phase, might not be the best in PMF phase (Product Market Fit). By keeping those ADR's from previous phase we know why we made some decision and we can think about how we can change it.
- **Transparency** - Any decision made by team will be easy to track and accessible. It allows the team to access the information about decision made in the past (f.e. 2 years ago).
- **Onboarding Process improvement** - By giving them option to read about our approach to the problem, new joiners can easily understand the context behind the decision. Example: If we would have an ADR for Chart Library, the person can understand the context of change, solutions we thought about and understand why we chose specific solution. We can also include something like:
  - Why we have micro-services, instead of monolith application?
  - Why are we using Ant Design instead of Material Design?

## Where I can store ADRs?

It fully depends on the team.
You can store them on Github as markdown files inside the repository.
You can also have them in Confluence or any other Company-Wiki App.

## Example of ADR using MADR (Markdown ADR)

```md
# Use Markdown Architectural Decision Records

## Context and Problem Statement

We want to record architectural decisions made in this project.
Which format and structure should these records follow?

## Considered Options

- [MADR](https://adr.github.io/madr/) 2.1.0 - The Markdown Architectural Decision Records
- [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) - The first incarnation of the term "ADR"
- [Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions) - The Y-Statements
- Other templates listed at <https://github.com/joelparkerhenderson/architecture_decision_record>
- Formless - No conventions for file format and structure

## Decision Outcome

Chosen option: "MADR 2.1.0", because

- Implicit assumptions should be made explicit.
  Design documentation is important to enable people understanding the decisions later on.
  See also [A rational design process: How and why to fake it](https://doi.org/10.1109/TSE.1986.6312940).
- The MADR format is lean and fits our development style.
- The MADR structure is comprehensible and facilitates usage & maintenance.
- The MADR project is vivid.
- Version 2.1.0 is the latest one available when starting to document ADRs.
```
