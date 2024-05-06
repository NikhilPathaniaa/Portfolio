package nikhil.portfolio.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dto.User;
import nikhil.portfolio.repository.UserRepository;

@Component
public class UserDao {

	@Autowired
	UserRepository repository;
	
	public void saveUser(User user) {
		repository.save(user);
		
	}

	public List<User> findUser() {
		return repository.findAll();
	}
}
