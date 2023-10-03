import  { useState } from "react";
import "./Gallery.css";
function Gallery() {
    const images = [
      "https://via.placeholder.com/400x300?text=Image+1",
      "https://via.placeholder.com/400x300?text=Image+2",
      "https://via.placeholder.com/400x300?text=Image+3",
      "https://via.placeholder.com/400x300?text=Image+4",
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="Gallery-container centered">
        <h1 className="Gallery-heading">Gallery</h1>
        <div className="Gallery-wrapper">
          <button className="Gallery-button round left" onClick={prevImage}>
            &#9664;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="Gallery-image"
          />
          <button className="Gallery-button round right" onClick={nextImage}>
            &#9654; {/* Right arrow */}
          </button>
        </div>
      </div>
    );
  }
  
  export default Gallery;
