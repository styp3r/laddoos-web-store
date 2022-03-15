import React from 'react'
import BestSellers from './BestSellers';
import Footer from './Footer';

function Home(){
    return (
        <div id = "homePage">
            <div id = "hero"></div>
            <BestSellers />
            <Footer />
        </div>);
}

export default Home;