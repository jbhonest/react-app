import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Navbar />
      <main>
        <h1 className="text-body-emphasis">Get started with React</h1>
        <Counters />
      </main>
    </div>
  );
}

export default App;
