package com.arjun.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arjun.course.model.PurchasedCourses;

public interface PurchasedCoursesRepo extends JpaRepository<PurchasedCourses,Long> {

}
    