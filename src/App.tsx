import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Student from "./pages/admin/Student";
import Course from "./pages/public/course/Course";
import Major from "./pages/admin/Major";
import Instructor from "./pages/admin/Instructor";
import Department from "./pages/public/Department";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Welcome from "./pages/public/Welcome";
import InternalLayout from "./layout/InternalLayout";
import User from "./pages/internal/User";
import Courses from "./pages/public/course/Courses";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin-related routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/major" element={<Major />} />

        {/* On start-up */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department/:id" element={<Department />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
        </Route>

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

        {/* On log in, internal personnel only  */}
        <Route element={<InternalLayout />}>
          <Route path="/internal" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
