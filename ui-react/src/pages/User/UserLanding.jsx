import React, { useEffect, useState } from 'react';
import axiosInstance from '../../services/AxiosConfig';
import UserTopBar from '../../components/User/UserTopBar';
import UserSidebar from '../../components/User/UserSideBar';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useHistory
import axios from 'axios';
import { razorpayconfig, testuserconfig } from '../../services';

const UserLanding = () => {
  const [courses, setCourses] = useState([]);
  const [usdToInrRate, setUsdToInrRate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate('/login');
    }

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
  }, [history]); // Add history to dependencies array

  const handlePayment = (coursePrice) => {
    const amountInPaise = Math.round(coursePrice * usdToInrRate * 100);

    const options = {
      key: razorpayconfig.key,
      key_secret: razorpayconfig.key_secret,
      amount: amountInPaise,
      currency: razorpayconfig.currency,
      name: razorpayconfig.name,
      handler: (res) => {
        alert(res.razorpay_payment_id);
      },
      prefill: {
        name: testuserconfig.name,
        email: testuserconfig.email,
        contact: testuserconfig.contact
      },
      notes: {
        address: " office",
      },
      theme: {
        color: '#f5f5f7'
      }
    };
    const pay = new window.Razorpay(options);
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
                    onClick={() => handlePayment(course.coursePrice)} // Pass course.coursePrice as an argument
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
