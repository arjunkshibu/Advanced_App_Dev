import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        // Fetch purchased courses from the backend
        const response = await axios.get('http://localhost:8080/api/purchased-courses');
        setPurchasedCourses(response.data);
      } catch (error) {
        console.error('Error fetching purchased courses:', error);
      }
    };

    fetchPurchasedCourses();
  }, []);

  return (
    <div className="flex flex-col pt-10 pl-72 h-full font-Montserrat overflow-y-auto">
      <h2 className="font-sans font-bold text-xl flex gap-2 flex-row ">
        On Going Courses
      </h2>
      <div className="flex p-5 flex-row items-center justify-center">
        {/* Grid to display purchased courses */}
        {purchasedCourses.map(course => (
          <div key={course.id} className="flex flex-col w-[30vh] h-[30vh] bg-white shadow-2xl cursor-pointer">
            <img src={course.courseImgUrl} className="w-[100%] h-[50%]" alt={course.courseName} />
            <div className="course-info h-[40%]">
              <h2 className="font-sans pt-3 pl-3 font-bold text-xl">{course.courseName}</h2>
              <p className="font-sans pt-2 pl-3 font-semibold text-xs text-slate-600">By: {course.courseInstructor}</p>
            </div>
            <div className="flex flex-row ">
              <div className="bg-syn-purple mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]">
                <h2 className="">Continue...</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
