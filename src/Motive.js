import "./Motive.css";
import motive from "./motive.png"; 
import React, { forwardRef } from 'react';

const Motive = forwardRef((props, ref) => {
    return (
        <>
        <h2 className="motive-title">De ce să alegi PiccolinoHome</h2>
        <div className="motive" ref={ref}>
            <div className="first-part">
                <div className="motive-2">
                    <div className="motiv">
                        <div><h3>Suport după achiziție</h3></div>
                        <div><p>Asistență rapidă pentru întrebări sau probleme (chat live, email, telefon).</p></div>
                    </div>
                    <div className="motiv">
                        <div><h3>Prețuri competitive</h3></div>
                        <div><p>Raport calitate-preț excelent, cu promoții și oferte periodice.</p></div>
                    </div>
                </div>

                <div className="calitate">
                    <div><h3>Calitate superioară</h3></div>
                    <div><p>Produse durabile, din materiale premium, cu finisaje impecabile.</p></div>
                </div>
            </div>

            <div className="second-part">
                <h3>Design divers și elegant</h3>
                <p>O gamă variată de modele (clasice, moderne, personalizate) care se potrivesc în orice decor.</p>
                <h3>Design variat și adaptabil</h3>
                <p>Colecții pentru orice gust: de la modele minimalistice la cele florale sau festive.</p>
            </div>
        </div>
        </>
    );
});

export default Motive;