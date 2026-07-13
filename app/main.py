from fastapi import FastAPI

from app.models import product
from app.routers import products, categories

# Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(products.router)
app.include_router(categories.router)

@app.get("/")
def root():
    return {"message": "Inventory API is running"}