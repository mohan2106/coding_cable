import Single from "./Single";
import classes from "./Assingment.module.css";

const Assingment = (prpops) => {
  const data = prpops.assignDetail.map((ele, i) => {
    return (
      <div>
        <Single {...ele} />
      </div>
    );
  });

  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <div className={classes.mincol}>
          <div className={classes.title}>Assignment Details</div>
          <div className={classes.viewassign}>VIEW ALL ASSINGMENT</div>
        </div>
        <div>{data}</div>
      </div>
      <div className={classes.floating1}></div>
      <div className={classes.floating2}>
        <img src={process.env.PUBLIC_URL + "/Images/triangleRed.svg"} />
      </div>
      <div className={classes.floating3}></div>
      <div className={classes.floating4}>
        <img src={process.env.PUBLIC_URL + "/Images/pentagonYellow.svg"} />
      </div>
    </div>
  );
};
export default Assingment;
