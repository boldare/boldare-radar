# Microfrontends

> An architectural style where independently deliverable frontend applications are composed into a greater whole
>
> -- <cite>Martin Fowler</cite>

In microfrontends approach, a web application is broken up by its pages and features, with each feature being owned end-to-end by a single team. Multiple techniques exist to bring the application features—some old and some new—together as a cohesive user experience, but the goal remains to allow each feature to be developed, tested and deployed independently from others.

## 👀 TLDR;

Microfrontends helps to: split the frontend by domains, do an incremental rewrite of legacy codebase, add more independency and freedom between the teams. But the trade offs are: unmature implementations, lack of case studies and good practices, increased page load.

![Microfrontends deployment, source: https://martinfowler.com/articles/micro-frontends.html](/docs/microfrontends-deployment.png)

## ➕ Benefits

- **Incremental Upgrades** For many organisations this is the beginning of their micro frontends journey. The old, large, frontend monolith is being held back by yesteryear's tech stack, or by code written under delivery pressure, and it's getting to the point where a total rewrite is tempting. In order to rewrite the old application piece by piece, the microfrontend architecture sounds like a good option.
- **Technology Agnostic** Each team is be able to choose and upgrade their stack without having to coordinate with other teams.
- **Team Scalability** Multiple teams can work independently to contribute to multiple systems. This allows us to divide the work and scale it through multiple teams.
- **Single Responsibility** Each team can focus on one business domain
- **Learning Curve** For new engineers joining the teams, it is easier to learn smaller apps than understanding a monolith with thousands of lines of code.
- **Independent Deployment** Each micro frontend has its own continuous delivery pipeline, which builds, tests and deploys it all the way to production

## ➖ When not to use

- when **you have doubts**. You can always start with the monolith and later migrate to the microfrontends. Despite all the benefits, microfrontends approach is quite unmature, current microfrontends implementations are not perfect - all of them have trade-offs.
- when the **team is small or have no communication problems** (eg. because of the timezone differences). In this case the question is - do you really need the independence given by microfrontends?
- when the **page load time is crucial from a business point of view**. Microfrontends will not speed up your application, the bundle will be bigger than in monolith
- when the **microfrontend applications need to communicate often each other**. The coupling between the apps should be as small as possible and when you need to share a lot of logic, then you probably should consider a monolith. The tools for a monolith are getting better and some as [Nx](https://nx.dev/) or [Turoborepo](https://turborepo.org/) are worth checking out.
- when **you don't have enough automation in place** to feasibly provision and manage the additional required infrastructure
- when **you are not comfortable with decisions around tooling and development practices becoming more decentralised** and less controllable
- when **you will not able to ensure a minimum level of quality**, consistency, or governance across your many independent frontend codebases

## 💡 Resources

### 📜 Articles

- [Micro Frontends (Cam Jackson)](https://martinfowler.com/articles/micro-frontends.html) - the most complete resource will guide you about good practices, decisions to consider and risks with microfrontends architecture
- [Adopting a Micro-frontends architecture (DAZN Tech)](https://medium.com/dazn-tech/adopting-a-micro-frontends-architecture-e283e6a3c4f3) - case study how DAZN approached the microfrontends
- [Micro-Frontends: What, why, and how (Rany ElHousieny)](https://www.linkedin.com/pulse/micro-frontends-what-why-how-rany-elhousieny-phd%E1%B4%AC%E1%B4%AE%E1%B4%B0/) - a solid article focused more on the practical way of implementing microfrontends
- [You probably don’t need a micro-frontend](https://blog.scottlogic.com/2021/02/17/probably-dont-need-microfrontends.html) - it's crucial to understand if micro-frontends is a right solution for you

### 🎥 Videos

- [Architektura Mikrofrontendowa by Tomasz Ducin](https://www.youtube.com/watch?v=XgpdXUXvMkI) - part of the content of [Architektura na Froncie](https://architekturanafroncie.pl/)
- [Lessons from DAZN: Scaling Your Project with Micro-Frontends](https://www.youtube.com/watch?v=tD1rcWSfYpo) - video from conference
- [Webpack 5 Module Federation - Zack Jackson - CityJS Conf 2020](https://www.youtube.com/watch?v=-ei6RqZilYI) - Zack Jackson is a creator of Module Federation, so it's really worth to learn his point of view on the microfrontends

### ⌨️ Implementations

- iFrames - dead easy to set up, but it's hard to implement RWD and share dependencies
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) - great choice if... all of your microfrontends will use Webpack 5
- [Single SPA](https://single-spa.js.org/) - a framework for building microfrontends. It is opinionated and requires lot's of configuration
- [qiankun](https://qiankun.umijs.org/) - a framework based on single-spa which has lots of configuration out of the box
