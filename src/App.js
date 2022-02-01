import "./App.css";
import { Header } from "./components/Header";
import { CollectionCard } from "./components/CollectionCard";

function App() {
  return (
    <div className="App">
      <Header />
      <CollectionCard id={0} name="Bandana Punk" traits={[{ value: 1 }]} />
    </div>
  );
}

export default App;
