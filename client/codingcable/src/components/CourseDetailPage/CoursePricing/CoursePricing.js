import React from 'react';
import classes from './CoursePricing.module.css';
import Single from './Single/Single';
import Form from './Form/Form';


const CoursePricing = (props) => {
    const data = props.pricings.map(d => {
        return (
            <Single {...d}/>
        );
    });
    const hiw = props.howItWorks.map(d => {
        return (
            <li className={classes.item2li}>{d}</li>
        );
    })
    

    return (
        <div className={classes.main}>
            <div className={classes.container} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/pricing_background.svg'})`}}>
                <div className={classes.pricing}>
                    <div className={classes.pricingitem}>
                        <div className={classes.pricingtitle}>
                            Course Plans and Pricing
                        </div>
                        <div className={classes.pricingsubtitle}>
                            Choose the plan that is right for you.
                        </div>
                    </div>
                    {data}
                </div>
                <div className={classes.title}>
                    Book a trial class
                </div>
                <div className={classes.subtitle}>
                    Take a free trial class and help yourself to decide whether you should enroll or not.
                </div>
                <div className={classes.booktrial}>
                    <div className={classes.item1}>
                        <Form/>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.hiw}>How it Works?</div>
                        <ol className={classes.item2ul}>
                            {hiw}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePricing;