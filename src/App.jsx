import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[0,0,0,0.6] flex items-center">
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
