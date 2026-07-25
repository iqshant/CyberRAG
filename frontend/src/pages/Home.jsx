import {
  Shield,
  Bug,
  Search,
  FileCode2,
  Database,
  Terminal,
  Paperclip,
  SendHorizontal,
} from "lucide-react";

const prompts = [
  { icon: Shield, text: "MITRE ATT&CK" },
  { icon: Bug, text: "Analyze CVE" },
  { icon: FileCode2, text: "Sigma Rules" },
  { icon: Search, text: "OWASP Top 10" },
  { icon: Terminal, text: "Splunk Query" },
  { icon: Database, text: "NIST Controls" },
];

function Home() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning 👋"
      : hour < 18
      ? "Good Afternoon 👋"
      : "Good Evening 👋";

  return (
    <main className="flex flex-1 items-center justify-center px-8">

      <div className="w-full max-w-4xl">

        {/* Greeting */}

        <div className="mb-8 text-center">

          <p className="text-sky-400 text-sm font-semibold tracking-[0.25em] uppercase">
            {greeting}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            What can I help you secure today?
          </h1>

          <p className="mt-3 text-slate-400">
            Research threats, vulnerabilities and detection rules using AI.
          </p>

        </div>

        {/* Search Box */}

        <div
          className="
          rounded-[28px]
          border
          border-slate-700
          bg-[#0B1220]/90
          backdrop-blur-2xl
          shadow-2xl
          transition-all
          duration-300
          focus-within:border-sky-400/40
          focus-within:shadow-[0_0_40px_rgba(56,189,248,0.15)]
        "
        >

          <textarea
            rows={2}
            placeholder="Explain MITRE T1059 with Sigma detection rules..."
            className="
            w-full
            resize-none
            bg-transparent
            p-6
            text-white
            outline-none
            placeholder:text-slate-500
            "
          />

          <div className="flex items-center justify-between px-5 pb-5">

            <button
              className="
              flex
              items-center
              gap-2
              rounded-xl
              px-4
              py-2
              text-slate-400
              transition
              hover:bg-slate-800
              hover:text-white
            "
            >
              <Paperclip size={18} />

              Attach

            </button>

            <button
              className="
              rounded-2xl
              bg-gradient-to-r from-[#2563EB] to-[#38BDF8]
              p-3
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-sky-400
              hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
              active:scale-95
            "
            >
              <SendHorizontal size={20} />
            </button>

          </div>

        </div>

        {/* Prompt Chips */}

        <div className="mt-8">

          <p className="mb-4 text-center text-xs uppercase tracking-[0.30em] text-slate-500">
            Popular Searches
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {prompts.map(({ icon: Icon, text }) => (

              <button
                key={text}
                className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-700
                bg-[#0B1220]/80
                px-5
                py-3
                text-sm
                text-slate-300
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:scale-105
                hover:border-sky-400/40
                hover:bg-sky-500/10
                hover:text-white
                hover:shadow-[0_0_30px_rgba(56,189,248,0.20)]
              "
              >

                <Icon
                  size={17}
                  className="
                  text-sky-400
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
                />

                {text}

              </button>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}

export default Home;