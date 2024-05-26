package com.example.Rentify.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.example.Rentify.Entity.Property;

@RestController
public interface PropertyDao extends JpaRepository<Property, Long> {
	
	 List<Property> findHousesByArea(String area);
	 
	 List<Property> findHousesByCity(String city);

}