Tet# EGrocer
An E-Commerce Web API for Grocery Products where vendors can add, view, edit and delete their products.

# Tech
1) .NET 7 Web API
2) 3-Tier Architecture
3) Generic Repository Pattern with Unit Of Work + Service Layer ( to Act as middleware between controller and dal)

# Research 
1) What is Repository Pattern ?
     - It creates an abstraction layer between DAL/Infrastucture and Business (Services/Controllers/Domain).
2) What are type ?
    - Non-Generic - One Repository per Entity
    - Generic - Generic Repository all Entities
3) What is Unit of work ?
    - It refers to single transaction ( single dbContext Instance ) that involves multiple operations of CRUD.
    - So, even one operation fails, it reverts the transaction.
    - It avoids database incosistency
4) It seems Microsoft had announced that EF Core is already a combination of Repository with Unit of Work.
    - DbContext is UoW
    - Dbset is repository. ( Yet to understand more on this )

# Challenges
1) Service Layer is addition layer which might not be required for simple application.
2) In that case, it will become harder to map Entity object to View object / vice versa.
3) We can add it in controller level, but I don't think it as a best practice as we need to keep controller clean with just HTTP statements.
4) That is the reason I have added Service Layer. we can use it for handling complex business logic, mapping objects, etc..
5) While configuring Identity Server with AddIdentityCore, SignInManager was throwing dependency exception, so changed it to AddIdentity.

# .NET Current Features
1) Entity Framework Core 7
2) SQL Server
3) Code First Approach
4) Global Exception Handling Middleware
5) Tried to keep clean code
6) JWT Authentication with IdentityDb
7) Database Transaction
# Angular Current Features
1) Toggling service based on environment
2) Feature Modules - Lazy Loading
3) Reactive Programming
# Problems Faced in Angular
1) I imported ProductModule and CategoryModule while creating Parent Module (Product-Category), but when I added app-category Selector component in P-C page, it threw component is not known element. (The reason for this is that I have not exported components from the respective modules (categoryComponent in category module).
# Clarifications in Angular
1) Modules for Category and Product are not required because we are eagerly loading it in Parent Module (P-C). However, I have added so that it will adhere to the Single Responsibility Design (SRD). I'm not sure which is the best practise right now.
2) I have added IProduct Interface in HTTP Get Calls, but I can see there are additional properties in the response that are not declared in IProduct interface. Shouln't it prevent it ? Why it is not doing ?
# Features Planned 
1) JWT Role based Authorization
# Optional
1) Logging with Seri Log
2) Azure App Configuration/Key vault integration
3) SignalR
4) CI pipeline to build and push docker image to any registries (probably ACR or any other free registries)
5) Azure Container Instance / K8s with helm chart
