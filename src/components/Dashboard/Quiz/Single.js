import classes from "./Single.module.css";
import { Button } from "../../Button/Button";
import { AiOutlineClockCircle } from "react-icons/ai";

const Single = (props) => {
  const style = { color: "#2C2AB7" };
  const day = props.quizdeadline.toLocaleString("en-US", { day: "2-digit" });
  const month = props.quizdeadline.toLocaleString("en-US", { month: "long" });
  const year = props.quizdeadline.getFullYear();
  const shortyear = year.toString().substr(-2);

  return (
    <div className={classes.singlerow}>
      <div>
        <div className={classes.topline}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.batch}>{props.batch}</div>
        </div>
        <div className={classes.about}>{props.about}</div>
      </div>
      <div className={classes.right}>
        <div className={classes.timer}>
          <div className={classes.clock}>
            <AiOutlineClockCircle style={style} />
          </div>
          <div className={classes.time}>{props.timer}</div>
        </div>
        <div className={classes.deadline}>
          <div className={classes.day}>{day}th </div>
          <div className={classes.month}>{month}' </div>
          <div className={classes.year}>{shortyear} </div>
          <div className={classes.quiztime}>{props.assigntime}</div>
        </div>
        <Button buttonStyle={classes.btn}>View</Button>
      </div>
    </div>
  );
};
export default Single;
