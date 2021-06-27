import { Button } from "../../Button/Button";
import classes from "./UpcomingClass.module.css";

const UpcomingClass = (props) => {
  const classdata = props.classDetail.map((ele, index) => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = ele.classdate.getDay();
    const day = ele.classdate.toLocaleString("en-US", {
      day: "2-digit",
    });
    return (
      <div className={classes.detailclass}>
        <div className={classes.class_name}>{ele.nameOfclass}</div>
        <div className={classes.batch}>{ele.batchName}</div>
        <div className={classes.date}>
          <div className={classes.space}>{days[dayName]}</div>
          <div className={classes.space}>{day}th,</div>
          <div className={classes.space}>{ele.classtime}</div>
        </div>
        <div>
          <Button buttonStyle={classes.joinbtn}>Join Class</Button>
        </div>
      </div>
    );
  });
  const teacherdata = props.classDetail.map((ele, i) => {
    return (
      <div className={classes.teacherdetail}>
        <div className={classes.teacher}>Teacher</div>
        <img className={classes.img} src={ele.img}></img>
        <div className={classes.teachername}>{ele.nameOFTecaher}</div>
      </div>
    );
  });

  const data1 = props.classDetail.map((ele, index) => {
    return (
      <div className={classes.coursebox}>
        <div className={classes.coursename}>{ele.coursename}</div>
        <div className={classes.batch1}>{ele.batchName}</div>
      </div>
    );
  });
  return (
      <div className={classes.row}>
        <div className={classes.col1}>
          <div className={classes.heading}>
            <h3>Upcoming Classes</h3>
          </div>
          <div className={classes.border}></div>
          <div className={classes.class_detail}>
            <div>{classdata}</div>
            <div>{teacherdata}</div>
          </div>
          <div className={classes.border1}></div>
        </div>
        <div className={classes.col2}>
            <div className={classes.yourcourse}>Your Courses</div>
            <div>{data1}</div>
            <div>{data1}</div>
          </div>
      </div>
  );
};
export default UpcomingClass;
