import React, { useState } from "react";
import style from "./expand.module.css";
const Expand = (props) => {
  const { data } = props;
  const [isExpanded, SetIsExpanded] = useState(false);
  return (
    <div className={style.dropBox}>
      <div className={style.top}>
        <h3>{data?.topic}</h3>
        <span
          className="material-symbols-outlined"
          onClick={() => {
            SetIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "expand_less" : "expand_more"}
        </span>
      </div>
      <div className={style.expandContainer}>
        <div
          className={
            isExpanded
              ? `${style.expanded} ${style.content}`
              : `${style.content}`
          }
        >
          <h4> Week {data?.week}</h4>
          <p>{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Expand;
