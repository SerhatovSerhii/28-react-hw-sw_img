import { useState } from 'react'
import { images } from './utils/constants'
import './App.css'



function App() {
  const [image, setImage] = useState(0)
  const openImage = (imageSrc) => {
    setImage(imageSrc);
  };

  const closeImage = () => {
    setImage(0);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => openImage(image)}
          />
        ))}
      </div>
      {image && (
        <div onClick={closeImage}>
          <img src={image} alt="" />
        </div>
      )}
    </div>
  );
  
}

export default App
