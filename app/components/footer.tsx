export default function Footer() {
  return (
    <footer className="py-10 text-center text-slate-400 border-t border-slate-800 bg-slate-950/60">
      <div className="flex justify-center gap-6 mb-4 text-sm uppercase tracking-wide">
        <a href="https://www.linkedin.com/in/escartin-jameboy-a44a16397/" className="hover:text-indigo-300 transition">LinkedIn</a>
        <a href="https://www.facebook.com/lostcreeper" className="hover:text-indigo-300 transition">Facebook</a>
        <a href="https://github.com/lostcreeper10" className="hover:text-indigo-300 transition">GitHub</a>
      </div>
      <p className="text-xs text-slate-500">© 2025 Jameboy. All rights reserved.</p>
    </footer>
  );
}