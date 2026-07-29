import { Paperclip, Globe, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function GlassInput({
  value,
  onChange,
  onSubmit,
}) {
  return (
    <div className="w-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-sky-400/30 focus-within:border-sky-400/60">
      
      {/* Input */}
      <div className="flex items-center px-6 pt-5">
        <input
          value={value}
          onChange={onChange}
          placeholder="Ask about MITRE ATT&CK, CVEs, Sigma rules..."
          className="w-full bg-transparent text-lg text-white placeholder:text-slate-500 outline-none"
        />
      </div>

      {/* Bottom Toolbar */}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 px-5 py-3">

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white">
            <Paperclip size={18} />
            Attach
          </button>

          <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white">
            <Globe size={18} />
            Search Web
          </button>

        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={onSubmit}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
        >
          <ArrowUp size={20} className="text-white" />
        </motion.button>

      </div>

    </div>
  );
}