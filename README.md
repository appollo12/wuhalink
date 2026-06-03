# WuhaLink

WuhaLink connects Ethiopian households and businesses with verified water truck suppliers — transparent prices, live availability, and direct contact via call or WhatsApp.

## WuhaLink Premium (web app)

The React + Vite frontend lives in `wuhalink-premium/wuhalink-premium/`.

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- A Firebase project (configure later — see below)

### Setup

```bash
cd wuhalink-premium/wuhalink-premium
npm install
cp firebase.example.env .env
```

Edit `.env` with your Firebase project values from the [Firebase console](https://console.firebase.google.com/).

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Features

- Bilingual UI (English / Amharic)
- Supplier search and listings with pricing and ETA
- Driver login panel and availability toggle
- Admin dashboard for driver management

## License

Private project — all rights reserved.
