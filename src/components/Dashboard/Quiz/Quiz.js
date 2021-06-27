import Single from "./Single";
import classes from "./Quiz.module.css";

const Quiz = (props) => {
  const data = props.QuizDetail.map((ele, i) => {
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
          <div className={classes.title}>Quiz Details</div>
          <div className={classes.viewquiz}>VIEW ALL Quiz</div>
        </div>
        <div>{data}</div>
      </div>
      <div className={classes.floating1}></div>
      <div className={classes.floating2}></div>
    </div>
  );
};
export default Quiz;
