# ALX Listing App

[Live Demo](https://vercel.com/olayenikanmichael-devs-projects/alx-listing-app-deployed/6gv8GyXAEvVfK1GPZw3AsUZk6uRv)

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Folder Structure](#folder-structure)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Contributing](#contributing)
* [License](#license)

---
listing app
## Overview

ALX Listing App is a modern real estate listing application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. The app allows users to browse, view details, and explore properties in a clean and responsive interface.

It integrates **API data fetching**, **client-side rendering**, and **fully typed components** to provide a robust and scalable solution.

---

## Features

* Browse a list of properties displayed in a responsive grid.
* View detailed property information, including address, amenities, rating, and pricing.
* Fully typed with **TypeScript** to ensure type safety.
* Responsive design using **Tailwind CSS**.
* API fetching with **Axios**.
* Error handling and loading states for better UX.

---

## Technologies Used

* [Next.js 16 (Turbopack)](https://nextjs.org/) – React framework with SSR and static site generation
* [TypeScript](https://www.typescriptlang.org/) – Type safety and autocompletion
* [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
* [Axios](https://axios-http.com/) – API client for fetching property data
* [Vercel](https://vercel.com/) – Deployment platform

---

## Folder Structure

```
src/
 ├─ constants/
 │   └─ index.ts        # Types and sample property data
 ├─ components/
 │   └─ property/
 │       ├─ PropertyCard.tsx
 │       └─ PropertyDetail.tsx
 ├─ pages/
 │   ├─ index.tsx       # Home page listing properties
 │   └─ properties/
 │       └─ [id].tsx    # Property detail page
 └─ lib/
     └─ api.ts          # Axios API configuration
```

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/olayenikanmichael-Dev/alx-listing-app-deployed.git
cd alx-listing-app-deployed
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

* Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Usage

* Browse properties on the home page.
* Click on a property to view detailed information.
* The app fetches data from a local API route (`/api/properties`) or external API if configured.
* Loading and error states are displayed for better user experience.

---

## API

The project uses a Next.js API route to serve property data. Sample route:

```
GET /api/properties
```

Response:

```json
[
  {
    "name": "Villa Ocean Breeze",
    "address": {
      "state": "Seminyak",
      "city": "Bali",
      "country": "Indonesia"
    },
    "rating": 4.89,
    "category": ["Luxury Villa", "Pool", "Free Parking"],
    "price": 3200,
    "offers": { "bed": "3", "shower": "3", "occupants": "4-6" },
    "image": "https://example.com/image1.jpg",
    "discount": ""
  }
]
```

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make changes and commit: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature/my-feature`.
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---