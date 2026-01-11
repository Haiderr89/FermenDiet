import React from 'react';
import { Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <section className="video-section" id="tv">
            <div className="container">
                <h2 className="section-title">FERMENDIET TV</h2>
                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/wMacCL3vNa8?si=kW-Q3VDN-JRs8Kva"
                        title="Fermendiet Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-cta">
                    <button className="btn btn-secondary btn-outline" onClick={() => window.location.href = '/TV'}>Watch More</button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
