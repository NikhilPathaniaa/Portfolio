package nikhil.portfolio.helper;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class ResponseStructur<T> {
	private String message;
	private int status;
	private T data;
}
