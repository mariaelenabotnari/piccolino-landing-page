import "./Introducere.css";
import logo from "./logo.png";
import table from "./table.png";  
import ref from "react"; 
import React, { forwardRef } from 'react';

const Introducere = forwardRef((props, ref) => {
    return (
        <div className="introducere" ref={ref}>
            <div className="statistics">
                <div className="logo-titlu">
                    <h4>Campania noastră în numere</h4>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="numbers">
                    <div className="clients">
                        <h2>1000+</h2>
                        <h4>Clienti satisfăcuți</h4>
                    </div>
                    <div className="activity">
                        <h3>4+</h3>
                        <div>ani de activare în domeniu</div>
                    </div>
                </div>
            </div>

            <div className="descriere">
                <div className="details">
                    <h2>Cine suntem noi</h2>
                    <p>Suntem PiccolinoHome - pasionați de frumusețea detaliilor care transformă o masă obișnuită într-o experiență memorabilă.</p>
                    <p>Ne dedicăm creării și furnizării de fețe de masă de excepție, care combină calitate superioară, design rafinat și funcționalitate într-un mod unic.</p>
                </div>
                <div className="image">
                    <img src={table} alt="Masa decorată" />
                </div>
            </div>
        </div>
    )
});

export default Introducere;
