package com.user.entry.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.user.entry.model.UserModel;
import com.user.entry.repository.UserRepository;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel saveUser (UserModel user){
        return userRepository.save(user);
    }
    
}
