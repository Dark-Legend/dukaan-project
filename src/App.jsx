import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[0,0,0,0.6] flex items-center\">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
