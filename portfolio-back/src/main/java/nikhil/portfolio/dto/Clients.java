package nikhil.portfolio.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jsp.org.jobportal.helper.AES;
import lombok.Data;

@Entity
@Data
public class Clients {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String mobile;
	private String email;
	private String message;
	
	private int otp;
	private boolean verified;
}
