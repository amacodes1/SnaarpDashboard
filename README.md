# Snaarp Dashboard

A responsive admin dashboard UI built with **React + TypeScript + Vite** and styled with **Tailwind CSS**. It includes reusable UI components, interactive charts (Chart.js), and a real map (Leaflet/OpenStreetMap).

## Features

- **Mobile responsive layout**
  - Collapsible **mobile sidebar drawer** (hamburger in the top navbar)
  - Cards/grids/table sections stack cleanly on small screens
- **Reusable UI primitives**
  - Card components: `Card`, `CardHeader`, `CardContent`, `CardTitle`
  - Generic reusable `Table` component with typed columns
- **Charts** (Chart.js via `react-chartjs-2`)
  - Bar/line toggle charts
  - Custom external tooltip (per-month hover) for “Total Email”
- **Active Users map**
  - Leaflet map with OpenStreetMap tiles and markers

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Chart.js** + `react-chartjs-2`
- **Leaflet**
- **ESLint**

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or yarn/pnpm if you prefer; this repo currently uses npm scripts)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

From `package.json`:

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview the build output
- `npm run lint` — run ESLint

## Project Structure

High-level layout:

```text
src/
	App.tsx                      # App shell (sidebar + top nav + main)
	main.tsx                     # React entry
	index.css                    # Tailwind + base styles
	components/
		dashboard/
			DashboardLayout.tsx      # Main dashboard widget layout
			Charts.tsx               # Chart components (Chart.js)
			ActiveUsersMap.tsx       # Leaflet map component
      StatCard.tsx
			sections/
				CloudNetwork.tsx
				DeviceManagement.tsx
				ProductivityReport.tsx
				Tables.tsx
		layout/
			Sidebar.tsx
			TopNav.tsx
		ui/
			Button.tsx
			Card.tsx
			ProgressBar.tsx
			SectionHeader.tsx
			Table.tsx
	lib/
		utils.ts                   # `cn` helper (clsx + tailwind-merge)
	types/
		leaflet.d.ts               # Leaflet module shim
	vite-env.d.ts                # Vite + image module declarations
```

## Responsiveness Notes

- The **sidebar becomes a drawer** on small screens.
  - Hamburger button lives in `TopNav`.
  - Drawer state is managed in `App.tsx`.
- Tables are wrapped in an `overflow-x-auto` container (in the shared `Table` component).
- Sections that previously forced fixed splits (like map + list) now stack on mobile.

## Common Issues / Troubleshooting

### Map tiles or markers not visible

- Ensure Leaflet CSS is included. This project imports it in `src/components/dashboard/ActiveUsersMap.tsx`.
- If you see missing marker icons in some Leaflet setups, you may need to configure Leaflet’s default icon assets. (This project currently uses custom `divIcon` markers to avoid that problem.)

### ESLint complains about inline styles

Some files currently use inline `style={...}` (for example, sizing or transforms). If your ESLint configuration disallows inline styles, refactor those to Tailwind classes or CSS files.

### Windows path / terminal tips

From the project root:

```bash
npm install
npm run dev
```
