import React,{useEffect} from 'react';
import Intro from './Intro/Intro';
import Content from './CourseContents/Content';
import CoursePricing from './CoursePricing/CoursePricing';
import Navbar from '../Navbar';
import Footer from'../Footer/Footer';

const CourseDetail = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    
    const introData = {
        title:'Intro To Coding',
        disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi ullam aliquam, deleniti non voluptatum ex aperiam voluptas sit. Facilis fugit blanditiis repudiandae totam quasi, praesentium placeat consectetur nemo? Incidunt, repellat nostrum iste vitae suscipit earum.',
        img: process.env.PUBLIC_URL + '/Images/intro_image.svg',
    }

    const data = {
        head:'Python and Basic Maths',
        subhead:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint aliquid obcaecati beatae ipsa maiores dolores exercitationem! Distinctio asperiores eum magnam dolor atque similique ea. Quis quos nisi fugit consequatur veritatis?',
        modulelist : [
            {
                img:process.env.PUBLIC_URL + '/Images/math.svg',
                num:1,
                name:'Basics Of Coding',
                desc:'Learn The basic understandin of Coding. Learn How Code Works, Write some code and understand the basics.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/puzzle.svg',
                num:2,
                name:'Conditional Statement',
                desc:'Learn the conditional statement in python and develop a program which can take decision with conditions.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/kidlogo.svg',
                num:3,
                name:'Basics Of Coding',
                desc:'Learn The basic understandin of Coding. Learn How Code Works, Write some code and understand the basics.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/kidlogo.svg',
                num:4,
                name:'Conditional Statement',
                desc:'Learn the conditional statement in python and develop a program which can take decision with conditions.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/math.svg',
                num:5,
                name:'Basics Of Coding',
                desc:'Learn The basic understandin of Coding. Learn How Code Works, Write some code and understand the basics.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/puzzle.svg',
                num:6,
                name:'Conditional Statement',
                desc:'Learn the conditional statement in python and develop a program which can take decision with conditions.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/math.svg',
                num:7,
                name:'Basics Of Coding',
                desc:'Learn The basic understandin of Coding. Learn How Code Works, Write some code and understand the basics.',
            },
            {
                img:process.env.PUBLIC_URL + '/Images/kidlogo.svg',
                num:8,
                name:'Conditional Statement',
                desc:'Learn the conditional statement in python and develop a program which can take decision with conditions.',
            }
        ],
    }

    const pricingdata = {
        pricings:[
            {
                eyecatcher:'BEST BUDGET',
                pricingimg:process.env.PUBLIC_URL + '/Images/pricing_kid.svg',
                batchname:'Batch 1',
                batchdesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada fermentum platea ',
                features:[
                    {
                        feature:'12 STUDENT/BATCH',
                    },
                    {
                        feature:'144 CLASSES',
                    }
                ],
                benefits:[
                    'Competitive coding',
                    'Live Lecture',
                    'Regular Test',
                    'Projects',
                    'Doubt Sessions'
                ],
                off:'37% OFF',
                discountedPrice:'9,999',
                actualPrice:'15,999',
                pricePerClass:'69',
            },
            {
                eyecatcher:'BEST VALUE',
                pricingimg:process.env.PUBLIC_URL + '/Images/pricing_kid.svg',
                batchname:'Batch 2',
                batchdesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada fermentum platea ',
                features:[
                    {
                        feature:'4 STUDENT/BATCH',
                    },
                    {
                        feature:'144 CLASSES',
                    }
                ],
                benefits:[
                    'Competitive coding',
                    'Live Lecture',
                    'Regular Test',
                    'Projects',
                    'Doubt Sessions'
                ],
                off:'37% OFF',
                discountedPrice:'24,999',
                actualPrice:'39,999',
                pricePerClass:'174',
            }
        ],
        howItWorks:[
            'You book the trial class.',
            'One of our Teacher will be assigned to you.',
            'You will get a link and schedule of your trial class.',
            'Our Teacher will teach you a concept and you are free to ask any query from them.',
            'All of our teachers are from IIT\'s.',
            'Based on your experiance you can enroll in out course.'
        ],
    };

    return (
        <div>
            <Navbar/>
            <section id="intro">
                <Intro {...introData}/>
            </section>
            <Content {...data}/>
            <section id="pricing">
                <CoursePricing {...pricingdata}/>
            </section>
            <Footer/>
        </div>
    );
}
export default CourseDetail;