// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 02: TYPES

// --- TYPE ANNOTATIONS ---
let piValue: number = 3.1415;

// --- UNION TYPES ---
let typedId: number | string = 123;
typedId = "abc123";

// --- LITERAL TYPES ---
type DirectionType = "left" | "right" | "up" | "down";
let movement: DirectionType = "left";

// --- TYPE ALIASES ---
type StudentIdOrString = number | string;
let studentId: StudentIdOrString = 55;
studentId = "A17";

// --- INTERFACES ---
interface TypedStudent {
    name: string;
    year: number;
    isActive?: boolean;
}
const typedStudent1: TypedStudent = { name: "Zosia", year: 2 };
const typedStudent2: TypedStudent = { name: "Jan", year: 3, isActive: true };

// --- TYPE INFERENCE IN FUNCTIONS ---
function squareValue(x: number) {
    return x * x;
}

// --- PLAYGROUND ---
// Try making your own interfaces and types!