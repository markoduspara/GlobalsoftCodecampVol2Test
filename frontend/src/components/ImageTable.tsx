import React from 'react';

interface Image {
  name: string;
  description: string;
  link: string;
  grayscale: boolean;
}

interface ImageTableProps {
  images: Image[];
  deleteImage: (index: number) => void;
  currentPage: number;
  imagesPerPage: number;
}

const ImageTable: React.FC<ImageTableProps> = ({ images, deleteImage, currentPage, imagesPerPage }) => {
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Link</th>
          <th>Grayscale</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentImages.map((image, index) => (
          <tr key={index}>
            <td>{image.name}</td>
            <td>{image.description}</td>
            <td><a href={image.link} target="_blank" rel="noopener noreferrer">View Image</a></td>
            <td>{image.grayscale ? 'Yes' : 'No'}</td>
            <td>
              <button onClick={() => deleteImage(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ImageTable;
