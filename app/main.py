from fastapi import FastAPI
from app.api.router import router as router_api
from fastapi.staticfiles import StaticFiles


app = FastAPI()

app.mount('/static', StaticFiles(directory='app/static'), 'static')

app.include_router(router_api)