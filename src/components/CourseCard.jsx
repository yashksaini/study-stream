import React from "react";
import style from "./courseCard.module.css";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  const { course } = props;
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={course?.thumbnail} alt="Thumbnail" />
      </div>
      <div className={style.content}>
        <h1>{course?.name}</h1>
        <p>
          {course?.description.substring(0, 80)}{" "}
          {course?.description.length > 80 ? "..." : null}
        </p>
        <div className={style.shortInfo}>
          <div>{course?.duration}</div>
          <div>{course?.location}</div>
          <div
            style={{
              color:
                course?.enrollmentStatus === "Open"
                  ? "var(--primary)"
                  : "var(--grey)",
            }}
          >
            {course?.enrollmentStatus}
          </div>
        </div>
        <div className={style.footer}>
          <p>
            <b>Instructor: </b>
            {course?.instructor}
          </p>
          <Link to={"/course/" + course?.id}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
