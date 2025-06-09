// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 05: MODULES

// Import what you need from another file/module.
import { moduleSum, MODULE_PI } from "./mathUtils";

console.log("Sum:", moduleSum(2, 3));
console.log("PI:", MODULE_PI);

// --- TRY IT OUT ---
// - Add new exports to mathUtils.ts and try importing them here!
// - Try default vs named exports (see docs).