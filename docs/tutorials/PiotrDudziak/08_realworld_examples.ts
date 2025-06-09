// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 08: REAL-WORLD EXAMPLES & PATTERNS

// --- TUPLES ---
const nameAndAgePair: [string, number] = ["age", 21];

// --- ENUMS ---
enum ExampleStatus {
    Loading,
    Success,
    Error
}
const currentStatus: ExampleStatus = ExampleStatus.Loading;

if (currentStatus === ExampleStatus.Loading) {
    console.log("Page is loading...");
}

// --- DISCRIMINATED UNIONS ---
type ExampleShape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

function shapeArea(shape: ExampleShape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}

console.log(shapeArea({ kind: "circle", radius: 10 }));
console.log(shapeArea({ kind: "square", side: 5 }));

// --- TYPE GUARDS ---
function printExampleValue(val: string | number) {
    if (typeof val === "string") {
        console.log("Uppercase:", val.toUpperCase());
    } else {
        console.log("Fixed:", val.toFixed(2));
    }
}

// --- MAPPED TYPES ---
type ExampleUser = { id: number; name: string; active: boolean };
type ReadonlyExampleUser = Readonly<ExampleUser>;
type OptionalExampleUser = Partial<ExampleUser>;

// --- UTILITY TYPES ---
type ExampleIdAndName = Pick<ExampleUser, "id" | "name">;
type ExampleNoActive = Omit<ExampleUser, "active">;
type ExampleFlags = Record<"isStudent" | "isAdmin", boolean>;

// --- INDEX SIGNATURES ---
type ExampleStringMap = { [key: string]: string };
const exampleTranslations: ExampleStringMap = {
    hello: "cześć",
    goodbye: "do widzenia"
};

// --- TYPE NARROWING WITH CUSTOM PREDICATES ---
interface ExampleCat { meow: () => void; }
interface ExampleDog { bark: () => void; }
function isExampleCat(animal: ExampleCat | ExampleDog): animal is ExampleCat {
    return (animal as ExampleCat).meow !== undefined;
}
function makeExampleSound(animal: ExampleCat | ExampleDog) {
    if (isExampleCat(animal)) animal.meow();
    else (animal as ExampleDog).bark();
}

// --- GENERIC UTILITY FUNCTION ---
function uniqueArray<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}
console.log(uniqueArray([1, 2, 2, 3]));

// --- OPTIONAL CHAINING & NULLISH COALESCING ---
type ExampleMaybeUser = { name?: string };
const maybeExampleUser: ExampleMaybeUser = {};
console.log(maybeExampleUser.name?.toUpperCase() ?? "No name");

// --- EXHAUSTIVENESS CHECKING ---
function assertExampleNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function printExampleStatus(s: ExampleStatus) {
    switch (s) {
        case ExampleStatus.Loading:
            return "Wait...";
        case ExampleStatus.Success:
            return "Yay!";
        case ExampleStatus.Error:
            return "Oops!";
        default:
            return assertExampleNever(s);
    }
}