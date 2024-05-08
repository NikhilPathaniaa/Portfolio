package nikhil.portfolio.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import nikhil.portfolio.dto.Comments;

public interface CommentRepository extends JpaRepository<Comments, Integer>{

	 List<Comments> findByPostId(Integer postId);

	Page<Comments> findByPostId(Integer postId, Pageable pageable);
}
