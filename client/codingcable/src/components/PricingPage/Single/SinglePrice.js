import React from 'react';
import classes from './SinglePrice.module.css';
import {Link} from 'react-router-dom';

const SinglePrice = (props)=>{
    const content = props.contents.map((ele,index)=>{
        return (<li className={classes.litem}>
            {ele}
        </li>);
    });
    return (
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <div className={classes.tags}>
                <p className={classes.tagitem}>144 classes</p>
                <p className={classes.tagitem}>begineer</p>
            </div>
            <p className={classes.whatlearn}>What you will learn in this course?</p>
            <ul className={classes.list}>
                {content}
            </ul>
            <Link to="/courses/id">
                <button className={classes.btn}>Learn More</button>
            </Link>
        </div>
    );
}
export default SinglePrice;