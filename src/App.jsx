import "./resources/styles/App.css";
import "./resources/components/Navbar";
import Navbar from "./resources/components/Navbar";
import ItemListContainer from "./resources/components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Primero, Buenos dias! Segundo Francia" />
      </header>
    </div>
  );
}

export default App;
