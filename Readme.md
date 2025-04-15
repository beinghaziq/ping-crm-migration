# Ping CRM Migration

This application is a migration of PingCRM from Ruby on Rails to FastAPI, React.js, and TypeScript.

## Features (Can add schema or relationships as well)

- Autentication: Jwt based authentication is added.
- Organzation: Organizationn complete CRUD is added on backend and listing and creation on frontend.
- Contacts: Contact complete CRUD is added on backend and listing on frontend, Accociated organization is also displayed.
- Search: Searching on both organization and contacts is integrated.
- Filters: Filtering on both organization and contacts data is integrated.

- Authentication
<img width="659" alt="Screenshot 2025-04-15 at 2 45 46 PM" src="https://github.com/user-attachments/assets/e4e0401d-0dbc-49fc-81d8-20ea3786fd4f" />
- Organization Listing
<img width="1226" alt="Screenshot 2025-04-15 at 2 47 14 PM" src="https://github.com/user-attachments/assets/b04d7754-db47-4d4a-9679-15a1fc3c18d6" />
- Searching
<img width="1256" alt="Screenshot 2025-04-15 at 2 47 35 PM" src="https://github.com/user-attachments/assets/f8da65f4-80e5-434e-8e5d-4b4f79cb49ec" />
- Organization Create Form
<img width="715" alt="Screenshot 2025-04-15 at 2 50 18 PM" src="https://github.com/user-attachments/assets/40f9a69d-119e-4652-af9d-dc0aca541a39" />
- Contact Listing
<img width="1314" alt="Screenshot 2025-04-15 at 2 51 03 PM" src="https://github.com/user-attachments/assets/04d967ea-f19f-4761-b653-d51c1659c664" />


# Build With
## Backend
- Framework: FastAPI
- Database: PostgreSQL

## FrontEnd
- Framework: ReactJS, Typescript
- Store: RTKQuery

# Getting Started

## Prerequisites

- Python3
- node 20
- PostgresQl 15
- npm
- pip3

## Installation

1. **Clone the Repository**:
   ```bash
   git clone [<repository-url>](https://github.com/beinghaziq/ping-crm-migration.git)
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
