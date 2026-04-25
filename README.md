# FreelanceHub

This is a small full stack assignment app like Fiverr where users can browse freelance gigs, save them, and hire them.

## Features

- Home page with intro and browse button
- Services page with search, filters, and sorting
- Service detail page with full info
- Save and hire actions from detail page
- Dashboard with Saved and Hired tabs
- Drag and drop cards into saved/hired zones
- Modal messages for actions
- Backend API with in-memory arrays

## API Endpoints

| Method | Endpoint | What it does |
|---|---|---|
| GET | /api/services | get all services with optional query filters |
| GET | /api/services/:id | get one service by id |
| POST | /api/services | add new service |
| POST | /api/save | save service by id |
| POST | /api/hire | hire service by id |
| GET | /api/saved | get all saved services |
| GET | /api/hired | get all hired services |

## Run it

1. npm install
2. npm start
3. open http://localhost:3000
