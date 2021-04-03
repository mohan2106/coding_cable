import React,{useEffect} from 'react';
import FAQs from '../FAQs/FAQs';
import Navbar from '../Navbar';
import Footer from'../Footer/Footer';


const FAQPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    const data = {
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
                    },
                    {
                        ques:'What is Coding Cable?',
                        answer:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cupiditate, quasi ex eum nihil rerum exercitationem nesciunt odio placeat veniam doloremque voluptatibus eveniet animi iusto voluptas illo velit, at eligendi?'
                    }
                ],
            viewButton:false,
        };

    return (
        <div>
            <Navbar/>
            <FAQs {...data}/>
            <Footer/>
        </div>
    );
}

export default FAQPage