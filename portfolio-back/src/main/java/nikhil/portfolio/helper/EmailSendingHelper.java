package nikhil.portfolio.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.internet.MimeMessage;
import nikhil.portfolio.dto.Clients;

@Service
public class EmailSendingHelper {

	@Autowired
	JavaMailSender mailSender;

	@Autowired
	TemplateEngine templateEngine;

	public void sendOtp(Clients clients) {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		try {
			helper.setFrom("nikhilpathania1990@gmail.com", "Portfolio");
			helper.setTo(clients.getEmail());
			helper.setSubject("OTP Verification Process");

			Context context = new Context();
			context.setVariable("name", clients.getName());
			context.setVariable("otp", clients.getOtp());

			String text = templateEngine.process("MyEmail.html", context);

			helper.setText(text, true);

			mailSender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error - Not Able to send Email");
		}
	}
}
