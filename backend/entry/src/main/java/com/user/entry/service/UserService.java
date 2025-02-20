package com.user.entry.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entry.model.UserModel;
import com.user.entry.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel saveUser (UserModel user){
        return userRepository.save(user);
    }

    public List<UserModel> getAllUsers(){
        return userRepository.findAll();
    }

    public boolean nameExists(String name) {
        return userRepository.findByName(name).isPresent();
    }
    
}
