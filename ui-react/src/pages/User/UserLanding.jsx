import React, { useEffect, useState } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import UserTopBar from '../../components/User/UserTopBar';
import UserSidebar from '../../components/User/UserSideBar';

const UserLanding = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:8080/api/courses/getAll');
        setCourses(response.data); 
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <UserTopBar />
      <div className="flex flex-1">
        <UserSidebar /> {/* Include the UserSidebar component */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {courses.map(course => (
            <div key={course.id} className="border border-gray-300 rounded-md p-4">
              <img src={course.courseImgUrl} alt={course.courseName} className="w-full mb-2" />
              <h3 className="text-lg font-semibold mb-1">{course.courseName}</h3>
              <p className="text-sm mb-1">Instructor: {course.courseInstructor}</p>
              <p className="text-sm mb-1">Duration: {course.courseDuration}</p>
              <button className="text-sm mb-1 flex items-center">
                <span className="mr-1">$</span>{course.coursePrice}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserLanding;
