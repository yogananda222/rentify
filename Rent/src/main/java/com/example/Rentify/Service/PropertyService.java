package com.example.Rentify.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.Rentify.Entity.Property;

@Service
public interface PropertyService {
	
	public List<Property>findAll();
	
	public void save(Property p);
	
	public Optional<Property>findById(Long propertyId);
	
	public void udpateProperty(Property p);
	
	public void deleteById(Long propertyId);
	
	public List<Property>findByCity(String city);
	
	List<Property> findByArea(String area);

}
