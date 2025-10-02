import { useEffect } from "react";

export default function Modal({ open, image, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-w-4xl w-full mx-auto rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:scale-105 transition-transform"
          aria-label="Close image"
        >
          ✕
        </button>

        <div className="flex items-center justify-center">
          <button onClick={onPrev} className="p-4 hidden md:block">◀</button>
          <img src={image.src} alt={image.alt} className="max-h-[80vh] w-auto object-contain transition-transform duration-300" />
          <button onClick={onNext} className="p-4 hidden md:block">▶</button>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800">
          <p className="text-center text-sm text-gray-700 dark:text-gray-200">{image.caption}</p>
        </div>
      </div>
    </div>
  );
}
