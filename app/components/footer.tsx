export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-600 border-t border-gray-100 bg-white">
      <div className="flex justify-center gap-6 mb-3 text-sm uppercase tracking-wide">
        <a href="https://www.facebook.com/jovvenmatugas" className="hover:text-slate-900 transition">Facebook</a>
        <a href="https://github.com/01joven" className="hover:text-slate-900 transition">GitHub</a>
      </div>
      <p className="text-xs text-slate-400">© {new Date().getFullYear()} Joven Matugas. All rights reserved.</p>
    </footer>
  )
}