package com.example.Rentify.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Rentify.Dao.PropertyDao;
import com.example.Rentify.Entity.Property;


@Service
public class PropertyServiceImpl implements PropertyService {
	
	@Autowired
	public PropertyDao propertyDao;
	 @Override
	    public List<Property> findAll() {
	        return propertyDao.findAll();
	    }

	    @Override
	    public void save(Property p) {
	        propertyDao.save(p);
	    }

	    @Override
	    public Optional<Property> findById(Long propertyId) {
	        return propertyDao.findById(propertyId);
	    }

	    @Override
	    public void udpateProperty(Property p) {
	        propertyDao.save(p); 
	    }

	    @Override
	    public void deleteById(Long propertyId) {
	        propertyDao.deleteById(propertyId);
	    }

	    @Override
	    public List<Property> findByCity(String city) {
	        return propertyDao.findHousesByCity(city);
	    }

	    @Override
	    public List<Property> findByArea(String area) {
	        return propertyDao.findHousesByArea(area);
	    }



}
