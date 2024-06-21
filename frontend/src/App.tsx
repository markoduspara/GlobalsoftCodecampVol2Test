import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Image {
  id: number;
  name: string;
  description: string;
  link: string;
  grayscale: boolean;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [newImage, setNewImage] = useState<Image>({
    id: Date.now(),
    name: '',
    description: '',
    link: '',
    grayscale: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    
    const initialImages: Image[] = [];
    setImages(initialImages);
  }, []);

  const addImage = () => {
    setImages([...images, newImage]);
    setNewImage({
      id: Date.now(),
      name: '',
      description: '',
      link: '',
      grayscale: false,
    });
  };

  const deleteImage = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const renderTable = () => {
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
          {currentItems.map((image) => (
            <tr key={image.id}>
              <td>{image.name}</td>
              <td>{image.description}</td>
              <td><a href={image.link}>{image.link}</a></td>
              <td><input type="checkbox" checked={image.grayscale} disabled /></td>
              <td><button onClick={() => deleteImage(image.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <button onClick={() => handlePageChange(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <form>
        <input type="text" placeholder="Name" value={newImage.name} onChange={(e) => setNewImage({ ...newImage, name: e.target.value })} />
        <input type="text" placeholder="Description" value={newImage.description} onChange={(e) => setNewImage({ ...newImage, description: e.target.value })} />
        <input type="text" placeholder="Link" value={newImage.link} onChange={(e) => setNewImage({ ...newImage, link: e.target.value })} />
        <input type="checkbox" checked={newImage.grayscale} onChange={(e) => setNewImage({ ...newImage, grayscale: e.target.checked })} /> Grayscale
        <button type="button" onClick={addImage}>Add Image</button>
      </form>
      {renderTable()}
      {renderPagination()}
    </div>
  );
};

export default App;