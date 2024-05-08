package nikhil.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import jakarta.servlet.http.HttpSession;
import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.dto.Post;
import nikhil.portfolio.dto.User;
import nikhil.portfolio.helper.ResponseStructur;
import nikhil.portfolio.service.ClientService;

@RestController
@CrossOrigin
public class GeneralController {

	@Autowired
	ClientService service;
	
	@PostMapping("/add-User")
	public String saveClient(@RequestBody User user) {
		System.out.println(user);
		return service.saveUser(user);
	}
	
	@PostMapping("/find-User")
	public String fetchUser() {
		return service.findUser();
	}
	
	@PostMapping("/add")
	public int saveClient(@RequestBody Clients clients,BindingResult result, ModelMap map) {
		System.out.println(clients);
		return service.save(clients,result, map);
	}
	
	@GetMapping("/find")
	public ResponseEntity<ResponseStructur> fetchClient() {
		
		return new ResponseEntity<ResponseStructur>(service.findAllRecords(),HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/submit-otp")
	public String submitOtp(@RequestParam String otp, @RequestParam String id) {
		 System.out.println("Received OTP: " + otp);
		System.out.println("Control - /submit-otp Get , Recieved otp");
		return service.submitOtp(otp, id);
	}
	
	
//	@PostMapping("/add/Comment")
//	public ResponseEntity<ResponseStructur> saveComment(@RequestBody Comments comments) {
//		System.out.println(comments);
//		return new ResponseEntity<ResponseStructur>(service.saveComments(comments),HttpStatus.NOT_FOUND);
//	}
//	
//	@GetMapping("/Comment")
//	public ResponseEntity<Page<Comments>> fetchComments(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) 
//	{
//		
//		Pageable pageable = PageRequest.of(page, size);
//        Page<Comments> commentsPage = service.findAllComments(pageable);
//        
//        return new ResponseEntity<>(commentsPage, HttpStatus.OK);
//	}
	
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
	
	 @GetMapping("/post/{postId}/comments")
	 	public ResponseEntity<Page<Comments>> getCommentsByPostId(@PathVariable Integer postId, Pageable pageable) {
	        Page<Comments> commentsPage = service.getCommentsByPostId(postId, pageable);
	        return new ResponseEntity<>(commentsPage, HttpStatus.OK);
	    }
	 
	 	

		@PostMapping("/login")
		public String login(@RequestParam("email_mobile") String emph, @RequestParam String password, ModelMap map,
				HttpSession session) {
			return service.login(emph, password, map, session);
		}
}
