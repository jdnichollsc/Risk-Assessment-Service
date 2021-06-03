# Risk-Assessment-Service
Creating an imaginary product

## Company principles

> We’re at the cutting edge of our field. So you’re working in uncharted waters and we like to test new ideas wherever we can.

- Customer obsession: serving the customer comes first.
- Deliver quality results: delivery value to their customers.
- Let the team shine: leveraging differences and building on the strengths of others.
- Challenge the status quo: confront their customer's problems and find simple solutions fast (change, iterate and innovate).
- Start small and learn fast: Do more with less and understand that funding doesn't start ideas - ideas start their funding.
- Hire and develop exceptional talent: see differences as an asset, and empower others to succeed on their own unique, irregular path.
- Courage: choose courage over comfort, and dare to engage in difficult conversations and decisions (opinions will not always be supported, but not speaking up is not an option).
- Detailed thinkers: ambitious, free-thinking with a meticulous eye for detail.

> Be yourself. Be curious.

### Behavioral questions
- How do you work with others?
- How open are you to receiving feedback?
- Tell me about a time where you made a mistake in a previous project/job.
- Describe a situation where you had to complete a task/goal, and you could achieve it.
- Give me an example of a time when you disagreed with a colleague.
- Tell me about a time when you had to provide constructive feedback to a team member.
- Other situations aligned with the previous values.
- Prepare sticky notes.

## Project

We have merchants who want to `allow customers to purchase their products on credit`. To make an accurate risk decision, we offer the merchant to integrate against our **risk assessment service**. When the customer clicks the buy button, the merchant sends a request to our risk assessment service with information about the customer and the purchase, and we respond with a decision.
It's up to the risk assessment service to keep `track of running debt per user` and `make an accurate decision` based on the information it has.

### Architecture

Create and iterate on a design for the system. As we introduce new requirements, the design will evolve.

- **Performance**: `Kibana`.
  - Use asynchronous messaging: With a pub/sub architecture, new services can easily consume the messages without any modifications to the producer.
  - Backend services might use an RPC-style messaging protocol for performance reasons.
- **Testing**
- **Monitoring**: `NewRelic`, `Splunk`.
  - Use distributed tracing: Traces should include a `correlation ID` that flows across service boundaries. A single operation may involve calls to multiple application services. If an operation fails, the correlation ID helps to pinpoint the cause of the failure.
- **Logging/Metrics**: how much detail, levels, etc.
  - Make all things observable: Captures individual events such as application state changes, errors, and exceptions.
  - Define a common schema that includes fields such as correlation ID, event name, IP address of the sender.
- **Deployment**: `Ansible`, `Terraform`, `Jenkins`, `Docker` and `Kubernetes`.
  - Treat configuration as code: Check configuration files into a version control system, so that you can track and version your changes, and roll back if needed.
  - Deploy services independently: updates can happen more quickly and safely.
- **Security**:
  - `Cross-Site Scripting (XSS)` - escape URIs.
- **Scaling (Redundancy / Consistency)**
  - Don't use a relational database for everything.
  - Consider the type of data: Put transactional data into SQL, put JSON documents into a document database, put telemetry data into a time series data base, put application logs in Elasticsearch, and put blobs in Azure Blob Storage.
  - Enforce high cohesion and loose coupling.
  - Database partitioning for availability.
  - Deploy to more than one region (Traffic Manager).
  - Use automatic failover but manual failback.
  - Include redundancy for `Traffic Manager`: Change `CNAME` records in `DNS` to point to the other traffic management service.
  - The service should encapsulate all of the domain knowledge that falls under its responsibility.
  - Use compensating transactions: A side effect of polyglot persistence is that single transaction might write data to multiple stores.
- **Database (Clusters / Sharding)**
  - Replicate databases (enable geo-replication across regions).
  - Enable geo-replication (readable replicas of your data, the database can fail over to the secondary region for writes).
- **Customer Flow (Plans for the future)**
  - Expose open interfaces: a service should expose an API with a well-defined API contract. The API should be versioned, so that you can evolve the API while maintaining backward compatibility.
  - Offload cross-cutting concerns to a separate service: Move common functionalities into its own service (authentication flow, etc).
