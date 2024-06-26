package nikhil.portfolio.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dto.Post;
import nikhil.portfolio.repository.PostRepository;

@Component
public class PostDao {
	@Autowired
	PostRepository repository;

	public void savePost(Post post) {
		repository.save(post);
		
	}

	public List<Post> findAllPost() {
		return repository.findAll();
	}

	public Optional<Post> findCommentById(Integer postId) {
		
		return repository.findById(postId);
	}

}
