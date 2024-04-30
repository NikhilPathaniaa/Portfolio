package nikhil.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dao.ClientDao;
import nikhil.portfolio.dto.Clients;

@Component
public class ClientService {

	@Autowired
	ClientDao dao;
	
	public String saveSudent(Clients clients) {
		// TODO Auto-generated method stub
		dao.save(clients);
		return "save the data";
	}

}
