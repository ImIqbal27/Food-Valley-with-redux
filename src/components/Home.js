import React from 'react';
import Cards from './Cards';
import CarouselUI from './CarouselUI';
import FAQ from './FAQ';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <CarouselUI></CarouselUI>
            <Cards></Cards>
            <FAQ></FAQ>

        </div>
    );
};

export default Home;