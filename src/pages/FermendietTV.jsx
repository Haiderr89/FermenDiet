import React, { useState } from 'react';
import './FermendietTV.css';

const videoLibrary = [
    {
        id: '1',
        title: 'مقابلة في برنامج شمس البحرين على تلفزيون البحرين',
        videoId: 'AaexYz6oss4', // Placeholder ID, replace with actual fermentation videos
        thumbnail: 'https://img.youtube.com/vi/AaexYz6oss4/0.jpg'
    },
    {
        id: '2',
        title: 'مقابلة إذاعية مع إذاعة بسمة الفلسطينية',
        videoId: 'K6DEL2gDesI', // Placeholder
        thumbnail: 'https://img.youtube.com/vi/K6DEL2gDesI/0.jpg'
    },
    {
        id: '3',
        title: 'كيف نقنع الأطفال بالطعام الصحي',
        videoId: 'geEW8rNG6bI', // Placeholder
        thumbnail: 'https://img.youtube.com/vi/geEW8rNG6bI/0.jpg'
    },
    {
        id: '4',
        title: 'تجربتي مع التغذية الصحية لأطفالي',
        videoId: 'YRVDYaTgyeg', // Placeholder
        thumbnail: 'https://img.youtube.com/vi/YRVDYaTgyeg/0.jpg'
    }
];

const FermendietTV = () => {
    const [currentVideo, setCurrentVideo] = useState(videoLibrary[0]);

    return (
        <div className="tv-page">
            <div className="container">
                <div className="tv-header">
                    {/* Optional header if needed, or just spacing */}
                </div>

                <div className="main-video-container">
                    <div className="video-wrapper">
                        <iframe
                            src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1`}
                            title={currentVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h2 className="current-video-title">{currentVideo.title}</h2>
                </div>

                <div className="video-playlist">
                    {videoLibrary.map(video => (
                        <div
                            key={video.id}
                            className={`playlist-item ${currentVideo.id === video.id ? 'active' : ''}`}
                            onClick={() => setCurrentVideo(video)}
                        >
                            <div className="playlist-thumbnail">
                                <img src={video.thumbnail} alt={video.title} />
                                <div className="play-overlay">▶</div>
                            </div>
                            <h3 className="playlist-title">{video.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
                        <hr style={{ border: "none", height: "2px", backgroundColor: "#144823", width: "100%", margin: "auto", marginTop: "4rem", marginBottom: "-50px" }} />

        </div>
    );
};

export default FermendietTV;
