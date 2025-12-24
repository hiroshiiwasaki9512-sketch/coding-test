# React Todo App

A modern, Vite-powered React todo list that bootstraps with 15 tasks from the JSONPlaceholder API and supports creating, editing, completing, and deleting tasks with smooth UI feedback.

## Getting started

```bash
cd todo-app
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Available scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint with the provided flat config

## Features

- Fetches the first 15 todos from `https://jsonplaceholder.typicode.com/todos?_limit=15` on load
- Add new tasks with instant success feedback
- Mark tasks complete/incomplete with strikethrough styling
- Inline editing with save-on-blur, Enter-to-save, and Escape-to-cancel
- Delete tasks with a dedicated icon button
- Responsive layout styled to mirror the provided design inspiration
