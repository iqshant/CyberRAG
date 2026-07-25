import {
  Plus,
  MessageSquare,
  Shield,
  Bug,
  BookOpen,
  Settings,
  ChevronRight,
} from "lucide-react";

const recentChats = [
  "MITRE T1059",
  "PowerShell Detection",
  "CVE-2025-1234",
  "OWASP SQL Injection",
];

const knowledge = [
  { icon: Shield, title: "MITRE ATT&CK" },
  { icon: Bug, title: "CVEs Database" },
  { icon: BookOpen, title: "OWASP & NIST" },
];

function Sidebar() {
  return (
    <aside
      className="
      ml-4
      mt-3
      mb-3
      flex
      w-64
      flex-col
      rounded-3xl
      border
      border-slate-700/70
      bg-[#0B1220]/80
      backdrop-blur-2xl
      shadow-[0_0_50px_rgba(0,0,0,0.35)]
      p-5
    "
    >
      {/* New Chat */}

      <button
  className="
  group
  relative
  overflow-hidden
  flex items-center justify-center gap-2
  rounded-2xl
  bg-gradient-to-r
  from-[#2563EB]
  via-[#3B82F6]
  to-[#38BDF8]
  py-3
  font-medium
  text-white
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-[0_0_35px_rgba(59,130,246,0.55)]
"
>
  <span
    className="
    absolute
    inset-0
    -translate-x-full
    skew-x-12
    bg-gradient-to-r
    from-transparent
    via-white/20
    to-transparent
    transition-transform
    duration-700
    group-hover:translate-x-full
    "
  />

  <Plus size={18} />
  <span className="relative">New Chat</span>
</button>

      {/* Recent */}

      <div className="mt-8">

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500">
          Recent
        </p>

        <div className="space-y-2">

          {recentChats.map((chat, index) => (

            <button
              key={chat}
              className={`
              group
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3
              py-3
              text-sm
              transition-all
              duration-300

              ${
                index === 0
                  ? "bg-sky-500/10 text-white border border-sky-400/20"
                  : "text-slate-400 hover:bg-slate-800/70 hover:text-white"
              }
            `}
            >
              <div className="flex items-center gap-3">

                <MessageSquare size={16} />

                <span className="truncate">
                  {chat}
                </span>

              </div>

              <ChevronRight
                size={15}
                className="opacity-0 transition group-hover:opacity-100"
              />

            </button>

          ))}

        </div>

      </div>

      {/* Knowledge */}

      <div className="mt-8">

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500">
          Knowledge
        </p>

        <div className="space-y-2">

          {knowledge.map(({ icon: Icon, title }) => (

            <button
              key={title}
              className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              text-slate-400
              transition-all
              duration-300
              hover:bg-slate-800/70
              hover:text-white
            "
            >
              <Icon
                size={17}
                className="text-sky-400"
              />

              {title}

            </button>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="mt-auto border-t border-slate-700 pt-5">

        <button
          className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-3
          py-3
          text-slate-400
          transition-all
          duration-300
          hover:bg-slate-800/70
          hover:text-white
        "
        >
          <Settings size={17} />

          Settings

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;