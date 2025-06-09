// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 01: BASICS

// --- VARIABLES AND TYPES ---
let basicCount: number = 5;
const basicStudentName: string = "Anna";

// --- TYPE INFERENCE ---
let basicYear = 2024; // Inferred as 'number'

// --- ARRAYS AND OBJECTS ---
let basicScores: number[] = [10, 15, 20];
let basicUser = { name: "Piotr", id: 123 };

// --- FUNCTIONS ---
function basicGreet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(basicGreet("MIMUW"));

// --- BASIC TYPES ---
let basicActive: boolean = true;
let basicAnything: any = "You can use 'any' but avoid it!";
let basicMaybeNumber: number | undefined = undefined;

// --- TRY IT OUT! ---
// - Change types and see errors
// - Add new variables with types
// - Remove a type and see if TS can infer it

// --- HOW TO RUN THIS FILE ---
// npx ts-node 01_basics.ts