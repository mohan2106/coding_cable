import React from 'react';
import Intro from './Intro/Intro';
import Content from './CourseContents/Content';

const CourseDetail = ()=>{
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

    return (
        <div>
            <section id="intro">
                <Intro {...introData}/>
            </section>
            <Content {...data}/>
        </div>
    );
}
export default CourseDetail;