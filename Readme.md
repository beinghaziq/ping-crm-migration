# Ping CRM Migration

This application is a migration of PingCRM from Ruby on Rails to FastAPI, React.js, and TypeScript.

## Features

- Autentication: Jwt based authentication is added.
- Organzation: Organizationn complete CRUD is added on backend and listing and creation on frontend.
- Contacts: Contact complete CRUD is added on backend and listing on frontend, Accociated organization is also displayed.
- Search: Searching on both organization and contacts is integrated.
- Filters: Filtering on both organization and contacts data is integrated.
- Code Formatting: Black is added for code formatting

<img width="659" alt="Screenshot 2025-04-15 at 2 45 46 PM" src="https://github.com/user-attachments/assets/e4e0401d-0dbc-49fc-81d8-20ea3786fd4f" />
<img width="1226" alt="Screenshot 2025-04-15 at 2 47 14 PM" src="https://github.com/user-attachments/assets/b04d7754-db47-4d4a-9679-15a1fc3c18d6" />
<img width="1256" alt="Screenshot 2025-04-15 at 2 47 35 PM" src="https://github.com/user-attachments/assets/f8da65f4-80e5-434e-8e5d-4b4f79cb49ec" />
<img width="715" alt="Screenshot 2025-04-15 at 2 50 18 PM" src="https://github.com/user-attachments/assets/40f9a69d-119e-4652-af9d-dc0aca541a39" />
<img width="1314" alt="Screenshot 2025-04-15 at 2 51 03 PM" src="https://github.com/user-attachments/assets/04d967ea-f19f-4761-b653-d51c1659c664" />

## Demo
https://ping-crm-migration.vercel.app/

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
- PostgresQl 15 (Use `admin` for both user and password and create database with name: `ping_crm`)
- npm
- pip3

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/beinghaziq/ping-crm-migration.git
   cd repo
   ```
2. **Setup TTAB**:
   ```bash
      npm install ttab
   ```
3. **Setup ENVs**:
   ```bash
   bash scripts/setup-env.sh
   ```
4. **Setup Database and Seed**:
   ```bash
   bash scripts/setup-database.sh
   ```
5. **Run both servers**:
   ```bash
   bash scripts/run-servers.sh
   ```

## API Documentation

https://ping-crm-migration.onrender.com/docs

## Deployment
- Backend: Render
- Frontend: Vercel
- Database: supabase

## Features that are missing or nice to have
- Eslint can be added
- I have added user creation and JWT generation but it needs to be properly handled with HTTP only cookies and sessions.
- Testing using pytest and react testing library.
- Pre commit hook for formatting and tests
- Loaders and notifications
- Missing Validations
- Docker

