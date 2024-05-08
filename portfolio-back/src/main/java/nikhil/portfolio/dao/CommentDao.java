package nikhil.portfolio.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

	public Page<Comments> findByPostId(Integer postId, Pageable pageable) {
        return commentRepository.findByPostId(postId, pageable);
    }

	public Comments saveComment(Comments comment) {
		// TODO Auto-generated method stub
		return commentRepository.save(comment);
	}

	public Page<Comments> findAllComments(Pageable pageable) {
		 return commentRepository.findAll(pageable);	}

}
