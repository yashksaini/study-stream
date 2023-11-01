import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact="true" path="/" element={<CoursesPage />}></Route>
            <Route exact="true" path="course/:id" element={<Course />}></Route>
            <Route
              exact="true"
              path="/dashboard"
              element={<Dashboard />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
