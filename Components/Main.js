import React from 'react';
import Image from "./Image"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"



export default function Main() {
    
    return(
        <div className="main">
        <Image />
        <Info  />
        <About />
        <Interests />
        <Footer />
        </div>
    )
    
}
