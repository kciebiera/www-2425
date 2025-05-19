// No Bullshit Guide to TypeScript for MIMUW Students
// Chapter 09: REACT + TYPESCRIPT

import React, { useState } from "react";

// --- FUNCTION COMPONENT WITH PROPS ---
type HelloComponentProps = {
    name: string;
    age?: number;
};

const HelloComponent: React.FC<HelloComponentProps> = ({ name, age }) => (
    <div>
        Hello, {name}! {age && `(age: ${age})`}
    </div>
);

// --- STATE HOOKS ---
const ClickCounter: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Clicks: {count}
        </button>
    );
};

// --- EVENT HANDLING ---
const TextInput: React.FC = () => {
    const [val, setVal] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setVal(e.target.value);
    }
    return <input value={val} onChange={handleChange} />;
};

// --- CHILDREN PROP ---
type SimpleWrapperProps = { children: React.ReactNode };
const SimpleWrapper: React.FC<SimpleWrapperProps> = ({ children }) => (
    <div style={{ border: "1px solid gray" }}>{children}</div>
);

// --- USAGE EXAMPLES ---
// <HelloComponent name="Jan" age={20} />
// <ClickCounter />
// <TextInput />
// <SimpleWrapper><HelloComponent name="Zosia" /></SimpleWrapper>