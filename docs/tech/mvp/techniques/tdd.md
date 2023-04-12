# TDD

## First things first - how do we understand TDD?

**Test Driven Development** became strongly assotiated with the software delivery framework and Gherkin. This framework approach uses waterfall delivery manner, where automated e2e tests are set up fristly, and afterwards the implementation of the project itself, or at least module by module. 

We're referring, in the tech radar, to the low level development workflow. 

When the development started, one can use (not a must) this approach on daily basis. It consists of 3 main steps for writing new code in a specific order:
1. write test - it shall fail (!) as for missing implementation
2. write a minimal code that passes the test
3. refactor.

also known as
> red, green, refactor.

(red - tests fail, green - tests pass, refactor - you know best what's needed here 😉)


## What value does it bring?
TODO


## When to use?
In this approach we do not focus on any specific level of tests: unit, integration, e2e. For any of those levels TDD can be used. But again, mind this is an optional technique. 
There are a few cases where it brings most value:
1. refactor - in this case it should be a must have. Any refactor can be risky, and only tests can give the developer confidence of not breaking functionality.
2. starting an implementation of a complex feature. Example symptoms to know if an expected piece of software is complex: multiple entrances or exits to/from a process, a function which accespts multiple arguments, or there is quite a few acceptance criterias to a task or function. 
3. unclear all of the expected outputs - writing tests allows the developer to discover all questions before starting the on-the-go implementation.
4. any time a developer thinks one doesn't need test for this simple function 😄.


## Reasons to move TDD from Product Market Fit to MVP
- `TDD` can be used from the early stage of development, 
- If You can use `TDD` it can improve quality of your solution even at MVP phase,


## Further read
- https://medium.com/pilar-2020/applying-test-driven-development-6d6d3af186cb
