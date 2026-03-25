import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] justify-items-center overflow-y overflow-y-scroll relative">
      <div className="w-full max-w-5xl md:w-full lg:w-full">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
