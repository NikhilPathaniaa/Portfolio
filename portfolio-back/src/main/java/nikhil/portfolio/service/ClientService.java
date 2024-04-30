package nikhil.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import nikhil.portfolio.dao.ClientDao;
import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.dto.Comments;
import nikhil.portfolio.helper.ResponseStructur;

@Component
public class ClientService {

	@Autowired
	ClientDao dao;
	
	@Autowired
	ResponseStructur structure;
	
	public ResponseStructur save(Clients clients) {
		dao.save(clients);
		return structure;
	}

	public ResponseStructur findAllRecords() {
		List<Clients> list =  dao.findAllRecords();
		
		if(list.isEmpty())
		{
			System.out.print("data not found exception");
		}
		else
		{
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			structure.setData(list);
		}
		return structure;
		
	}

	public ResponseStructur saveComments(Comments comments) {
		dao.saveComments(comments);
		return structure;
	}

	public ResponseStructur findAllComments() {
		List<Comments> list1 =  dao.findAllCommnets();
		
		if(list1.isEmpty())
		{
			System.out.print("data not found exception");
		}
		else
		{
			structure.setMessage("Data founded Success");
			structure.setStatus(HttpStatus.FOUND.value());
			structure.setData(list1);
		}
		return structure;
	}

}
