package com.example.Rentify.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender javaMailSender;

	@Async
	public void sendEmail(String toEmail, String FirstName, String LastName, String password) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(toEmail);
		mailMessage.setSubject("Welcome to Rentify!");
		mailMessage.setFrom("puchakayalayogananda22@gmail.com");

		String emailContent = "Dear " + FirstName + ",\n\n";
		emailContent += "Thank you for registering at Rentify!\n\n";
		emailContent += "Your firstName: " + FirstName + "\n";
		emailContent += "Your lastName: " + LastName + "\n";
		emailContent += "Your password: " + password + "\n\n";
		emailContent += "We're excited to have you on board.\n\n";
		emailContent += "Best regards,\n";
		emailContent += "The Rentify Team";

		mailMessage.setText(emailContent);

		javaMailSender.send(mailMessage);
	}

}
