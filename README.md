# Legacy Equity Group

Marketing website for Legacy Equity Group — a Hawaii-based real estate company that buys properties for cash.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router
- **Hosting:** Vercel

## Getting Started

```sh
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Environment Variables

Copy the example env file and fill in your values:

```sh
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key from [Web3Forms](https://web3forms.com) for the contact form |

## Deployment

This project deploys to **Vercel**. Push to `main` to trigger an automatic deployment.

Environment variables must be configured in **Vercel → Project Settings → Environment Variables**.
