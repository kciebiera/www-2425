// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 07: TIPS & TRICKS

// --- TYPE ASSERTIONS ---
let anyValue: any = "hello";
let valueLength: number = (anyValue as string).length;

// --- NON-NULL ASSERTION ---
function logStringLength(s?: string) {
    console.log(s!.length);
}
logStringLength("abc");

// --- TYPE UTILITIES ---
type Coordinate = { x: number; y: number };
type PartialCoordinate = Partial<Coordinate>;
type ReadonlyCoordinate = Readonly<Coordinate>;

// --- NARROWING TYPES ---
function printTypedId(id: number | string) {
    if (typeof id === "string") {
        console.log("String id", id.toUpperCase());
    } else {
        console.log("Number id", id.toFixed(2));
    }
}

// --- ANY vs UNKNOWN ---
let unknownValue: unknown = "maybe a string";
// let numValue: number = unknownValue; // Error!