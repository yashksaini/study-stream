import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/coursesData";
import Loading from "../components/Loading";
import ProgressCard from "../components/ProgressCard";

import style from "./courses.module.css";
const Dashboard = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, status } = useSelector((state) => state.coursesData);

  const dispath = useDispatch();
  useEffect(() => {
    if (status === "Idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);
  const getData = () => {
    let courseData = data?.filter((course) => {
      let arr = [];
      if (JSON.parse(localStorage.getItem("Completed"))) {
        arr = JSON.parse(localStorage.getItem("Completed"));
      }
      return (
        course?.enrollmentStatus === "In Progress" && !arr.includes(course?.id)
      );
    });
    if (JSON.parse(localStorage.getItem("Completed"))) {
      let arr = JSON.parse(localStorage.getItem("Completed"));
      let completedCourses = data?.filter((course) => {
        return arr.includes(course?.id);
      });
      setCompleted(completedCourses);
    }

    if (courseData.length > 0) {
      setLoading(false);
      setCoursesData(courseData);
    } else {
      setLoading(false);
      setCoursesData([]);
    }
  };
  useEffect(() => {
    if (status === "Success") {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const markCompleted = (id) => {
    let arr = [];
    if (JSON.parse(localStorage.getItem("Completed"))) {
      arr = JSON.parse(localStorage.getItem("Completed"));
    }
    if (arr.indexOf(id) === -1) {
      arr.push(id);
      localStorage.setItem("Completed", JSON.stringify(arr));
      getData();
    }
  };
  const markIncomplete = (id) => {
    let arr = [];
    if (JSON.parse(localStorage.getItem("Completed"))) {
      arr = JSON.parse(localStorage.getItem("Completed"));
    }
    if (arr.indexOf(id) !== -1) {
      arr.splice(arr.indexOf(id), 1);
      localStorage.setItem("Completed", JSON.stringify(arr));
      getData();
    }
  };

  return (
    <div className="default-container">
      <div className={style.contentBox}>
        <h1>Courses in progress ({coursesData?.length})</h1>
        <p>All the course that are in progress.</p>
      </div>
      <div className={style.cards}>
        {!loading ? (
          coursesData?.map((data, index) => {
            const percentage = 72;
            return (
              <ProgressCard
                key={index}
                data={data}
                percentage={percentage}
                markCompleted={markCompleted}
                markIncomplete={markIncomplete}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className={style.contentBox}>
        <h1>Completed Courses ({completed.length})</h1>
        <p>All the course that are marked as completed.</p>
      </div>
      <div className={style.cards}>
        {!loading ? (
          completed?.map((data, index) => {
            const percentage = 100;
            return (
              <ProgressCard
                key={index}
                data={data}
                percentage={percentage}
                markCompleted={markCompleted}
                markIncomplete={markIncomplete}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
