import { Paperclip, SendHorizontal } from "lucide-react";

function ChatInput() {
  return (
    <div className="px-8 pb-8">

      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-2xl">

        <textarea
          rows="2"
          placeholder="Explain MITRE T1059 with Sigma detection rules..."
          className="w-full resize-none bg-transparent px-4 py-3 text-white placeholder:text-slate-500 outline-none"
        />

        <div className="mt-2 flex items-center justify-between">

          <button className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-slate-300 transition hover:bg-white/10">

            <Paperclip size={18} />

            Attach

          </button>

          <button className="rounded-2xl bg-cyan-500 p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400">

            <SendHorizontal size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default ChatInput;