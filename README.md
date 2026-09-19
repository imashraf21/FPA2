# MovieHub

A lightweight movie browsing app built with React and Vite, using the OMDb API for movie data. Users can browse a curated list of popular titles, search for movies by name, and view full details in a modal.

## Features

- **Home Page** — Hero banner with a "Browse Movies" call-to-action.
- **Movies Page** — Grid of movie cards showing poster, title, rating, and a short summary.
- **Search** — Search bar to look up movies by title via the OMDb API.
- **Movie Detail Modal** — Clicking a card opens a modal with the poster, title, IMDb rating, release year, and full plot overview. Closes via the Close button, an outside click, or the Escape key.
- **Persistent Navbar & Footer** — Navigation between Home and Movies, with a footer showing the copyright notice.
- **Responsive Layout** — Grid and components adapt to different screen sizes.

## Tech Stack & Packages

| Package                                      | Purpose                                           |
| -------------------------------------------- | ------------------------------------------------- |
| [Vite](https://vitejs.dev/)                  | Build tool and dev server                         |
| [React](https://react.dev/)                  | UI library for building components                |
| [React DOM](https://react.dev/)              | React renderer for the browser                    |
| [React Router DOM](https://reactrouter.com/) | Client-side routing between Home and Movies pages |

No UI framework or CSS library is used — all styling is plain CSS, scoped per component/page.

## Data Source: OMDb API

The app uses the [OMDb API](https://www.omdbapi.com/) exclusively. Two endpoints are used:

- **Lookup by IMDb ID** (`i=`) — returns full details for a single movie (title, year, poster, IMDb rating, plot).
- **Search by title** (`s=`) — returns a lightweight list of matches (title, year, imdbID, poster) for a given query, with no rating or plot.

OMDb does not provide a "popular" or "trending" movies list, so the app's default Movies page view is populated by fetching full details for a fixed, curated set of well-known IMDb IDs (see `FEATURED_IMDB_IDS` in `src/services/omdb.js`). Search results additionally fetch full details per match, since the search endpoint alone doesn't return rating or plot data.

## Project Structure

```
movie-app/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── main.jsx              # App entry point, wraps App in BrowserRouter
    ├── App.jsx               # Root layout: Navbar + Routes + Footer
    ├── App.css
    ├── index.css             # Global styles
    ├── services/
    │   └── omdb.js           # All OMDb API calls (fetch by ID, search by title)
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── Card.jsx / .css
    │   └── Modal.jsx / .css
    └── pages/
        ├── Home.jsx / .css   # Hero banner with "Browse Movies" button
        └── Movies.jsx / .css # Search bar + movie grid + modal wiring
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js) / [Bun](https://bun.sh/)
- A free OMDb API key

## Setup & Installation

1. **Install dependencies**

    ```bash
    npm install
    ```

    > Using Bun? Run `bun install` instead.

2. **Get an OMDb API key**
   Register at [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and activate the key via the confirmation email.

3. **Configure environment variables**
   Copy the example file and add your key:
    ```bash
    cp .env.example .env
    ```
    ```env
    VITE_OMDB_API_KEY=your_actual_key_here
    ```

## Running the App (Development)

```bash
npm run dev
```

> Using Bun? Run `bun run dev` instead.

This starts the Vite dev server with hot module reloading. Open the URL printed in the terminal (typically `http://localhost:5173`).

## Building for Production

```bash
npm run build
```

> Using Bun? Run `bun run build` instead.

This generates an optimized, production-ready bundle in the `dist/` folder.

## Previewing the Production Build

```bash
npm run preview
```

> Using Bun? Run `bun run preview` instead.

Serves the contents of `dist/` locally so you can verify the production build before deploying.

## Environment Variables

| Variable            | Description                                      |
| ------------------- | ------------------------------------------------ |
| `VITE_OMDB_API_KEY` | Your OMDb API key, required for all API requests |

## Known Limitations

- OMDb has no endpoint for popular, trending, or random movies — the default list is a fixed set of IMDb IDs rather than a live "popular" feed.
- OMDb provides only a poster image per movie, not a separate backdrop/banner image, so the modal displays the poster in place of a wide banner.
- Search results require one extra API call per match to fetch rating and plot, since OMDb's search endpoint omits those fields.
