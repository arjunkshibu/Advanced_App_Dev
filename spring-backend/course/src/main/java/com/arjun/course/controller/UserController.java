package com.arjun.course.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.Courses;
import com.arjun.course.model.User;
import com.arjun.course.service.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
     private final UserService userService;

 

    // CREATE - Add a new user
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User newUser) {
        User createdUser = userService.addUser(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    // READ - Get all users
    @GetMapping("/getUsers")
	 public List<User> getUsers(){
		 return userService.getUsers();
	 }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/putUser")
    public User putUser(@RequestParam long userId, @RequestBody User user) {
        user.setUid(userId);
        return userService.updateUser(user);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUser(@RequestParam long userId) {
        userService.deleteUser(userId);
    }
    
}
