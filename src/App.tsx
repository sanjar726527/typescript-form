import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";

const App = () => {
  const input = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string; color: string };
    console.log(extractedData);
  }
  return (
    <main>
      <p style={{ color: "black" }}>
        Click on the Vite and React logos to learn more
      </p>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <Input type="text" label="Color" id="color" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
};

export default App;
