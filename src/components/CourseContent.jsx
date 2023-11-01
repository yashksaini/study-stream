import React from "react";
import style from "./courseContent.module.css";
import Expand from "./Expand";
const CourseContent = (props) => {
  const { courseData } = props;
  return (
    <>
      <div className={style.container}>
        <div className={style.contentBox}>
          <h1>{courseData?.name}</h1>
          <p>
            <b>Instructor: </b>
            {courseData?.instructor}
          </p>
          <div className={style.details}>
            <div className={style.imgBox}>
              <img src={courseData?.thumbnail} alt="Thumbnail" />
            </div>
            <div className={style.statsBox}>
              <div>
                <span className="material-symbols-outlined">event_seat</span>
                <span>{courseData?.enrollmentStatus}</span>
              </div>
              <div>
                <span className="material-symbols-outlined">timer</span>
                <span>{courseData?.duration}</span>
              </div>
              <div>
                <span className="material-symbols-outlined">date_range</span>
                <span>{courseData?.schedule}</span>
              </div>
              <div>
                <span className="material-symbols-outlined">location_on</span>
                <span>{courseData?.location}</span>
              </div>
              <div>
                <span className="material-symbols-outlined">groups</span>
                <span>{courseData?.students?.length} Enrolled students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.box}>
        <h2>Description</h2>
        <p>{courseData?.description}</p>
        <div className={style.line}></div>
        <h2>Pre-requisites</h2>
        <ul>
          {courseData?.prerequisites?.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
      </div>
      <div className={style.box}>
        <h2>Syllabus</h2>
        <div>
          {courseData?.syllabus?.map((data, index) => {
            return <Expand data={data} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CourseContent;
