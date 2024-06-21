import React from 'react';

interface Image {
  name: string;
  description: string;
  link: string;
  grayscale: boolean;
}

interface ImageGridProps {
  images: Image[];
  deleteImage: (index: number) => void;
  currentPage: number;
  imagesPerPage: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, deleteImage, currentPage, imagesPerPage }) => {
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="image-grid">
      {currentImages.map((image, index) => (
        <div key={index} className="image-card">
          <button className="delete-button" onClick={() => deleteImage(index)}>X</button>
          <div className="image-content">
            <img
              src={image.link}
              alt={image.name}
              style={{ filter: image.grayscale ? 'grayscale(100%)' : 'none' }}
            />
            <div className="image-info">
              <h3>{image.name}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