- **Bottlenecks (Restrictions, delimit edges, Troubleshooting scenarios)**
- Prepare technical questions.

#### Questions

Key considerations:
1. Define Actors/Stackerholders.
  - Merchants.
  - Customers: anyone interested in purchasing their products.
  - Third party systems (sources of truth).
2. Define limitations and trade-offs.
  - Design decisions (weaknesses & strengths).
  - Number of write/read **Transactions** per month.
3. Define a score to `measure the level of risk` by analyzing `sources of truth`:
  - Analyze criminal records:
    - United Nations Security Council Consolidate List.
    - Federal Bureau Of Prisons.
    - Most Wanted Fugitives by the DEA/FBI.
    - EU list of the most wanted.
    - Common Position Terrorist EU.
    - DSS Most Wanted - Bureau of Diplomatic Security.
    - Interpol list of the most wanted.
  - Analize pending matters with the judicial authorities.
    - Offshore Leaks Database - Officers, Intermediares, Offshore entities.
    - U.S. Security and Exchange Commission.
    - Consolidated Screening Lists.
    - OFSI Consolidated List Search (HMT Treasury List).
    - Reported in the EU financial system
  - Analyze legal background:
    - Consult financial systems to review the credit history of the subject.
    - Inter-American Development Bank.
    - Office of Foreign Assets Control.
    - World Bank Debarred Firms.
  - Analyze Professional profile:
    - Consult work history.
  - Analyze status of affiliation to the health and pension system.
  - Consult tax records with the Comptroller's Office.
4. Create a high level system design.
  - Scope (Objectives).
  - Definitions, Acronyms and Abbreviations.
  - Constraints and Assumpstions.
  - Limitations & Unknowns.
  - Out of scope.
    - DOM manipulations are expensive.
    - Support old browsers.
  - Proposal:
    - Design Patterns and Principles.
    - External Services/Dependencies.
    - Non-functional requirements (environments, secure transactions).
    - Functional requirements.
    - Define Deployment Strategy.
    - Define Risks.
  - Define an [Architecture decision record (ADR)](https://github.com/joelparkerhenderson/architecture-decision-record).
  - Diagrams:
    - **Component Diagram (Logical)**: Shows components and dependencies between them. The elements are `components`, `interfaces`, `class`, `port`, `connector`, `artifacts`, and `usages`.
    - **Deployment Diagram (Physical)**: Shows architecture of the systems deployment (distribution) of software artifacts to deployment targets. The elements are `deployment`, `artifact`, `target`, `node`, `device`, `execution environment`, `communication path`, `deployment specification`.
    - **Package Diagram**: Shows packages and relationships between the packages. The elements are `package`, `dependency`, `element import`.
    - **Use Case Diagram (High Level)**: Describe a set of actions (use cases) that some system or systems (subject) should or can perform in collaboration with one or more external users of the system (actors) to provide some observable and valuable results to the actor or other stakeholders of the system. The elements are `use case`, `actor`, `subject`, `extend`, `include`, `association`.
      - System is able to publish the information of the customers and purchase.
      - System is able to keep track of running debt per user.
      - Risk assessment service is able to send a notification informing the status of the transaction (Notification type, Action, Description).
    - **Entity Relationship Diagram:** Describe graphically a representation of an information system that shows the relationship between entities sets. In other words, ER diagrams illustrate the logical structure of the database. An ER model is composing of `Entity Type`, `Entity`, `Relationship Type`, and `Attribute Type`.


#### Resources
- [The System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Cross-Site Scripting (XSS)](https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS))

### Coding

Work together to add some additional functionality to this project.

- Risks
- Issues
- Trade-off
- Production ready
- Testing
- Prepare technical questions.

#### Questions

Key considerations:
- Constraints
  - Are there any restrictions?
  - State management (Pub-Sub, Event Sourcing, Event Bus).
- Test cases
  - Can I expect empty values (Inputs)?
  - What is the expected result (Outputs)?
- Algorithms
  - Break down the problem into logical chunks and solved them.
- Big-O time and space complexities
  - Memoization (Avoiding renders)
  - Can I try that approach?
  - How can I improve this approach?