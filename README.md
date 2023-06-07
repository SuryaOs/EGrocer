# EGrocer
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
    - DbContext is repository pattern
    - Dbset is unit of work. ( Yet to understand more on this )

# Challenges
1) Service Layer is addition layer which might not be required for simple application.
2) In that case, it will become harder to map Entity object to View object / vice versa.
3) We can add it in controller level, but I don't think it as a best practice as we need to keep controller clean with just HTTP statements.
4) That is the reason I have added Service Layer. we can use it for handling complex business logic, mapping objects, etc..
