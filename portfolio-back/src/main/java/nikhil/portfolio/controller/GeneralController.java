package nikhil.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.helper.ResponseStructur;
import nikhil.portfolio.service.ClientService;

@RestController
@CrossOrigin
public class GeneralController {

	@Autowired
	ClientService service;
	
	@PostMapping("/add")
	public ResponseEntity<ResponseStructur> saveClient(@RequestBody Clients clients) {
		System.out.println(clients);
		return new ResponseEntity<ResponseStructur>(service.save(clients),HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/find")
	public ResponseEntity<ResponseStructur> fetchClient() {
		
		return new ResponseEntity<ResponseStructur>(service.findAllRecords(),HttpStatus.NOT_FOUND);
	}
	
}
