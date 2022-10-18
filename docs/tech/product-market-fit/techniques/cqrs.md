# CQRS

CQRS stand for Command-Query Responsibility Separation. It a programming pattern providing separate models for **reading** and **changing** the data. It differs from simpler Command-Query Separation, which separates methods into queries and commands, yet still acting on a single model. In CQRS the model itself is divided into read model and write model. Inside the system, queries take completely different path than commands and they often land in separate databases.

CQRS is commonly used with [Event Sourcing](./event-sourcing.md) as the write model becomes a storage for events.

## ➕ Benefits

* Choosing best suited databases for reading data
* Choosing best suited databases for writing data
* Easier management in complex business domains
* Independent scaling of read and write models
* Perfect for [Event Sourcing](./event-sourcing.md) and [Domain Driven Design](./ddd.md)

## ➖ Drawbacks

* Higher code redundancy
* Data consistency has to be ensured
* More points of failure with more databases 
* More database technologies and expertise required
* Not recommended for small/CRUD applications

### 📜 Articles

- [CQRS Pattern | Event Store](https://www.eventstore.com/cqrs-pattern)
- [CQRS and Event Sourcing in Java | Baeldung](https://www.baeldung.com/cqrs-event-sourcing-java)
- [CQRS | Azure](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs)
