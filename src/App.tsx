import { BrowserRouter, Routes, Route } from "react-router";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Course from "./pages/Course";
import Major from "./pages/Major";
import Instructor from "./pages/Instructor";
import Department from "./pages/Department";
import LogIn from "./pages//LogIn";
import Register from "./pages//Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/course" element={<Course />} />
        <Route path="/major" element={<Major />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/department" element={<Department />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
