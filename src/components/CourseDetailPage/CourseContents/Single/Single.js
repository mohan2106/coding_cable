import React from 'react';
import classes from './Single.module.css';
const Single = (props) => {
    return (
        <div className={classes.single}>
            <img className={classes.single_image} src={props.img} alt="module-logo"/>
            <p className={classes.single_module_number}>MODULE {props.num}</p>
            <p className={classes.single_module_name}>{props.name}</p>
            <p className={classes.single_module_desc}>{props.desc}</p>
        </div>
    );
}

export default Single;