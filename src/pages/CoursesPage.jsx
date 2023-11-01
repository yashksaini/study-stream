import SearchBar from "../components/searchBar";
import style from "./courses.module.css";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/coursesData";
import Loading from "../components/Loading";
const CoursesPage = () => {
  const { data, status } = useSelector((state) => state.coursesData);
  const { text } = useSelector((state) => state.searchInput);
  const dispath = useDispatch();

  useEffect(() => {
    if (status === "Idle") {
      dispath(fetchData());
    }
  }, [dispath, status]);

  const filterData = (course) => {
    let searchString = text.toUpperCase();
    if (
      course?.name.toUpperCase().indexOf(searchString) !== -1 ||
      course?.instructor.toUpperCase().indexOf(searchString) !== -1
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="default-container">
      <div className={style.box}>
        <h1 className="heading">All Courses</h1>
        <SearchBar />
      </div>
      <div className={style.cards}>
        {status === "Loading" ? <Loading /> : null}
        {status === "Success" &&
          data
            ?.filter((course) => {
              return filterData(course);
            })
            .map((course, index) => {
              return <CourseCard course={course} key={index} />;
            })}
      </div>
    </div>
  );
};

export default CoursesPage;
