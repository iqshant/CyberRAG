import {
  Shield,
  Bug,
  FileCode2,
  Search,
  Database,
  Terminal,
} from "lucide-react";

function ChatWindow() {
  const prompts = [
    { icon: Shield, text: "Explain MITRE ATT&CK" },
    { icon: Bug, text: "Analyze CVE" },
    { icon: FileCode2, text: "Generate Sigma Rule" },
    { icon: Search, text: "OWASP Top 10" },
    { icon: Terminal, text: "Splunk Query" },
    { icon: Database, text: "NIST Controls" },
  ];

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning 👋"
      : hour < 18
      ? "Good Afternoon 👋"
      : "Good Evening 👋";

  return (
    <main className="flex flex-1 justify-center pt-16 px-8">

      <div className="w-full max-w-4xl">

        <div className="mb-8 text-center">

          <p className="text-cyan-400 font-medium">
            {greeting}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            What can I help you secure today?
          </h1>

          <p className="mt-3 text-slate-400">
            Search MITRE ATT&CK, CVEs, OWASP, NIST and Sigma Rules.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-3">

          {prompts.map(({ icon: Icon, text }) => (

            <button
              key={text}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} className="text-cyan-400" />

              {text}

            </button>

          ))}

        </div>

      </div>

    </main>
  );
}

export default ChatWindow;