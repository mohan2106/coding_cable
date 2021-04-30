import React from 'react';
import {IconContext} from 'react-icons/lib';
import {FaRupeeSign} from 'react-icons/fa';
import classes from './Single.module.css';

const Feature = (props)=>{
    return (
        <p className={classes.feature}>{props.feature}</p>
    );
}

const Single = (props)=>{
    const featuredata = props.features.map(d => {
        return (
            <Feature {...d}/>
        );
    });
    const benefits = props.benefits.map(d => {
        return (
            <li className={classes.benefitsli}>
                {d}
            </li>
        );
    });
    return (
        <div className={classes.pricingitem}>
            <div className={classes.single}>
                <div className={classes.eyecatcher}>{props.eyecatcher}</div>
                <img className={classes.pricingimg} src={props.pricingimg} alt="pricing-img"/>
                <div className={classes.batchname}>{props.batchname}</div>
                <div className={classes.batchdesc}>{props.batchdesc}</div>
                <div className={classes.featurecollection}>
                    {featuredata}
                </div>
                <div className={classes.devider}/>
                <div className={classes.list}>
                    <ul className={classes.benefits} style={{listStyleImage: `url(${process.env.PUBLIC_URL + '/Images/correct.svg'})`}}>
                        {benefits}
                    </ul>
                </div>
                <div className={classes.off}>
                    {props.off}
                </div>
                <div className={classes.price}>
                    <div className={classes.actualprice}>
                        <div className={classes.discounted}>
                            <IconContext.Provider value={{ size: '16px' }}>
                                <FaRupeeSign/>
                            </IconContext.Provider>
                            
                            {props.discountedPrice}
                        </div>
                        <div className={classes.actual}>
                            <IconContext.Provider value={{ size: '10px' }}>
                                <FaRupeeSign/>
                            </IconContext.Provider>
                            <del>{props.actualPrice}</del>
                            
                        </div>
                    </div>
                    <div className={classes.perclass}>
                        <IconContext.Provider value={{ size: '10px' }}>
                            <FaRupeeSign/>
                        </IconContext.Provider>
                        {props.pricePerClass}/class
                    </div>
                </div>
                <button className={classes.buynow}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default Single;