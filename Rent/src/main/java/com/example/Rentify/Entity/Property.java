package com.example.Rentify.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Property {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="property_Id")
	public long Id; 
	
	@ManyToOne
	private UserEntity user;
	public String HouseImage;
	public String city;
	public String area; 
	public String numberOfBedrooms;
	public String numberOfBathrooms;
	public String landmarks;
	
	
	public Property() {
		
	}
	
	
	public Property(long Id, String HouseImage, String city, String area, String numberOfBedrooms, String numberOfBathrooms, String landmarks) {
		super();
		this.Id =Id; 
		this.HouseImage = HouseImage; 
		this.city = city; 
		this.area = area; 
		this.numberOfBedrooms = numberOfBedrooms;
		this.numberOfBathrooms = numberOfBathrooms; 
		this.landmarks = landmarks; 
		
	}


	public long getId() {
		return Id;
	}


	public void setId(long id) {
		Id = id;
	}


	public UserEntity getUser() {
		return user;
	}


	public void setUser(UserEntity user) {
		this.user = user;
	}


	public String getHouseImage() {
		return HouseImage;
	}


	public void setHouseImage(String houseImage) {
		HouseImage = houseImage;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getArea() {
		return area;
	}


	public void setArea(String area) {
		this.area = area;
	}


	public String getNumberOfBedrooms() {
		return numberOfBedrooms;
	}


	public void setNumberOfBedrooms(String numberOfBedrooms) {
		this.numberOfBedrooms = numberOfBedrooms;
	}


	public String getNumberOfBathrooms() {
		return numberOfBathrooms;
	}


	public void setNumberOfBathrooms(String numberOfBathrooms) {
		this.numberOfBathrooms = numberOfBathrooms;
	}


	public String getLandmarks() {
		return landmarks;
	}


	public void setLandmarks(String landmarks) {
		this.landmarks = landmarks;
	}
	
	

}
