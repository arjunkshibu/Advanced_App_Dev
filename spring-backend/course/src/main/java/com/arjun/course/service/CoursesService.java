package com.arjun.course.service;

import com.arjun.course.model.Courses;
import java.util.List;

public interface CoursesService {
    List<Courses> getAllCourses();
    Courses addCourse(Courses course);
    Courses getCourseById(Long courseId);
    Courses updateCourse(Long courseId, Courses updatedCourse);
    boolean deleteCourse(Long courseId);
}
