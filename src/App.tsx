import { useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  const [name, setName] = useState("");

  return (
    <main>
      <h1>Huma Volve React Training</h1>

      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={name}
        onChange={setName}
      />

      <p>Hello, {name || "Guest"}!</p>

      <Button
        text="Say Hello"
        onClick={() => alert(`Hello, ${name || "Guest"}!`)}
      />

      <Button text="Disabled Button" disabled />
    </main>
  );
}

export default App;