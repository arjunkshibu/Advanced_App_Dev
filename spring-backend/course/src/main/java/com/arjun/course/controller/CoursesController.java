package com.arjun.course.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.Courses;
import com.arjun.course.service.CoursesService;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    private final CoursesService courseService;

    public CoursesController(CoursesService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/getAll")
    public List<Courses> getAllCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping("/post")
    @PreAuthorize("hasRole('ADMIN')")
    public Courses addCourse(@RequestBody Courses course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/putcourses")
    @PreAuthorize("hasRole('ADMIN')")
    public Courses putCourses(@RequestParam long cid, @RequestBody Courses cs) {
        cs.setCourseId(cid);
        return courseService.putCourses(cs);
    }

    @DeleteMapping("/deletecourses")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteCourses(@RequestParam long cid){
        courseService.deleteCourses(cid);
        return "Course deleted!";
    }
}
