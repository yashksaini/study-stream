import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/coursesData";
import { useParams } from "react-router-dom";
import CourseContent from "../components/CourseContent";
import CourseNotFound from "../components/CourseNotFound";
import Loading from "../components/Loading";
const Course = () => {
  const [courseData, setCourseData] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const { data, status } = useSelector((state) => state.coursesData);

  const dispath = useDispatch();
  useEffect(() => {
    if (status === "Idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);

  useEffect(() => {
    if (status === "Success") {
      let courseData = data?.filter((course) => {
        return course?.id === parseInt(id);
      });
      if (courseData.length === 1) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setCourseData(courseData[0]);
        setIsValid(true);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setIsValid(false);
      }
    }
  }, [id, data, status]);

  return (
    <>
      {!loading ? (
        <div className="default-container">
          {isValid && !loading ? (
            <CourseContent courseData={courseData} />
          ) : null}
          {!isValid && !loading ? <CourseNotFound /> : null}
        </div>
      ) : (
        <div className="default-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Course;
