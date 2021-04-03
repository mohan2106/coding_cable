import React,{useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from'../Footer/Footer';

const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <div>
            <Navbar/>
            <h1>This is about us page</h1>
            <Footer/>
        </div>
    );
}

export default AboutUs