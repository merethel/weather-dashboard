# Weather dashboard

Interview assignment showing current weather and weather forecast for Aarhus

---

# Tech stack

## Frontend

- Next.js
- TypeScript
- CSS

## Backend

- Express
- TypeScript
- Open-Meteo API
- OpenAI API

---

# Features

- Current weather for Aarhus
- Multi-day weather forecast
- Loading and error states
- Responsive design
- Light and dark mode
- AI-generated weather assessment using OpenAI (if connection completes to server)
- Offline mock data fallback if weather API is unavailable

---

# Setup and run instructions

## 1. Clone repository

- Clone repository how you would usually do
- cd to weather-dashboard

## 2. Install dependencies

Install all dependencies for:

- root
- client
- server

```bash
npm run install:all
```

## 3. Configure environment variables

Create:

```txt
server/.env
```

Add:

```env
OPENAI_API_KEY=your_openai_api_key
```

Right now there's an .env.example with var
Key send via https://scrt.link/

## 4. Run application

From the project root:

```bash
npm run dev
```

This starts both client and surver

Run

```bash
npm run client
npm run server
```

to start seperate (to see the fallback mock data, simply run client only (but this has no ai, since ai fallback message is on backend :( ))

## 5. Open application

Frontend:

```txt
http://localhost:3000
```

Backend API:

```txt
http://localhost:3001/api/weather
```

---

# Assumptions and Trade-offs

- Location is hardcoded to Aarhus, since open-meteo.com only uses longitude and latitude, making it a bit harder to make dynamic to change. But you could use users current location, and then use these coordinates to send to backend
- User can't select number of days they want to see, but it can easily be added
- Setup is maybe a bit technical for this small setup, but it is easy to scale the app
- Tailwind would have been nice (i realised at the end)
- OpenAI service has fallback, if it doesn't work (eg. if OpenAI is down)
- Thought about making danish/english translations, but then i started doubting how to handle error code translation between frontend and backend, and then i simply chose; not to!

# Possible Improvements

- Unit and integration tests
- Handle different kind of errors, now it's only handling if no data fetched. Could be more specific
- Location search could be fun, using current location, or maybe using a map
- Mock data could have been the latest real fetched data, that could be stored locally, so it represents a more accurate forecast (if user uses app between small periods)
- timeout on loading
- Focus on accessibility, i haven't though alot about this before i was done - but can be added with eg. aria-label when toggling dark/light mode, or adding alt texts to images

# Total Time Spent

About 5-6 hours

# Project Structure

```txt
weather-dashboard/
├── client/
│   ├── src/
│   │   ├── app/            # Main page and layout
│   │   ├── components/     # Reusable UI components
│   │   ├── constants/      # App constants and units
│   │   ├── services/       # Frontend API communication
│   │   ├── styles/         # Feature styling
│   │   ├── types/          # Shared TypeScript types
│   │   └── utils/          # Formatting/helper functions
│
├── server/
│   ├── src/
│   │   ├── clients/        # External API clients (OpenAI, Open-Meteo)
│   │   ├── config/         # App configuration/constants
│   │   ├── errors/         # Custom error codes and messages (for future maintainense)
│   │   ├── mappers/        # Maps external API data into app models
│   │   ├── mocks/          # Offline fallback weather data
│   │   ├── routes/         # Express API routes
│   │   ├── services/       # Business/application logic
│   │   └── types/          # Shared TypeScript types
│   │
│   └── index.ts            # Express server entrypoint
│
└── README.md
```

# OpenAI integration flow

Example flow:

```txt
Frontend Request
      ↓
GET /client/service/weather.service.ts
      ↓
/server/routes/weather.route.ts
      ↓
/server/services/weather.service.ts
      ↓
/server/services/weather-assessment.service.ts
      ↓
/server/client/openai.client.ts
      ↓
OpenAI API
      ↓
Generated weather commentary
      ↓
Backend response
      ↓
Frontend render
```
