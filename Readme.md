# Sample Readme Project

This project is a simple web application built with Ruby on Rails and Dockerized for development ease. It uses PostgreSQL as its database.

In this app I am getting the products data from the dummyjson api and using that I have implemented a functionality for users to share their thoughts about a specific product by adding a comment to it. I am saving the users and comments data in our database, so that it can be displayed later to other users on the product show page. A user can also edit or delete his/her comments.

## Features (Can add schema or relationships as well)

- Product: Represents a product fetched from the dummyjson API (Not storing it in our DB).
- Comment: Represents user comments. Each comment belongs to a product.
- List Products: View a list of products fetched from the dummyjson API.
- View Product: Click on a product title to go to show page.
- Add Comment to Product: Users can add comments to a specific product.

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
