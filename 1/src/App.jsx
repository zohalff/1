import Badge from "./components/Badge";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <Badge label="Course" value="React" />
      <Badge label="Week" value="1" />
      <Badge label="Topic" value="Props" />
      <Badge label="Status" value="Reusable" />
    </div>
  );
}

export default App;