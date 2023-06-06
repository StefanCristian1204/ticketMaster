package com.codecool.ticketmstr;

import com.codecool.ticketmstr.config.RsaKeyProperties;
import com.codecool.ticketmstr.model.Users;
import com.codecool.ticketmstr.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:5173")

public class FullstackBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository users, PasswordEncoder encoder){
		return arts -> {
			Users user = new Users("user", encoder.encode("password"), "Gary", "gary@gmail.com");
			user.setRoles("ROLE_USER");
			users.save(user);

			Users admin = new Users("admin", encoder.encode("password"), "Mary", "mary@gmail.com");
			admin.setRoles("ROLE_ADMIN,ROLE_USER");
			users.save(admin);
		};
	}
}

