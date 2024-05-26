package com.example.Rentify.Service;

import java.util.List;
import java.util.Optional;

import com.example.Rentify.Entity.UserEntity;



public interface UserService {
	
	
	public void addUser(UserEntity user);
	
	public List<UserEntity> findAll();
	
	public UserEntity findByEmail(String email);
	
	


}
