package com.example.Rentify.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Rentify.Dao.UserDao;
import com.example.Rentify.Entity.UserEntity;
import com.example.Rentify.Service.EmailService;
import com.example.Rentify.Service.UserService;



@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:4200")
public class UserController {
	
	@Autowired
	public UserDao userDao;
	
	@Autowired
	public UserService userService;
	
	@Autowired
	public EmailService emailService;
	
    @PostMapping("/register")
	public ResponseEntity<Map<String, String>> singup(@RequestBody UserEntity user) {
		this.userService.addUser(user);
		Map<String, String> response = new HashMap<String, String>();
		response.put("status", "success");
		response.put("message", "User registered!!");
		 emailService.sendEmail(user.getEmail(), user.getFirstName(),user.getLastName(), user.getPassword());
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.CREATED);
	}
    
    @GetMapping("/all")	
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        List<UserEntity> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserEntity user) {
    	UserEntity existingUser = userService.findByEmail(user.getEmail());
        if(existingUser.getPassword().equals(user.getPassword())) {
        	UserEntity sendcustomer = new UserEntity();
        	sendcustomer.setId(existingUser.getId());
        	sendcustomer.setPhoneNumber(existingUser.getPhoneNumber());
        	sendcustomer.setFirstName(existingUser.getFirstName());
        	sendcustomer.setLastName(existingUser.getLastName());
        	sendcustomer.setEmail(existingUser.getEmail());
        	sendcustomer.setPassword(existingUser.getPassword());
        	sendcustomer.setRole(existingUser.getRole());
        	return ResponseEntity.ok(sendcustomer);
        } else {
        	return (ResponseEntity<?>) ResponseEntity.internalServerError();
        }
    }
    



}
