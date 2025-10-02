import { useEffect, useState, useCallback } from "react";
import Navbar from "./Components/Navbar";
import GalleryGrid from "./Components/GalleryGrid";
import Modal from "./Components/Modal";
import IMAGES from "./Data/images";

export default function App() {
  const [dark, setDark] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const selectedImage = IMAGES.find((i) => i.id === selectedId) || null;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const openImage = useCallback((id) => setSelectedId(id), []);
  const closeImage = useCallback(() => setSelectedId(null), []);
  const prevImage = useCallback(() => {
    if (!selectedId) return;
    const idx = IMAGES.findIndex((i) => i.id === selectedId);
    const prev = IMAGES[(idx - 1 + IMAGES.length) % IMAGES.length];
    setSelectedId(prev.id);
  }, [selectedId]);

  const nextImage = useCallback(() => {
    if (!selectedId) return;
    const idx = IMAGES.findIndex((i) => i.id === selectedId);
    const next = IMAGES[(idx + 1) % IMAGES.length];
    setSelectedId(next.id);
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />

      <header className="py-8 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Explore stunning photos</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Click any image to enlarge. Use ← and → to navigate, Esc to close.
        </p>
      </header>

      <main>
        <GalleryGrid images={IMAGES} onOpen={openImage} />
      </main>

      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        Built with ❤️ using React + Tailwind — PhotoFlow
      </footer>

      <Modal
        open={Boolean(selectedImage)}
        image={selectedImage}
        onClose={closeImage}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
