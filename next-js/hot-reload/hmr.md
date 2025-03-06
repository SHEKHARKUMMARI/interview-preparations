# Hot Module Replacement

HMR (Hot Module Replacement) is a feature that allows JavaScript modules to be updated without requiring a full page reload. It works for any JavaScript module, not just React components.

1️⃣ What Are JavaScript Modules?
A module in JavaScript is any file that exports functionality, like:

React Components (.jsx / .tsx)
Utility Functions (.js / .ts)
CSS / SCSS / Stylesheets
Redux Store / Zustand / MobX State
WebAssembly (WASM) modules
GraphQL Queries
Backend APIs (in frameworks like Next.js)
HMR can replace any of these without reloading the whole page.

2️⃣ How HMR Works for JavaScript Modules?
When a module is updated:

Webpack detects the change.
It replaces only the modified module in the browser.
Other modules reuse the existing state without restarting.

3️⃣ Example: HMR in Different JavaScript Modules
✅ HMR for React Component
jsx
Copy
Edit

```
function App() {
return <h1>Hello, Next.js!</h1>;
}

export default App;
```

If you change <h1> to "Hello, World!", HMR updates only this file without a full reload.
✅ HMR for Utility Functions
js

```
export function greet(name) {
return `Hello, ${name}!`;
}
```

If you change Hello to Hi, any file importing greet() gets updated without reloading the entire app.
✅ HMR for CSS Modules

```.title {
color: blue;
}
```

If you change blue to red, HMR updates styles without refreshing the page.
