# NewsAppFrontend
Takes the json data from news app backend and displays on user UI.

In the project directory, you can run,

To start application:

### `npm start`

To build production ready application and share:
### `npm run build`

<!-- Frontend Image -->
cd newsappfrontend
docker build -t product-backend-image .  

Run docker-compose mannually for testing:
docker-compose up -d
docker-compose down


!-- Design Pattern used: -->

SOLID Principles for News App Frontend:

Single Responsibility Principle (SRP)

Open/Closed Principle (OCP)

Interface Segregation Principle (ISP)

Strategy Pattern: Created a common interface which is implemented by both Guardian and NY Times news service class.

<!-- Design Patterns for News App Frontend: -->

Component Pattern: To reuse availabel code and have consistent components across the application.


<!-- More features that can be build upon this application -->
Pagination: Implement pagination on the frontend to display large amounts of data in smaller, manageable chunks. 
Interactive Articles: Make the frontend more interactive by allowing users to click on articles to access a detailed view of the content. 
Improved Test Coverage: Increase backend test coverage using Behavior Driven Development (BDD) principles. 
Swagger Integration: Integrate Swagger API documentation with the application. Swagger provides a user-friendly interface for exploring and understanding the available API endpoints.
Redux: Add Redux to make persistent storage, storing current page number in store. We can dispatch actions to fetch details from common store.

