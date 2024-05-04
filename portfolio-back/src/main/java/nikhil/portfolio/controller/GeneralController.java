package nikhil.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudinary.Url;

import jakarta.servlet.http.HttpSession;
import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.dto.Post;
import nikhil.portfolio.helper.ResponseStructur;
import nikhil.portfolio.service.ClientService;

@RestController
@CrossOrigin
public class GeneralController {

	@Autowired
	ClientService service;
	
	@PostMapping("/add")
	public String saveClient(@RequestBody Clients clients,BindingResult result, ModelMap map) {
		System.out.println(clients);
		return service.save(clients,result, map);
	}

	@PostMapping("/submit_otp")
	public String submitOtp(@RequestParam int otp, @RequestParam int id, ModelMap map) {
		System.out.println("Control - /submit-otp Get , Recieved otp");
		return service.submitOtp(otp, id, map);
	}

	@GetMapping("/resend-otp/{id}")
	public String resendOtp(@PathVariable int id, ModelMap map) {
		return service.resendOtp(id, map);
	}
	
	@GetMapping("/find")
	public ResponseEntity<ResponseStructur> fetchClient() {
		
		return new ResponseEntity<ResponseStructur>(service.findAllRecords(),HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/add/Comment")
	public ResponseEntity<ResponseStructur> saveComment(@RequestBody Comments comments) {
		System.out.println(comments);
		return new ResponseEntity<ResponseStructur>(service.saveComments(comments),HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/Comment")
	public ResponseEntity<ResponseStructur> fetchComments() {
		
		return new ResponseEntity<ResponseStructur>(service.findAllComments(),HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/add/post")
    public ResponseEntity<ResponseStructur> savePost(@RequestBody Post post) {
        return new ResponseEntity<ResponseStructur>(service.savePost(post), HttpStatus.NOT_FOUND);
    }
	
	@GetMapping("find/Post")
	public ResponseEntity<ResponseStructur> fetchPost() {
		
		return new ResponseEntity<ResponseStructur>(service.findAllPost(),HttpStatus.NOT_FOUND);
	}
	
	
	 @PostMapping("/add/{postId}")
	    public ResponseEntity<ResponseStructur> saveCommentByPostId(@PathVariable Integer postId, @RequestBody Comments comment) {
	        ResponseStructur response = service.saveCommentById(postId, comment);
	        if (response != null) {
	            return new ResponseEntity<>(response, HttpStatus.CREATED);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	
	 @GetMapping("/post/{postId}")
	    public ResponseEntity<List<Comments>> getCommentsByPostId(@PathVariable Integer postId) {
	        List<Comments> comments = service.getCommentsByPostId(postId);
	        return new ResponseEntity<>(comments, HttpStatus.OK);
	    }
	 
	 	

		@PostMapping("/login")
		public String login(@RequestParam("email_mobile") String emph, @RequestParam String password, ModelMap map,
				HttpSession session) {
			return service.login(emph, password, map, session);
		}
}
