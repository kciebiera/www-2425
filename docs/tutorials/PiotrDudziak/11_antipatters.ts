// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 11: ANTI-PATTERNS & COMMON MISTAKES

// --- OVERUSING 'any' ---
// BAD:
let badAnyUser: any = { foo: { bar: { baz: 123 } } };
console.log(badAnyUser.foobar?.baz); // No type safety

// GOOD:
type GoodAntipatternUser = { name: string; age: number };
let goodAntipatternUser: GoodAntipatternUser = { name: "Jan", age: 21 };

// --- UNSAFE TYPE ASSERTIONS ---
// BAD:
const badAssertion = "123" as any as number;

// GOOD:
const goodConversion = Number("123");

// --- FORGETTING TO HANDLE UNDEFINED/NULL ---
// BAD:
function badPrintLength(s?: string) {
    // Throws if s is undefined
    // console.log(s.length);
}

// GOOD:
function goodPrintLength(s?: string) {
    if (s) console.log(s.length);
}

// --- USING 'object' OR '{}' TYPE FOR EVERYTHING ---
// BAD:
function processBadObject(data: {}) {}

// GOOD:
function processGoodUser(u: GoodAntipatternUser) {}

// --- CATCHING 'any' ERRORS ---
// BAD:
try { throw new Error("fail"); }
catch (e) { /* e is any here */ }

// GOOD:
try { throw new Error("fail"); }
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else {
        console.log("Unknown error", e);
    }
}

// --- DUPLICATING TYPES INSTEAD OF REUSING ---
// BAD:
type BadUser1 = { name: string; age: number };
type BadUser2 = { name: string; age: number };

// GOOD:
type GoodReusableUser = { name: string; age: number };