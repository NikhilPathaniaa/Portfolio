package nikhil.portfolio.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;

import jakarta.servlet.http.HttpSession;
import nikhil.portfolio.dao.ClientDao;
import nikhil.portfolio.dao.CommentDao;
import nikhil.portfolio.dao.PostDao;
import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.dto.Post;
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
	EmailSendingHelper emailHelper;

	
	@Autowired
	ResponseStructur structure;
	
	public String save(Clients clients, BindingResult result, ModelMap map) {
		if (result.hasErrors()) {
			System.out.println("Error - There is Some Error");
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			return "false";
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
			return "true";
		}
	}

	public String submitOtp(int otp, int id, ModelMap map) {
		Clients clients = dao.findUserById(id);
		if (otp == clients.getOtp()) {
			System.out.println("Success- OTP Matched");
			clients.setVerified(true);
			dao.save(clients);
			map.put("msg", "Account Created Success");
			return "sccuss";
		} else {
			System.out.println("Failure- OTP MissMatch");
			map.put("msg", "Incorrect Otp! Try Again");
			map.put("id", clients.getId());
			return "no";
		}
	}

	public String resendOtp(int id, ModelMap map) {
		Clients clients = dao.findUserById(id);
		int otp = new Random().nextInt(100000, 999999);
		System.out.println("Otp ReGenerated - " + otp);
		clients.setOtp(otp);
		dao.save(clients);
		System.out.println("Data is Updated in db");
		emailHelper.sendOtp(clients);
		System.out.println("Otp is Sent to Email " + clients.getEmail());
		map.put("msg", "Otp Sent Again, Check");
		map.put("id", clients.getId());
		System.out.println("Control- enter-otp.html");
		return "enter-otp.html";
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

	public ResponseStructur findAllComments() {
		List<Comments> list1 =  cdao.findAllCommnets();
		
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

	public List<Comments> getCommentsByPostId(Integer postId) {
		return  cdao.findByPostId(postId);
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

	
}
