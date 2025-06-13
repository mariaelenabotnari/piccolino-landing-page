import "./Galerie.css";
import img1 from "./product-1.png";
import img2 from "./product-2.png";
import img3 from "./product-3.png";
import img4 from "./product-4.png";
import React, { forwardRef, useRef, useState } from 'react';

const images = [
    { src: img1, name: "Față de masă florală" },
    { src: img2, name: "Față de masă florală" },
    { src: img3, name: "Față de masă ornamentată" },
    { src: img4, name: "Față de masă fructifictă" }
];

const Galerie = forwardRef((props, ref) => {
    const scrollRef = useRef(null);
    const [selectedImg, setSelectedImg] = useState(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleImageClick = (src) => {
        setSelectedImg(src);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    return (
        <div ref={ref} className="galerie-wrapper">
            <div className="title">
                <h2>Galeria de produse</h2>
            </div>
            <button className="scroll-left" onClick={scrollLeft}>‹</button>
            <button className="scroll-right" onClick={scrollRight}>›</button>
            <div className="galerie" ref={scrollRef}>
                {images.map((item, index) => (
                    <div key={index} className="image-container">
                        <img 
                            src={item.src} 
                            alt={`product-${index + 1}`} 
                            onClick={() => handleImageClick(item.src)} 
                        />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            {selectedImg && (
                <div className="modal-overlay" onClick={closeModal}>
                    <span className="close-button" onClick={closeModal}>&times;</span>
                    <img src={selectedImg} alt="Enlarged product" className="modal-image" />
                </div>
            )}
        </div>
    );
});

export default Galerie;