import React from 'react';
import classes from './FAQs.module.css';
import Single from './Single/Single';
import {Button} from '../Button/Button';

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
            <div className={classes.btn}>
                <button>More</button>
            </div>
            <div className={classes.floating1}></div>
            <div className={classes.floating2}></div>
            <div className={classes.floating3}></div>
        </div>
        
    );
}
export default FAQs;