package nikhil.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nikhil.portfolio.dto.Comments;

public interface CommentRepository extends JpaRepository<Comments, Integer>{

}
