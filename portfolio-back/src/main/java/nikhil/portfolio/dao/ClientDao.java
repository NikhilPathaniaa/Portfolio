package nikhil.portfolio.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.repository.ClientRepository;
import nikhil.portfolio.repository.CommentRepository;

@Component
public class ClientDao {
	
	@Autowired
	ClientRepository repository;

	
	public void save(Clients clients) {
		repository.save(clients);
		
	}

	public List<Clients> findAllRecords() {
		
		return repository.findAll();
	}

	public Clients findUserById(int id) {
		return repository.findById(id).orElse(null);
	}

	public void deleteById(int id) {
		repository.deleteById(id);
		
	}

}
