// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 06: ASYNC

// --- PROMISES ---
function asyncAddNumbers(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

asyncAddNumbers(2, 3).then(result => console.log("asyncAdd:", result));

// --- ASYNC/AWAIT ---
async function asyncDemo() {
    const r1 = await asyncAddNumbers(1, 2);
    const r2 = await asyncAddNumbers(r1, 3);
    console.log("Chained async:", r2);
}

asyncDemo();

// --- FETCHING DATA ---
async function fetchMimuwSite() {
    try {
        const res = await fetch("https://www.mimuw.edu.pl/");
        const text = await res.text();
        console.log("Fetched MIMUW homepage length:", text.length);
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

fetchMimuwSite();