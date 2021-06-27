import React,{useEffect} from 'react';
import Navbar from '../Navbar';

const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <div>
            <Navbar/>
            <h1>This is about us page</h1>
            
        </div>
    );
}

export default AboutUs