package nikhil.portfolio.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.repository.ClientRepository;
import nikhil.portfolio.repository.CommentRepository;

@Component
public class CommentDao {
	
	@Autowired
	ClientRepository repository;

	@Autowired
	CommentRepository commentRepository;
	
	public void saveComments(Comments comments) {
		commentRepository.save(comments);
		
	}

	public List<Comments> findAllCommnets() {
		return commentRepository.findAll();
	}

}
