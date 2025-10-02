export default function ImageCard({ image, onOpen }) {
  return (
    <div
      className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(image.id)}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(image.id); }}
      aria-label={`Open ${image.caption}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto object-cover block transition-opacity duration-500 opacity-0 image-loaded"
        onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
      />
      <div className="p-3 bg-white dark:bg-gray-800">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {image.caption}
        </p>
      </div>
    </div>
  );
}
