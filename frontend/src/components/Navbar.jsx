import { Shield, Moon, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <header className="mx-4 mt-3 flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)]">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

          <Shield size={20} />

        </div>

        <div>

          <h1 className="text-lg font-bold tracking-tight text-white">
            CyberRAG
          </h1>

          <p className="text-[11px] text-slate-500">
            Security Research Workspace
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        <button
          className="
          rounded-xl
          border
          border-white/10
          bg-slate-900/50
          p-2
          text-slate-400
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400/30
          hover:bg-cyan-500/10
          hover:text-cyan-300
          hover:shadow-[0_0_20px_rgba(34,211,238,0.20)]
        "
        >
          <Moon size={18} />
        </button>

        <button
          className="
          rounded-xl
          border
          border-white/10
          bg-slate-900/50
          p-2
          text-slate-400
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400/30
          hover:bg-cyan-500/10
          hover:text-cyan-300
          hover:shadow-[0_0_20px_rgba(34,211,238,0.20)]
        "
        >
          <Bell size={18} />
        </button>

        <button
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          text-cyan-400
          transition-all
          duration-300
          hover:scale-105
          hover:bg-cyan-500/20
          hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
        "
        >
          <User size={18} />
        </button>

      </div>

    </header>
  );
}

export default Navbar;