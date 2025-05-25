import { SimpleProvider, useSimpleContext } from "../lib";

function ChildComponent() {
  const { value, setValue } = useSimpleContext();
  return (
    <div>
      <h2>Current value: {value}</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>react-simple-context Demo</h1>
      <SimpleProvider>
        <ChildComponent />
      </SimpleProvider>
    </div>
  );
}

export default App;
