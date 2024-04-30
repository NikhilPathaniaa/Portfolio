package nikhil.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nikhil.portfolio.dto.Clients;
import nikhil.portfolio.service.ClientService;

@RestController
@CrossOrigin
public class GeneralController {

	@Autowired
	ClientService service;
	
	@PostMapping("/add")
	public String saveClient(@RequestBody Clients clients) {
		System.out.println(clients);
		return service.saveSudent(clients);
	}
	
}
