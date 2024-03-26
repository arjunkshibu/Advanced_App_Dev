package com.arjun.course.service.impl;

import com.arjun.course.model.Courses;
import com.arjun.course.repository.CoursesRepository;
import com.arjun.course.service.CoursesService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoursesServiceImpl implements CoursesService {

    private final CoursesRepository coursesRepository;

    @Autowired
    public CoursesServiceImpl(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    @Override
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }

    @Override
    public Courses addCourse(Courses course) {
        return coursesRepository.save(course);
    }

    @Override
    public Courses getCourseById(Long courseId) {
        return coursesRepository.findById(courseId).orElse(null);
    }

    @Override
    public Courses updateCourse(Long courseId, Courses updatedCourse) {
        Courses existingCourse = coursesRepository.findById(courseId).orElse(null);
        if (existingCourse != null) {
            existingCourse.setCourseName(updatedCourse.getCourseName());
            existingCourse.setCourseInstructor(updatedCourse.getCourseInstructor());
            existingCourse.setCourseDuration(updatedCourse.getCourseDuration());
            existingCourse.setCoursePrice(updatedCourse.getCoursePrice());
            existingCourse.setCourseDescription(updatedCourse.getCourseDescription());
            return coursesRepository.save(existingCourse);
        }
        return null;
    }

    @Override
    public boolean deleteCourse(Long courseId) {
        Courses existingCourse = coursesRepository.findById(courseId).orElse(null);
        if (existingCourse != null) {
            coursesRepository.delete(existingCourse);
            return true;
        }
        return false;
    }
}
