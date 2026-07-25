import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[180px]" />

      </div>

      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        <Home />

      </div>

    </div>
  );
}

export default App;
