# Next.js Stardust Theme

<img width="2740" height="1702" alt="www clckkkkk site_1" src="https://github.com/user-attachments/assets/e8f00d6a-07a4-4700-82f5-7245e8d390c0" />

> A minimal, high-performance personal page and blog theme built with **Next.js App Router** and **Sass**.

## ✨ Features

Stardust is not just another blog template. It's focusing on performance and aesthetic details.

### 🎨 Design & UI
* **Bento Grid Layout**: A responsive, grid-based homepage that adapts gracefully from desktop to mobile. Automatically display the three latest posts on the homepage.
* **Gooey CSS Effects**: Unique "inverted border-radius" buttons created purely with CSS box-shadows (Zero JS).
* **Pure SCSS**: No Tailwind. Hand-crafted, modular Sass for complete control over the design system.

### ⚡ Technical Highlights
* **Next.js App Router**: Fully leveraging React Server Components (RSC) for lightning-fast initial page loads.
* **Zero-JS Animations**: Reading progress bars and scroll animations powered by the native CSS `animation-timeline` API.
* **Server-Side Fetching**: GitHub repository stats (Stars/Forks) and Unsplash hero images are fetched on the server—no client-side layout shifts.
* **SEO Optimized**: Automatic `rss.xml` generation, and semantic HTML structure.

### 📝 Content Experience
* **Markdown & MDX**: Write posts in standard Markdown with Frontmatter.
* **Syntax Highlighting**: Powered by `rehype-pretty-code` (Shiki) with line numbers, highlighting, and the **Atom One Dark** theme.
* **Mathematics**: Full LaTeX support via `rehype-katex` for rendering complex equations ($E=mc^2$).
* **GFM Support**: GitHub Flavored Markdown support (Tables, Task lists, Strikethrough).
* **Comments**: Integrated **Giscus** (GitHub Discussions) for a lightweight, database-free comment system.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+
* pnpm (recommended), npm, or yarn

### Installation

1.  **Fork on GitHub and Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/homepage.git](https://github.com/yourusername/homepage.git)
    cd homepage
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables**
    Copy the example env file:
    ```bash
    cp .env.example .env.local
    ```
    Then open `.env.local` and add your keys (optional, but recommended for full features):
    ```bash
    # Unsplash API (For random homepage hero image in the selected collection)
    UNSPLASH_ACCESS_KEY=your_access_key
    UNSPLASH_COLLECTION_ID=your_collection_id
    ```

4.  **Run Development Server**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view your site.

---

## ⚙️ Configuration

Stardust is designed to be easily configurable. You don't need to dig into the component code to change basic settings.

### 1. Site Metadata (`config/site.ts`)
Edit this file to update your name, links, and Giscus configuration.

```typescript
export const siteConfig = {
  title: "Next.js Stardust Theme",
  author: "Kevin Zhong",
  handle: "@CLCKKKKK",
  social: {
    github: "[https://github.com/](https://github.com/...)",
    // ...
  },
  giscus: { // Please refer to giscus config site for more details
    repo: "username/repo",
    repoId: "...",
    category: "Announcements",
    categoryId: "...",
  }
};
````

### 2\. Projects (`app/portfolio/page.tsx`)

Currently, projects are defined in the `PROJECTS_CONFIG` array within the Portfolio page. You can modify the list to showcase your own work. If you set `platform: 'github'`, the theme will automatically fetch Star/Fork counts and description from the repo(url) on GitHub if left blank.

### 3\. Writing Posts

Add your Markdown files to `src/posts/`.

Frontmatter format:

```yaml
---
title: "Hello World"
date: "2025-12-01"
tags: ["Life", "Coding"]
description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
image: "[https://images.unsplash.com/](https://images.unsplash.com/...)"
---
```

-----

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Sass (SCSS)](https://sass-lang.com/)
* **Content**: [Gray-matter](https://github.com/jonschlinkert/gray-matter) & [Remark](https://github.com/remarkjs/remark) ecosystem
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
* **Deployment**: [Vercel](https://vercel.com)

-----

## 📄 License

This project is open source and available under the [MIT License](https://github.com/CLCK0622/Next.js-Stardust/blob/main/LICENSE).
