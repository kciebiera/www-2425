// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 04: CLASSES

// --- BASIC CLASS ---
class ExampleAnimal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says hi!`);
    }
}

const animalDog = new ExampleAnimal("Reksio");
animalDog.speak();

// --- INHERITANCE ---
class ExampleStudent extends ExampleAnimal {
    year: number;
    constructor(name: string, year: number) {
        super(name);
        this.year = year;
    }
    info() {
        console.log(`${this.name} is in year ${this.year}`);
    }
}

const animalStudent = new ExampleStudent("Basia", 2);
animalStudent.speak();
animalStudent.info();

// --- GENERICS ---
function genericIdentity<T>(arg: T): T {
    return arg;
}

console.log(genericIdentity<number>(123));
console.log(genericIdentity<string>("abc"));

// --- ACCESS MODIFIERS ---
class SecretBoxClass {
    private secret: string;
    constructor(secret: string) {
        this.secret = secret;
    }
    reveal() {
        return this.secret;
    }
}

const secretBox = new SecretBoxClass("42");
console.log(secretBox.reveal());