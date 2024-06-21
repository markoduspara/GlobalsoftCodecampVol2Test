import React, { useState, FormEvent } from 'react';

interface Image {
  name: string;
  description: string;
  link: string;
  grayscale: boolean;
}

interface ImageFormProps {
  addImage: (image: Image) => void;
}

const ImageForm: React.FC<ImageFormProps> = ({ addImage }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [grayscale, setGrayscale] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addImage({ name, description, link, grayscale });
    setName('');
    setDescription('');
    setLink('');
    setGrayscale(false);
  };

  return (
    <form onSubmit={handleSubmit} className="image-form">
      <input
        type="text"
        placeholder="image name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="image description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="image link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={grayscale}
          onChange={(e) => setGrayscale(e.target.checked)}
        />
        Grayscale
      </label>
      <button type="submit">Add image</button>
    </form>
  );
};

export default ImageForm;
