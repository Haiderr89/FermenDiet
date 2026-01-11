import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Marquee from '../components/Marquee';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <Marquee />
            <About />
            <VideoSection />
            <Newsletter />
        </>
    );
};

export default Home;
