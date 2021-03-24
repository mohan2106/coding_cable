import React from 'react';
import classes from './WhatWeDo.module.css';
import Single from './Single/Single';
import {Button} from '../Button/Button';

function WhatWeDo(props) {
  console.log(classes);
    const data = props.wwd.map((ele,index) => {
        return (
          <div className={classes.child}>
          <Single {...ele}/>
        </div>
        );
    });
  return (
    <>
      <div>
        <h2 className={classes.whatwedo}>What Do We Do?</h2>
        <div className={classes.container}>
          {data}
        </div>
        <div className={classes.btn}>
          {/* <div className={classes.childbtn}></div> */}
          <Button buttonStyle='btn--rounded-dark'>More</Button>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
