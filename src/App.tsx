import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] justify-items-center">
      <div className="w-full max-w-4xl">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
