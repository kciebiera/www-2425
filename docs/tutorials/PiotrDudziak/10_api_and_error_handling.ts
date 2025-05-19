// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 10: API TYPES & ERROR HANDLING

// --- API RESPONSE TYPES ---
type ApiUser = {
    id: number;
    name: string;
    isStudent: boolean;
};

async function fetchApiUser(id: number): Promise<ApiUser> {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user!");
    return res.json();
}

// --- VALIDATION ON UNKNOWN DATA (Zod example) ---
import { z } from "zod";
const ApiUserSchema = z.object({
    id: z.number(),
    name: z.string(),
    isStudent: z.boolean(),
});
type SafeApiUser = z.infer<typeof ApiUserSchema>;

async function fetchAndValidateApiUser(id: number): Promise<SafeApiUser> {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    return ApiUserSchema.parse(data);
}

// --- ERROR HANDLING PATTERNS ---
async function fetchApiUserWithCatch() {
    try {
        const apiUser = await fetchApiUser(1);
        console.log(apiUser.name);
    } catch (e) {
        if (e instanceof Error) {
            console.error("Error:", e.message);
        }
    }
}

// --- ERROR TYPE NARROWING ---
function handleApiError(e: unknown) {
    if (e instanceof Error) {
        console.error(e.stack);
    } else {
        console.error("Unknown error", e);
    }
}

// --- RETURNING RESULT TYPES INSTEAD OF THROWING ---
type ApiResult<T> = { ok: true; value: T } | { ok: false; error: string };

async function fetchApiUserWithResult(id: number): Promise<ApiResult<ApiUser>> {
    try {
        const apiUser = await fetchApiUser(id);
        return { ok: true, value: apiUser };
    } catch (e) {
        return { ok: false, error: (e instanceof Error ? e.message : "Unknown error") };
    }
}