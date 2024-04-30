package nikhil.portfolio.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.repository.ClientRepository;

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

}
