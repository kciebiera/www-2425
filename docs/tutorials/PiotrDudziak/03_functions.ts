// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 03: FUNCTIONS

// --- REGULAR FUNCTIONS ---
function sumNumbers(a: number, b: number): number {
    return a + b;
}

// --- ARROW FUNCTIONS ---
const multiplyNumbers = (x: number, y: number): number => x * y;

// --- DEFAULT PARAMETERS ---
function greetPerson(name: string = "student") {
    return `Hi, ${name}!`;
}

// --- OPTIONAL PARAMETERS ---
function power(x: number, y?: number): number {
    return Math.pow(x, y ?? 2);
}

// --- CALLBACK FUNCTIONS ---
function applyFunction(a: number, b: number, op: (x: number, y: number) => number): number {
    return op(a, b);
}

console.log(applyFunction(2, 3, sumNumbers));      // 5
console.log(applyFunction(2, 3, multiplyNumbers)); // 6

// --- EXPLORE ---
// - Try calling greetPerson() with and without a name.
// - Call power(4) and power(4,3).