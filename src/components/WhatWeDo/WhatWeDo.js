import React from "react";
import classes from "./WhatWeDo.module.css";
import Single from "./Single/Single";
import { Button } from "../Button/Button";
import { Link as Scroll } from "react-scroll";

function WhatWeDo(props) {
  console.log(classes);
  const data = props.wwd.map((ele, index) => {
    return (
      <div className={classes.child}>
        <Single {...ele} />
      </div>
    );
  });
  return (
    <>
      <div>
        <h2 className={classes.whatwedo}>What Do We Do?</h2>
        <div className={classes.container}>{data}</div>
        <div className={classes.btn}>
          <Scroll to="booktrial" smooth={true} duration={1000}>
            <Button buttonStyle="btn--rounded-dark">Book Free Trial</Button>
          </Scroll>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
