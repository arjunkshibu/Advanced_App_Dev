import React, { useState } from 'react';

const initialCourses = [
  { id: 1, name: 'Course 1', instructor: 'Instructor 1', duration: '2 weeks' },
  { id: 2, name: 'Course 2', instructor: 'Instructor 2', duration: '3 weeks' },
  { id: 3, name: 'Course 3', instructor: 'Instructor 3', duration: '4 weeks' }
];

const AdminCourses = () => {
  const [courses, setCourses] = useState(initialCourses);

  const updateCourse = (id) => {
    const newName = prompt('Enter new course name:');
    const newInstructor = prompt('Enter new instructor:');
    const newDuration = prompt('Enter new duration:');

    const updatedCourses = courses.map(course => {
      if (course.id === id) {
        return {
          ...course,
          name: newName || course.name,
          instructor: newInstructor || course.instructor,
          duration: newDuration || course.duration
        };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  const deleteCourse = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const updatedCourses = courses.filter(course => course.id !== id);
      setCourses(updatedCourses);
    }
  };

  const addCourse = () => {
    let id;
    if (courses.length === 0) {
      id = 1;
    } else {
      id = Math.max(...courses.map(course => course.id)) + 1;
    }
    const name = prompt('Enter course name:');
    const instructor = prompt('Enter instructor:');
    const duration = prompt('Enter duration:');
  
    if (name && instructor && duration) {
      const newCourse = { id, name, instructor, duration };
      setCourses([...courses, newCourse]);
    }
  };

  return (
    <div className="container mx-auto font-Montserrat mt-8">
      <button className="bg-green-500 hover:bg-green-700 absolute top-[10%] right-[0.5%] text-white font-bold py-5 px-6 rounded mb-4" onClick={addCourse}>Add Course</button>
      <table className="table-auto border-collapse border border-black-800 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Instructor</th>
            <th className="border border-gray-800 px-4 py-2">Duration</th>
            <th className="border border-gray-800 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td className="border border-gray-800 px-4 py-2">{course.id}</td>
              <td className="border border-gray-800 px-4 py-2">{course.name}</td>
              <td className="border border-gray-800 px-4 py-2">{course.instructor}</td>
              <td className="border border-gray-800 px-4 py-2">{course.duration}</td>
              <td className="border border-gray-800 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateCourse(course.id)}>Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => deleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourses;
