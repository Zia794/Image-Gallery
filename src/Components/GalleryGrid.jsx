import ImageCard from "./ImageCard";

export default function GalleryGrid({ images, onOpen }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
