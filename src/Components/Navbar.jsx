export default function Navbar({ dark, setDark }) {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Image Gallery</h1>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-300">
          A beautiful responsive image gallery
        </div>
        <button
          aria-pressed={dark}
          onClick={() => setDark(!dark)}
          className="flex items-center gap-2 px-3 py-1 rounded-full border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:scale-105 transition-transform"
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
