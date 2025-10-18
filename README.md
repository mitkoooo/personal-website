# Personal portfolio

Minimalist website portfolio that showcases my personal projects and tells a little bit about me as a person.

[Visit the live site](https://vadimmitko.com)

![Portfolio](/public/portfolio.png)

### Project Goals

The main objective of this project is to create a fast,
lightweight, and maintainable personal portfolio that reflects
both technical skill and design sensibility. By minimizing dependencies
and focusing on static generation, the site delivers a responsive and smooth user experience.

### Tech Stack

- React
- TailwindCSS
- MDX
- TypeScript
- Nextjs

### Features

- **Project Ladder Component:** The home page uses a custom compound component pattern to display
  projects in a modular and maintainable way.

- **MDX-Powered Content:** All project and “About” pages are written in MDX to create a clean,
  blog-style reading experience.

- **Static Pages:** The majority of pages are statically generated to provide faster initial load times
  and improved performance.

- **Custom Dark Mode:** Dark mode is implemented without external dependencies,
  reducing the JavaScript bundle size and improving loading speed.

### Getting Started

To run this project locally:

````bash
# Clone the repository
git clone https://github.com/mitkoooo/personal-website.git

# Navigate into the project directory
cd personal-website

# Install dependencies
bun install

# Start the development server
bun run dev
````

### License

This project is licensed under the MIT License.
