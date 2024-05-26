package com.example.Rentify.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Rentify.Dao.UserDao;
import com.example.Rentify.Entity.UserEntity;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	public UserDao userDao;

	@Override
	public void addUser(UserEntity user) {
		userDao.save(user);
	}

	@Override
	public List<UserEntity> findAll() {
		return userDao.findAll();
	}

	@Override
	public UserEntity findByEmail(String email) {
		return userDao.findByEmail(email);
	}




}