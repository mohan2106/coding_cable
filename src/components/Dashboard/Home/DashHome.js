import classes from "./DashHome.module.css";
import { Link as Link1 } from "react-scroll";
const DashHome = ({
  light,
  topline1,
  topline2,
  topline3,
  heading,
  imgStart,
  img,
  alt,
}) => {
  return (
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.topline}>{topline1}</div>
          <div>
            <img src={img} alt={alt} className={classes.dash_home_img} />
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.minrow}>
            <div className={classes.assign}>
              <Link1 to="assingment" smooth={true} duration={1000}>
                {topline2}
              </Link1>
            </div>
            <div className={classes.quiz}>
              <Link1 to="Quiz" smooth={true} duration={1000}>
                {topline3}
              </Link1>
            </div>
          </div>
          <div className={classes.heading}>{heading}</div>
        </div>
      </div>
  );
};
export default DashHome;
