import React,{useEffect} from 'react';
import TextImageComponent from '../TextImageComponent';
import {homeObjOne} from './Data';
import Alumni from '../MentorComp/Mentor';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Pricing from '../PricingPage/Pricing';
import RoadMap from '../RoadMap/RoadMap';
import FAQs from '../FAQs/FAQs';
import BookTrial from '../BookTrial/BookTrial.js';
import Navbar from '../Navbar';


const Home = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    
    const mentor = [
        {
            img:process.env.PUBLIC_URL + '/Images/iitblogo.svg',
            text:'IIT Bombay'
        },
        {
            img:process.env.PUBLIC_URL + '/Images/iitglogo.svg',
            text:'IIT Guwahati'
        }
    ];
    const wwd=[
        {
            img:process.env.PUBLIC_URL + '/Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img: process.env.PUBLIC_URL + '/Images/math.svg',
            title:'Solve Math',
            desc:'Solve MAth for sdfh sdklf jlsdkf ldfkj dslfk dfjkdf dkfoer euryap eoqd  dfl'
        },
        {
            img: process.env.PUBLIC_URL + '/Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img: process.env.PUBLIC_URL + '/Images/math.svg',
            title:'Solve Math',
            desc:'Solve MAth for sdfh sdklf jlsdkf ldfkj dslfk dfjkdf dkfoer euryap eoqd  dfl'
        },
        
    ];

    const faqdata = {
        faqs : [
                {
                    ques:'What is Coding Cable?',
                    answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                },
                {
                    ques:'What is Coding Cable?',
                    answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                },
                {
                    ques:'What is Coding Cable?',
                    answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                },
                {
                    ques:'What is Coding Cable?',
                    answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                },
                {
                    ques:'What is Coding Cable?',
                    answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                }
            ],
        viewButton:true,
    };
    return (
        <div>
            <Navbar/>
            <section id='home'>
                <TextImageComponent {...homeObjOne}/>
            </section>
            <section id='mentor'>
                <Alumni alumni={mentor}/>
            </section>
            <section id='whatwedo'>
                <WhatWeDo wwd={wwd}/>
            </section>
            <section id='courses'>
                <Pricing/>
            </section>
            <section id='roadmap'>
                <RoadMap/>
            </section>
            <section id="faq">
                <FAQs {...faqdata}/>
            </section>
            <section id="booktrial">
                <BookTrial/>
            </section>
        </div>
    )
}
export default Home;