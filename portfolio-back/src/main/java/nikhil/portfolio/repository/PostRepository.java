package nikhil.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nikhil.portfolio.dto.Post;

public interface PostRepository extends JpaRepository<Post ,Integer>{

}
