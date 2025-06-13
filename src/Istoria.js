import "./Istoria.css";
import image_1 from "./timeline_image_1.png";
import image_2 from "./timeline_image_2.png";
import image_3 from "./timeline_image_3.png";
import React, { forwardRef } from 'react';

const Istoria = forwardRef((props, ref) => {
    return (

        <div className="timeline" ref={ref}>
            <div className="title"><h2>Istoria noastră</h2></div>
            <div className="timeline-endpoint top">2021</div>

            {/* --- Left Event --- */}
            <div className="event left">
                <div className="event-content event-content-1">
                    <div className="description">
                        <p>Piccolino Home este o afacere de suflet, fondată pe 11 noiembrie 2021, din dorința de a aduce frumusețe, funcționalitate și personalitate în casele oamenilor.</p>
                    </div>
                    <div><h4 className="year">2021</h4></div>
                </div>
                <div class="event-image event-image-left">
                    <img src={image_1} alt="A descriptive alt text for the image" class="timeline-image first-image" />
                </div>
            </div>

            {/* --- Right Event --- */}
            <div className="event right">
                <div className="event-content event-content-2">
                    <div className="description">
                        <p>Timp de peste 10 ani, fondatoarea a cusut costume pentru activități cu copii, dezvoltând un simț practic, estetic și creativ, esențial pentru ceea ce avea să devină Piccolino Home.</p>
                    </div>
                    <div><h4 className="year">2023</h4></div>
                </div>
                <div class="event-image 1 event-image-3">
                    <img src={image_2} alt="A descriptive alt text for the image" class="timeline-image second-image" />
                </div>
            </div>

            {/* --- Left Event --- */}
            <div className="event left 1">
                <div className="event-content event-content-2">
                    <div className="description">
                        <p>În prezent, Piccolino Home își diversifică treptat colecțiile, promovează consumul responsabil și aspiră să construiască o comunitate de clienți care apreciază frumusețea detaliilor și valoarea lucrului bine făcut.</p>
                    </div>
                    <div><h4 className="year">2023</h4></div>
                </div>
                <div class="event-image 2">
                    <img src={image_3} alt="A descriptive alt text for the image" class="timeline-image third-image" />
                </div>
            </div>

            <div className="timeline-endpoint bottom">2025</div>
        </div>
    );
});

export default Istoria;