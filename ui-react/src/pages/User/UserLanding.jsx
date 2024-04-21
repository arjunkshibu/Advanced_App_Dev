import React, { useEffect, useState } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import UserTopBar from '../../components/User/UserTopBar';
import UserSidebar from '../../components/User/UserSideBar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const UserLanding = () => {
  const [courses, setCourses] = useState([]);
  const [usdToInrRate, setUsdToInrRate] = useState(null);

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

    // Fetch USD to INR exchange rate
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        const rates = response.data.rates;
        const inrRate = rates.INR;
        setUsdToInrRate(inrRate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);

  const handleSubmit = (coursePrice) => {
    if (coursePrice === 0) {
      alert("This course is free!");
      return;
    }

    if (usdToInrRate === null) {
      alert("Could not fetch exchange rate. Please try again later.");
      return;
    }

    const amountInPaise = Math.round(coursePrice * usdToInrRate * 100);

    var options = {
      key: "rzp_test_8TYlj4b5XasNDn",
      key_secret: "ENXjn2hfOn5aMc3FUYDhbatk",
      amount: amountInPaise , // Amount in INR
      currency: "INR",
      name: "COURSE_COMPASS",
      description: "For testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Arjun",
        email: "arjunbackupmailid@gmail.com",
        contact: "9778390150"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#000000"
      }
      
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="flex flex-col font-Montserrat h-screen">
      <UserTopBar />
      <div className="flex flex-1">
        <UserSidebar/>
        <div className="flex flex-col mt-8 mx-auto">
          <h2 className="text-3xl mt-20 font-semibold mb-4 text-center">Explore our courses</h2>
          <div className="grid grid-cols-4 gap-4 p-4">
            {courses.map(course => (
              <div key={course.id} className="border-2 text-center border-gray-300 rounded-md p-4 h-96"> 
                <img src={course.courseImgUrl} alt={course.courseName} className=" border border-white w-full mb-2 h-[180px]" />
                <h3 className="text-lg font-semibold mb-1">
                  {course.courseName.includes("FREE") ? (
                    <span style={{ color: 'green' }}>{course.courseName}</span>
                  ) : (
                    course.courseName
                  )}
                </h3>
                <p className="text-base mb-1">Instructor: {course.courseInstructor}</p>
                <p className="text-base mb-1">Duration: {course.courseDuration}</p>
                <div className="flex items-center justify-center">
                  <button 
                    className={`text-2xl mb-1 mt-3 border px-4 ${course.coursePrice === 0 ? 'bg-green-500' : 'bg-blue-600'} text-white flex items-center`} 
                    onClick={() => handleSubmit(course.coursePrice)}
                  >
                    <span className="mr-1">$</span>{course.coursePrice}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLanding;
