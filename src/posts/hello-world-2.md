---
title: "Markdown & LaTeX Guide - 2"
date: 2025-11-09
tags: ["Demo", "Markdown", "LaTeX"]
description: "A comprehensive demonstration of all formatting features on this site: typography, GFM tables, syntax highlighting, and complex mathematical rendering."
image: "https://images.unsplash.com/photo-1668854040739-c5958f25f8f8?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

This page serves as a test suite for the **Next.js Stardust Theme**. It demonstrates all supported Markdown syntax and LaTeX rendering capabilities.

## Typography

You can use standard Markdown formatting:
- **Bold text** for emphasis.
- *Italic text* for nuance.
- ~~Strikethrough~~ for deprecated content.
- `Inline code` for technical terms.
- [Links](https://nextjs.org) for navigation.

### Blockquotes

> "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
>
> — Carl Sagan

Nested blockquotes are also supported:
> Level 1
>> Level 2 - Indented thought

---

## Lists

### Unordered List
* Item 1
* Item 2
    * Nested Item 2.1
    * Nested Item 2.2
* Item 3

### Ordered List
1.  Step One
2.  Step Two
3.  Step Three

### Task List (GFM)
- [x] Install Next.js
- [x] Configure Sass
- [ ] Write documentation

---

## Code Highlighting

This theme uses `rehype-pretty-code` with the **Atom One Dark** theme. It supports line numbers and line highlighting.

### TypeScript Example
```typescript
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

function getUser(id: number): User {
  // Fetch user logic...
  return { id, name: "Kevin", role: "admin", isActive: true };
}
```

### CSS/SCSS Example

```scss
.bento-card {
  position: relative;
  background: var(--bg-card);
  border-radius: 32px;
  
  /* Gooey effect logic */
  &::before {
    content: "";
    position: absolute;
    box-shadow: 6px 6px 0 var(--bg-body);
  }
}
```

-----

## Tables (GFM)

Tables should have zebra-striping and borders according to our stylesheet.

| Feature | Support | Notes |
| :--- | :---: | ---: |
| GFM Tables | ✅ | `remark-gfm` required |
| Math | ✅ | `rehype-katex` required |
| Highlighting | ✅ | `rehype-pretty-code` |

-----

## HTML Elements

Since we configured `rehype-raw`, we can use raw HTML tags for things Markdown doesn't support, like keyboard keys or centering a specific div.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

<div style="text-align: center; color: #666; margin: 2rem 0; border: 1px dashed #ccc; padding: 1rem;">
This is a raw HTML div centered manually.
</div>

-----

## Mathematics (KaTeX)

We support both inline and block-level math rendering.

### Inline Math

The mass-energy equivalence formula is $E = mc^2$. Euler's identity is $e^{i\pi} + 1 = 0$.

### Block Math

A simple integral:

$$
\int_{a}^{b} x^2 \,dx = \frac{b^3 - a^3}{3}
$$

### Complex Equations

Maxwell's equations (Differential form):

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

A Matrix example:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

-----

## Media

### Image (Automatic Centering)

![Demo Image](https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

### Video Embed (YouTube)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ohB4TUhcc_0?si=-xwjrT_wlKjOHikS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>