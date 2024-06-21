import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState('');

  const fetchData = () => {
    fetch("http://localhost:3000/image")
      .then((res) => res.json())
      .then((result) => setImages(result))
      .catch((err) => console.log("error"));
  };


  useEffect(() => {
      fetchData();
      console.log(images);
    })
  const handleAddImage = () => {
    fetch('http://localhost:3000/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_name: imageName,
        image_description: imageDescription,
        image_link: imageUrl,
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Slika je dodana');
        } else {
          console.error('Greska.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <input onChange={(e) => setImageName(e.target.value)} type='text' value={imageName} placeholder='image name'></input>
      <input onChange={(e) => setImageDescription(e.target.value)} type='text' value={imageDescription} placeholder='image description'></input>
      <input onChange={(e) => setImageUrl(e.target.value)} type='text' value={imageUrl} placeholder='image url'></input>
      <button onClick={handleAddImage}>Add Image</button>
      
    </div>
  );
}

export default App;
