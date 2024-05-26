package com.example.Rentify.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Rentify.Entity.UserEntity;


@Repository
public interface UserDao extends JpaRepository<UserEntity, Long>{
	
	UserEntity findByEmail(String email);


}
