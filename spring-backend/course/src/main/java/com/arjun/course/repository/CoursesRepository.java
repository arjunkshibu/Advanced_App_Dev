package com.arjun.course.repository;

import com.arjun.course.model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursesRepository extends JpaRepository<Courses, Long> {
    // You can add custom query methods here if needed
}
