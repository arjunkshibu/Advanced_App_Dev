import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const TopBar = lazy(() => import("./components/User/TopBar"));
const WebLayout = lazy(() => import("./layouts/WebLayout"));
const Contact = lazy(() => import("./pages/Shared/Contact"));
const About = lazy(() => import("./pages/Shared/About"));
const Home = lazy(() => import("./pages/Shared/Home"));
const Courses = lazy(() => import("./pages/Shared/Courses"));

import Loader from "./components/Loader";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import UsersTable from "./pages/Admin/AdminUsers";
import AdminCourses from "./pages/Admin/AdminCourses";
import AdminPayments from "./pages/Admin/AdminPayments";
import AdminProfile from "./pages/Admin/AdminProfile";
import UserLayout from "./layouts/UserLayout";
import UserLanding from "./pages/User/UserLanding";
import UserDashboard from "./pages/User/UserDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<WebLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/" element={<Home />} />

            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/courses" element={<AdminCourses />} />
              <Route path="/admin/users" element={<UsersTable />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/profile" element={<AdminProfile />} />
            </Route>
            <Route element={<UserLayout />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />


            </Route>
            <Route path="/user/landing" element={<UserLanding />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
