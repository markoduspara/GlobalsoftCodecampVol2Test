import React, { useState } from 'react';
import ImageForm from './components/ImageForm';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';
import './App.css';

interface Image {
  name: string;
  description: string;
  link: string;
  grayscale: boolean;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const addImage = (image: Image) => {
    setImages([...images, image]);
  };

  const deleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageForm addImage={addImage} />
      <ImageGrid images={images} deleteImage={deleteImage} currentPage={currentPage} imagesPerPage={imagesPerPage} />
      <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={paginate} />
    </div>
  );
}

export default App;
