package nikhil.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nikhil.portfolio.dto.Clients;


public interface ClientRepository extends JpaRepository<Clients, Integer>{

}
