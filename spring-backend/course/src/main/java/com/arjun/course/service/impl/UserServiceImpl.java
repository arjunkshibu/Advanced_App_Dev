package com.arjun.course.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arjun.course.model.User;
import com.arjun.course.repository.UserRepo;
import com.arjun.course.service.UserService;

@Service 
public class UserServiceImpl implements UserService {

    private final UserRepo userRepository;

    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
		return userRepository.findAll();
	}

    @SuppressWarnings("null")
    @Override
    public User addUser(User newUser) {
        return userRepository.save(newUser);
    }


    @SuppressWarnings("null")
    @Override
    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public User updateUser(Long userId, User updatedUser) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            updatedUser.setUid(userId); // Ensure ID is set correctly
            return userRepository.save(updatedUser);
        } else {
            return null; // User not found
        }
    }

    @SuppressWarnings("null")
    @Override
    public boolean deleteUser(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            userRepository.deleteById(userId);
            return true;
        } else {
            return false; // User not found
        }
    }
}
