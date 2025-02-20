package com.user.entry.repository;

import com.user.entry.model.UserModel;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long>{

    Optional<UserModel> findByName(String name);
    
}
