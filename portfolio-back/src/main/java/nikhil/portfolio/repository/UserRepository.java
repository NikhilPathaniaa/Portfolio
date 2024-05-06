package nikhil.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nikhil.portfolio.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
