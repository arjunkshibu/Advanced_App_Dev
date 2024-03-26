package com.arjun.course.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/{id}")
    public Courses updateCourse(@PathVariable Long id, @RequestBody Courses course) {
        return courseService.updateCourse(id, course);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        boolean deleted = courseService.deleteCourse(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
