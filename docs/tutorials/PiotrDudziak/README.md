# No Bullshit Guide to TypeScript for MIMUW Students

Welcome to the most practical, hands-on TypeScript tutorial for MIMUW students.  
Every chapter is a `.ts` file you can **read**, **run**, and **edit**.  
**No fluff**—just the stuff you’ll actually use.

---

## How to get started

1. **Clone this repo.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
   _After running `npm install`, you might see `npm fund`—this is just info about open source support; you can ignore it._

3. **(Optional) API validation:**  
   If you want to use [Zod](https://github.com/colinhacks/zod) for API data validation:
   ```bash
   npm install zod
   ```
   If not, comment out or remove the Zod section in `10_api_and_error_handling.ts`.

4. **(Optional) For React/JSX chapters (`09_react.tsx`):**
   - **Install React and types:**
     ```bash
     npm install react react-dom
     npm install --save-dev @types/react @types/react-dom
     ```
   - **Make sure your TypeScript is up to date:**
     ```bash
     npm install --save-dev typescript@latest
     ```
   - **Update your `tsconfig.json` (`compilerOptions` section):**
     ```json
     {
       "jsx": "react-jsx"
     }
     ```
      - If you use TypeScript older than 4.1, use `"jsx": "react"` instead (but upgrading is strongly recommended).

   > **You can't run React `.tsx` files with `ts-node` in Node.js.**  
   > These are meant for use in a real React project (e.g., [Vite](https://vitejs.dev/), [Create React App](https://create-react-app.dev/), [Next.js](https://nextjs.org/)).
   >
   > If you see:
   > - `TS17004: Cannot use JSX unless the '--jsx' flag is provided.`  
       >   → Add/adjust the `"jsx"` option in `tsconfig.json` as shown above.
   > - `TS2307: Cannot find module 'react' or its corresponding type declarations.`  
       >   → Make sure you installed both `react`, `react-dom`, and their `@types` packages.

5. **For modules example (Chapter 5):**
   - `05_modules.ts` **requires a separate** `mathUtils.ts` **file** in the same directory.
   - Don’t import from the same file you export in. Always import from another `.ts` file.
   - Example structure:
     ```
     ├── 05_modules.ts
     ├── mathUtils.ts
     ```

6. **Run any chapter with:**
   ```bash
   npx ts-node 01_basics.ts
   ```

---

## Debugging TypeScript

**You can debug your TypeScript code directly with [ts-node](https://typestrong.org/ts-node/) and source maps.**

- **Enable source maps** in your `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "sourceMap": true
    }
  }
  ```
- **Debug with VSCode**:  
  - Open the file you want to debug.
  - Set breakpoints as usual.
  - Use the VSCode debugger with a config like:
    ```json
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TS with ts-node",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${file}"],
      "skipFiles": ["<node_internals>/**"]
    }
    ```
  - Run with “Run and Debug”.

- **Debug in terminal:**  
  Run your file with the Node.js debugger:
  ```bash
  node --inspect-brk -r ts-node/register 03_functions.ts
  ```
  Then, attach your VSCode debugger or open `chrome://inspect` in Chrome.

---

## Chapters Overview & Prerequisites

- **`01_basics.ts`**  
  *Variables, basic types, functions, arrays, objects*  
  _Prerequisite: None. Start here if you're new to TypeScript._
- **`02_types.ts`**  
  *Type annotations, type inference, union & literal types, interfaces, type aliases*  
  _Prerequisite: Basics of TypeScript syntax._
- **`03_functions.ts`**  
  *Functions, default/optional parameters, arrow functions, callbacks*  
  _Prerequisite: Read 01 and 02._
- **`04_classes.ts`**  
  *Classes, inheritance, generics, access modifiers*  
  _Prerequisite: Basic understanding of functions and types._
- **`05_modules.ts`**  
  *How to split code into modules (requires `mathUtils.ts` in the same directory)*  
  _Prerequisite: Familiarity with functions._
- **`06_async.ts`**  
  *Promises, async/await, working with APIs*  
  _Prerequisite: JavaScript/TypeScript basics._
- **`07_tips_tricks.ts`**  
  *Useful patterns, type utilities, common gotchas*  
  _Prerequisite: Previous chapters recommended._
- **`08_realworld_examples.ts`**  
  *Tuples, enums, discriminated unions, type guards, mapped types, and more*  
  _Prerequisite: Types and functions._
- **`09_react.tsx`**  
  *How to use TypeScript with React (props, state, events, children)*  
  _Prerequisite: Familiarity with React. Requires React setup as described above._
- **`10_api_and_error_handling.ts`**  
  *API response types, validating data, robust error handling*  
  _Prerequisite: Functions and types._
- **`11_antipatterns.ts`**  
  *Anti-patterns, mistakes, and what NOT to do*  
  _Prerequisite: Read at least the basics on types and functions._

---

## FAQ

**Q: Do I need to read every file in order?**  
A: No. Jump to the topic you need, or come back when you hit problems.

**Q: How do I run code?**  
A: Use [ts-node](https://typestrong.org/ts-node/). Example:
```bash
npx ts-node 04_classes.ts
```

**Q: I get `TS2307: Cannot find module 'zod'`?**  
A: Run `npm install zod` or comment out the Zod usage.

**Q: I get `TS2307: Cannot find module 'react' or its corresponding type declarations.`?**  
A: Run:
```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom
```

**Q: I get `TS17004: Cannot use JSX unless the '--jsx' flag is provided.`?**  
A: Add/adjust `"jsx": "react-jsx"` in your `tsconfig.json`’s `"compilerOptions"`.  
If your TypeScript is older than 4.1, upgrade it or use `"jsx": "react"`.

**Q: How do modules work in Chapter 5?**  
A: Use two files: `mathUtils.ts` (exports) and `05_modules.ts` (imports/usage).  
Never import from the same file you export in.

**Q: TypeScript can't find my module or import path?**  
A: Double-check your import paths (relative, such as `./mathUtils`).  
If you move files around, update the import paths accordingly.  
If using custom paths, set up `baseUrl` and `paths` in your `tsconfig.json`.

**Q: My code changes aren't showing up?**  
A: If you’re running compiled JS, make sure to re-run `tsc` or use `ts-node` directly on the TypeScript file to see changes instantly.

**Q: How do I debug TypeScript code?**  
A: See the “Debugging TypeScript” section above for using source maps and debugging with VSCode or Node.js.

**Q: Why does my import look like it works in VSCode, but fails in the terminal?**  
A: VSCode may resolve modules differently.  
Always use relative paths unless you’ve set up custom module resolution in `tsconfig.json`.

---

## Troubleshooting Module Resolution

- Always use **relative imports** like `import { add } from './mathUtils'`
- If you want to use non-relative imports, add to your `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "*": ["*", "src/*"]
      }
    }
  }
  ```
- Run `npx tsc --traceResolution` to debug how TypeScript resolves your imports.

---
