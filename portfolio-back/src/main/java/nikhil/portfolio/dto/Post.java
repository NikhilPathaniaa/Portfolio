package nikhil.portfolio.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Post {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	 private String title;
	 private String title1;
	 private String title2;
	 private String title4;
	 
	 @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	 @JsonManagedReference
	    private List<Comments> comments = new ArrayList<>();
}
