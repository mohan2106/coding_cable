import React, { useEffect } from "react";
import Navbar from "../Navbar";
import DashHome from "./Home/DashHome";
import { Dashone } from "./Home/Data";
import UpcomingClass from "./UpcomingClass/UpcomingClass";
import Assingment from "./Assingment/Assignment";
import Quiz from "./Quiz/Quiz";

const Dashboard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classsDetail = [
    {
      nameOfclass: "Class Name",
      batchName: "Batch Name",
      classdate: new Date(12, 2, 3),
      classtime:"XX:YY",
      coursename: "Course Name",
      img: process.env.PUBLIC_URL + "/Images/puzzle.svg",
      nameOFTecaher: "Dr Lorem lpsum Longname",
    },
  ];

  const assignDetail = [
    {
      name: "Assignment Name",
      batch: "Batch Name",
      assigndeadline: new Date(2, 5, 62),
      assigntime: "XX:YY",
      about:
        "An assignment is a task that someone in authority has asked you to do. The word assignment is just the noun.",
    },
    {
      name: "Assignment Name1",
      batch: "Batch1 Name",
      assigndeadline: new Date(21, 5, 62),
      assigntime: "XX:YY",
      about:
        "An assignment is a task that someone in authority has asked you to do. The word assignment is just the noun  form of the common verb assign, which you use when you want to give someone a duty or a job. When you assign something, that something is called an assignment..",
    },
    {
      name: "Assignment Name",
      batch: "Batch Name",
      assigndeadline: new Date(2, 5, 62),
      assigntime: "XX:YY",
      about:
        "An assignment is a task that someone in authority has asked you to do. The word assignment is just the noun.",
    },
    {
      name: "Assignment Name",
      batch: "Batch Name",
      assigndeadline: new Date(2, 5, 62),
      assigntime: "XX:YY",
      about:
        "An assignment is a task that someone in authority has asked you to do. The word assignment is just the noun.",
    },
  ];

  const QuizDetail = [
    {
      name: "Quiz Name",
      batch: "Batch Name",
      quizdeadline: new Date(2, 5, 62),
      timer: "45.00",
      quiztime: "XX:YY",
      about:
        " The definition of a quiz is a questioning or a short test. An example of a quiz is a series of ten multiple choices questions for students to answer asdhflk asdfjhas lkhask jhdfkj ashdfkjs ljkdas lkfhla kjshdfk jhfal kshd asdfjk jkhsdf alsf ashf asjhs asdj hasdjfh ",
    },
    {
      name: "Quiz Name1",
      batch: "Batch1 Name",
      quizdeadline: new Date(21, 5, 62),
      timer: "45.00",
      quiztime: "XX:YY",
      about:
        "asdf sdf asd asdf jasdfj asdjf asjdf as j;d 1as dhflka sdf jhasl khas kjh dfkja shdf kjslj kdaslk fhlakj shdfkj hfalkshd",
    },
    {
      name: "Quiz Name1",
      batch: "Batch1",
      quizdeadline: new Date(21, 5, 62),
      timer: "45.00",
      quiztime: "XX:YY",
      about:
        "asdf sdf asd asdf jasdfj asdjf asjdf as j;d 1as dhflk asdf sdf asd asdf jasdfj asdjf asjdf as j;d 1as dha sdf jhasl khas kjh dfkja shdf kjslj kdaslk fhlakj shdfkj hfalkshd",
    },
  ];
  return (
    <div>
      <Navbar />
      <section id="dashHome">
        <DashHome {...Dashone} />
      </section>
      <section id="UpcomingClass">
        <UpcomingClass classDetail={classsDetail} />
      </section>
      <section id="assingment">
         <Assingment assignDetail={assignDetail}/>
      </section>
      <section id="Quiz">
        <Quiz QuizDetail={QuizDetail}/>
      </section>
    </div>
  );
};

export default Dashboard;
