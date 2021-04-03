import React from 'react';
import classes from './FAQs.module.css';
import Single from './Single/Single';
import {Link} from 'react-router-dom';

const FAQs = (props)=>{
    const data = props.faqs.map(ele => {
        return <Single {...ele}/>;
    })
    return (
        <div className={classes.faqcontainer}>
            <div className={classes.container_fluid}>
            <h1>Frequently Asked Questions (FAQs)</h1>
            {data}
            </div>
            {props.viewButton ?
            <div>
                <Link to="/faqs">
                    <div className={classes.btn}>
                        <button>More</button>
                    </div>
                </Link>
                <div className={classes.floating1}/>
                <div className={classes.floating2}/>
                <div className={classes.floating3}/>
            </div>
                
            :null}
        </div>
        
    );
}
export default FAQs;