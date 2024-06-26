package nikhil.portfolio.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;

import jakarta.servlet.http.HttpSession;
import nikhil.portfolio.dao.ClientDao;
import nikhil.portfolio.dao.CommentDao;
import nikhil.portfolio.dao.PostDao;
import nikhil.portfolio.dao.UserDao;
import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.dto.Post;
import nikhil.portfolio.dto.User;
import nikhil.portfolio.helper.EmailSendingHelper;
import nikhil.portfolio.helper.ResponseStructur;

@Component
public class ClientService {

	@Autowired
	ClientDao dao;
	
	 
	@Autowired
	CommentDao cdao;
	
	@Autowired
	PostDao pdao;
	
	@Autowired
	UserDao udao;

	@Autowired
	EmailSendingHelper emailHelper;
	
	@Autowired
	ResponseStructur structure;
	
	public int save(Clients clients, BindingResult result, ModelMap map) {
		
		
		if (result.hasErrors()) {
			System.out.println("Error - There is Some Error");
			return 0;
		} else {
			System.out.println("No Errors");
			int otp = new Random().nextInt(100000, 999999);
			System.out.println("Otp Generated - " + otp);
			clients.setOtp(otp);
			dao.save(clients);
			System.out.println("Data is Saved in db");
			emailHelper.sendOtp(clients);
			System.out.println("Otp is Sent to Email " + clients.getEmail());
			map.put("msg", "Otp Sent Success");
			map.put("id", clients.getId());
			System.out.println("Control- enter-otp.html");
			System.out.println("ID : "+clients.getId());
			return clients.getId();
		}
	}
	
	public String submitOtp(String otp, String id, String status) {
		Clients clients = dao.findUserById(Integer.parseInt(id));
		if (Integer.parseInt(otp) == clients.getOtp()) {
			System.out.println("Success- OTP Matched");
			clients.setVerified(true);
			dao.save(clients);
			return "success";
		}
		else if(status.equals("false") && Integer.parseInt(otp) != clients.getOtp())
		{
			dao.deleteById(Integer.parseInt(id));
			System.out.println("delete from db");
			return "deletion";

		}
		else {
			
			System.out.println("Failure- OTP MissMatch");
			return "failure";
		}
	}
	
	public ResponseStructur findAllRecords() {
		List<Clients> list =  dao.findAllRecords();
		
		if(list.isEmpty())
		{
			System.out.print("data not found exception");
		}
		else
		{
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			structure.setData(list);
		}
		return structure;
		
	}

	public ResponseStructur saveComments(Comments comments) {
		cdao.saveComments(comments);
		
		return structure;
	}

	public Page<Comments> findAllComments(Pageable pageable) {
		return cdao.findAllComments(pageable);
	}

	public ResponseStructur savePost(Post post) {
			pdao.savePost(post);
			
            return structure;
	}

	public ResponseStructur findAllPost() {
		List<Post> list1 =  pdao.findAllPost();
		
		if(list1.isEmpty())
		{
			System.out.print("data not found exception");
		}
		else
		{
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			structure.setData(list1);
		}
		return structure;
	}

	public Page<Comments> getCommentsByPostId(Integer postId, Pageable pageable) {
		return  cdao.findByPostId(postId, pageable);
	}

	public ResponseStructur saveCommentById(Integer postId, Comments comment) {
	       Optional<Post> postOptional = pdao.findCommentById(postId);
	        if (!postOptional.isPresent()) {
	            return null; // Post not found
	        }

	        // Associate the comment with the post
	        Post post = postOptional.get();
	        comment.setPost(post);

	        // Save the comment
	        Comments savedComment = cdao.saveComment(comment);

	        // Return success response
	        return structure;
	}



	public String login(String emph, String password, ModelMap map, HttpSession session) {
		// TODO Auto-generated method stub
		return null;
	}


	public String findUser() {
		List<User> list =  udao.findUser();
		
		if(list.isEmpty())
		{
			System.out.print("data not found exception");
		}
		else
		{
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			structure.setData(list);
		}
		return "finded";
	}

	public String saveUser(User user) {
		udao.saveUser(user);
		return "success";
	}
	
}
