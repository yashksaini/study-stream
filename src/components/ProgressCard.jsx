import React from "react";
import style from "./courseCard.module.css";
import { Link } from "react-router-dom";
const ProgressCard = (props) => {
  const { data, percentage, markCompleted, markIncomplete } = props;

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={data?.thumbnail} alt="Thumbnail" />
      </div>
      <div className={style.content}>
        <h1>{data?.name}</h1>
        <p>
          <b>Due Date:</b> 26 Nov,2023
        </p>
        <div className={style.progressBox}>
          <p>Progress ({percentage}%)</p>
          <div className={style.progressBar}>
            <div
              className={style.progress}
              style={{ width: percentage + "%" }}
            ></div>
          </div>
        </div>

        <div className={style.footer}>
          <p>
            <b>Instructor: </b>
            {data?.instructor}
          </p>
          <Link to={"/course/" + data?.id}>View Course</Link>
          {percentage === 100 ? (
            <button
              onClick={() => {
                markIncomplete(data?.id);
              }}
              className={style.remove}
            >
              Remove Completed
            </button>
          ) : (
            <button
              onClick={() => {
                markCompleted(data?.id);
              }}
            >
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
