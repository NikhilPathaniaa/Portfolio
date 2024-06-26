package nikhil.portfolio.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Blogs {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	 private String title;
	 
	 @Lob // Use @Lob annotation for large objects
	 @Column(columnDefinition = "TEXT")
	 private String content;
	 
	 private String image;
	 
//	 @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	 @JsonManagedReference
//	 private List<Comments> comments = new ArrayList<>();

}
