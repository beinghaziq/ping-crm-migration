# Ping CRM Migration

This application is a migration of PingCRM from Ruby on Rails to FastAPI, React.js, and TypeScript.

## Features (Can add schema or relationships as well)

- Autentication: Jwt based authentication is added.
- Organzation: Organizationn complete CRUD is added on backend and listing and creation on frontend.
- Contacts: Contact complete CRUD is added on backend and listing on frontend, Accociated organization is also displayed.
- Search: Searching on both organization and contacts is integrated.
- Filters: Filtering on both organization and contacts data is integrated.

`(Ideally, a demo video should be put here.)`

<img width="1409" alt="Screenshot 2023-11-09 at 7 17 12 PM" src="https://github.com/beinghaziq/awesome-readme/assets/72576839/c884958c-f0dd-4ae1-bdcc-39a888cddcb8">


# Build With

- Framework: Ruby on Rails 7.0
- Database: PostgreSQL
- API: dummyjson products API (https://dummyjson.com/docs/products)

# Getting Started

## Prerequisites

- npm

  ```bash
  npm install npm@latest -g
  ```

## Installation

1. **Clone the Repository**:
   ```bash
   git clone [<repository-url>](https://github.com/Owner/repo.git)
   cd repo
   create a .env file and copy content from .env.example to it
   ```
2. **Build the Docker Images**:
   ```bash
   docker-compose build
   ```
3. **Initialize the Database**:
   - Before starting the application for the first time, ensure that the database is set up correctly.
   ```bash
   docker-compose up -d db
   docker-compose run web rails db:create db:migrate
   ```
   - Now run the application with
   ```bash
   docker-compose up
   ```

## API Documentation

add postman or Swagger link here

## Run Tests

```bash
    rpsec
```
