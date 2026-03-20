/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // All main pages in the root folder
    "./index.html",
    "./about.html",
    "./services.html",
    "./team.html",
    "./contact.html",
    "./blog.html",           // for the health insights / blog teaser page
    "./new-patients.html",   // optional upsell page we mentioned earlier

    // If you later create subfolders (e.g. blog posts in a /blog/ folder)
    "./**/*.html",

    // Optional: if you add any components or partials folder later
    "./partials/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#0A66C2",    // your main medical blue
        secondary: "#10B981",    // health green accent
        dark:      "#1F2937",    // dark text/headers
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      // Optional: add any custom spacing, shadows, etc. you use frequently
      boxShadow: {
        'card': '0 20px 25px -5px rgba(10, 102, 194, 0.1)',
      },
    },
  },
  plugins: [],
}