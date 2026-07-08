# Inventory Management API

A backend API project for managing inventory products, built with FastAPI, PostgreSQL, and SQLAlchemy.

This project is part of my backend development learning portfolio. The goal is to understand how a real backend system is structured, including API design, database integration, CRUD operations, and clean project organization.

## Tech Stack

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pydantic
- Docker PostgreSQL
- Uvicorn

## Current Features

### Product Management

- Create product
- Get all products
- Get product by ID
- Update product
- Soft delete product
- Search products by name or description
- Filter products by price range
- Filter low-stock products

## API Endpoints

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all active products |
| GET | `/products/{product_id}` | Get product by ID |
| POST | `/products` | Create a new product |
| PUT | `/products/{product_id}` | Update product |
| DELETE | `/products/{product_id}` | Soft delete product |

### Product Search & Filters

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products?search=cable` | Search products by name or description |
| GET | `/products?min_price=100&max_price=500` | Filter products by price range |
| GET | `/products?low_stock=true` | Get products with stock less than or equal to 5 |

## Project Structure

```text
app/
├── main.py
├── database.py
├── models/
│   └── product.py
├── routers/
│   └── products.py
├── schemas/
│   └── product.py
└── services/
    └── product_service.py
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/pongthornbo/inventory-management-api.git
cd inventory-management-api
```

### 2. Create and activate virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Start PostgreSQL and pgAdmin with Docker

```bash
docker compose up -d
```

This will start:

* PostgreSQL on port 5432
* pgAdmin on port 5050

### 5. Run the FastAPI server

```bash
uvicorn app.main:app --reload
```

### 6. Open API documentation

```text
http://127.0.0.1:8000/docs
```

## Database Configuration

The project currently uses PostgreSQL with the following local database URL:

```text
postgresql://postgres:postgres@localhost:5432/inventory_db
```

The PostgreSQL database is started using Docker Compose.

## Notes

This project is currently under development as part of my backend learning portfolio. Current features focus on Product Management, including CRUD operations, search, filtering, and soft delete.