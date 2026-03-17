# GitHub Explorer

A React + TypeScript app for searching GitHub profiles and repositories.

## Tech Stack
- React 18 + TypeScript (strict)
- Vite
- GitHub REST API

## Key decisions
- Isolated all API calls into a `services/` layer to keep components clean
- Used a discriminated union type for AsyncState (loading | success | error | idle)
  instead of multiple booleans, which avoids impossible states
- Custom hook useGitHubUser separates data fetching logic from UI components

## Running locally
npm install && npm run dev
