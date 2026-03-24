# GitHub Explorer

A React + TypeScript app for searching GitHub profiles and repositories.

## Live Demo

[github-explorer-eosin-nu.vercel.app](https://github-explorer-eosin-nu.vercel.app)

## Tech Stack

- React 18 + TypeScript (strict)
- Vite + Tailwind CSS
- GitHub REST API

## Key decisions

- Isolated all API calls into a `services/` layer to keep components clean
- Used a discriminated union type for AsyncState (loading | success | error | idle)
  instead of multiple booleans, which avoids impossible states
- Custom hook useGitHubUser separates data fetching logic from UI components
- GitHubUserPreview utility type (Pick) ensures components only receive what they need

## Running locally

npm install && npm run dev
