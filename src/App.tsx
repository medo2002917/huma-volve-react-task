import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";

const students = [
  { Name: "Ahmed", Age: 22, City: "Cairo" },
  { Name: "Mona", Age: 21, City: "Giza" },
  { Name: "Omar", Age: 23, City: "Alexandria" },
];

function App() {
  return (
    <main className="app">
      <h1>Reusable Components in React</h1>

      <section className="cards" aria-label="Example cards">
        <Card
          title="React"
          description="A JavaScript library for building user interfaces."
        >
          <Button
            text="Learn React"
            variant="primary"
            onClick={() => alert("React button clicked!")}
          />
        </Card>

        <Card
          title="TypeScript"
          description="JavaScript with static type checking."
        >
          <Button
            text="Learn TypeScript"
            variant="secondary"
            onClick={() => alert("TypeScript button clicked!")}
          />
        </Card>
      </section>

      <section aria-label="Students table">
        <h2>Students</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>
    </main>
  );
}

export default App;
