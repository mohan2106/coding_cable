import classes from "./Single.module.css";
import { Button } from "../../Button/Button";
const Single = (props) => {
  const day = props.assigndeadline.toLocaleString("en-US", { day: "2-digit" });
  const month = props.assigndeadline.toLocaleString("en-US", {
    month: "2-digit",
  });
  return (
    <div className={classes.singlerow}>
      <div className={classes.singlecol}>
        <div className={classes.topline}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.batch}>{props.batch}</div>
        </div>
        <div className={classes.about}>{props.about}</div>
      </div>
      <div className={classes.singlecol2}>
        <div className={classes.but}>
          <Button buttonStyle={classes.btn}>View</Button>
        </div>
        <div className={classes.deadline}>
          <div className={classes.day}>Deadline by</div>
          <div className={classes.day}>
            {day}/{month}
          </div>
          <div className={classes.assigntime}>{props.assigntime}</div>
        </div>
      </div>
    </div>
  );
};
export default Single;
