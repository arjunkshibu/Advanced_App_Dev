package com.arjun.course.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.Courses;
import com.arjun.course.service.CoursesService;

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
    public Courses addCourse(@RequestBody Courses course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/putcourses")
    public Courses putCourses(@RequestParam long cid, @RequestBody Courses cs) {
        cs.setCourseId(cid);
        return courseService.putCourses(cs);
    }
    @DeleteMapping("/deletecourses")
    public void deleteCourses(@RequestParam long cid){
      courseService.deleteCourses(cid);
    }
}
