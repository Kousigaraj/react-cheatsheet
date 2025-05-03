# Introduction to Vite

[Vite](https://vitejs.dev/) is a modern **build tool** and **development server** that focuses on speed and performance. It is designed to improve the development experience, offering fast hot module replacement (HMR), optimized production builds, and a much faster startup time compared to traditional bundlers like Webpack.

Key features of Vite:
- **Fast Development Server**: Instant page reloads with hot module replacement (HMR).
- **Optimized Build**: Uses **esbuild** for fast bundling during development.
- **Modern JavaScript Support**: Supports ES modules and modern JavaScript features out of the box.
- **Smaller Bundle Size**: For production builds, it uses **Rollup** to create optimized bundles.

---

## Creating a React App with Vite Using npm

Follow these steps to quickly set up a React app using **Vite**:

### 1. **Install and Create Project**

Run the following command to create a new React app using **Vite**:

```bash
npm create vite@latest my-react-app --template react
