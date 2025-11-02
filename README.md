**ALX Listing App**

The ALX Listing App is a property listing platform inspired by Airbnb’s design.  
It is built with **Next.js**, **TypeScript**, and **TailwindCSS**, and demonstrates how to create reusable UI components for property listings such as cards and buttons.  

The goal of this project is to showcase modern frontend development practices using Next.js with the Pages Router, emphasizing component reusability, responsive design, and code quality.


alx-listing-app/
│
├── components/
│ └── common/
│ ├── Button.tsx # Reusable button component for actions (e.g., Book Now, Details)
│ └── Card.tsx # Reusable card component for displaying property details
│
├── interfaces/
│ └── index.ts # TypeScript interfaces for props (CardProps, ButtonProps)
│
├── constants/
│ └── index.ts # Centralized constants (API URLs, app name, and sample property data)
│
├── public/
│ └── assets/
│ ├── images/ # Stores property images and placeholder images
│ └── icons/ # Stores SVG icons used across the app
│
├── pages/
│ ├── _app.tsx # Custom App component that imports global CSS
│ └── index.tsx # Homepage displaying sample property listings
│
├── styles/
│ └── globals.css # TailwindCSS base, components, and utilities imports
│
├── tailwind.config.js # TailwindCSS configuration file
├── tsconfig.json # TypeScript configuration
├── package.json # Project dependencies and scripts
└── README.md # Project 


---

**Features**

- Responsive UI built with TailwindCSS  
- TypeScript for type safety and maintainability  
- Reusable Card and Button components  
- Organized folder structure for scalability  
- Placeholder assets for property previews  

---

**Getting Started**

Follow these steps to set up and run the project locally.

**1. Clone the Repository**

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

---

2. Install Dependencies

Make sure you have Node.js (v16 or higher) installed.

Then run:

npm install

3. Run the Development Server
npm run dev


Visit http://localhost:3000
 to view the app in your browser.

TailwindCSS Setup Confirmation

Ensure your globals.css includes only:

@tailwind base;
@tailwind components;
@tailwind utilities;


and your tailwind.config.js includes:

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Technologies Used

Next.js (Pages Router)

TypeScript

TailwindCSS

ESLint


Author

Nkeiruka Iweala
Software Engineer | Frontend Developer
pnpm dev
# or
bun dev
```

**License**

This project is for educational and portfolio purposes under the ALX Software Engineering Program.
