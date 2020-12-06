import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container>
          <Weather />
        </container>
        <footer>
          <a
            href="https://github.com/gemsrc/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open Source-Code{" "}
          </a>
          by Gemma Sorce
        </footer>
      </header>
    </div>
  );
}

export default App;
