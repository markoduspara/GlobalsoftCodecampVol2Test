import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import AddImageButton from './components/AddImageButton/AddImageButton';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageCard from './ImageCard/ImageCard';

function App() {
  return (
    <>
    <Searchbar />
    <AddImageButton />
    <ImageGrid>
      
      </ImageGrid>
    </>
  );
}

export default App;
