import React from 'react';
import classes from './Intro.module.css';
import {Button} from '../../Button/Button';

const Module = (props)=>{
    return (
        <div className={classes.item}>
            <h2>{props.d1}</h2>
            <p>{props.d2}</p>
        </div>
    );
}

const Intro = (props) =>{
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <h2>{props.title}</h2>
                <p>{props.disc}</p>
                <Button buttonStyle='btn--rounded-dark' >
                    Buy This Course
                  </Button>
                  <div>
                    <img src={props.img} alt="intro-img"/>
                  </div>
                  <div className={classes.module}>
                      <Module d1="18" d2="Module"/>
                      <div className={classes.verticle}></div>
                      <Module d1="144" d2="Classes"/>
                  </div>
            </div>
            <div className={classes.floating1}/>
            <div className={classes.floating2}>
                <img src={process.env.PUBLIC_URL + '/Images/triangle_blue.svg'} alt="triangle"/>
            </div>
            <div className={classes.floating3}/>
            <div className={classes.floating4}/>
        </div>
    )
}

export default Intro
