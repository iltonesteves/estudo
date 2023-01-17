package br.com.maddytec.kafka.consumer.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ConsumerBoraPraticar {

	private final Logger logger = LoggerFactory.getLogger(ConsumerBoraPraticar.class);

	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;

	@Value("${topic.bora-praticar-retorno}")
	private String topicBoraPraticarRetorno;

	@KafkaListener(topics = "${topic.bora-praticar}", groupId = "group_id")
	public void consume(String message) throws IOException {
		logger.info("Consumindo mensagem {}", message);
	
		sendMessage(message);

	}

	public void sendMessage(String message) {		
		this.kafkaTemplate.send(topicBoraPraticarRetorno, message);
	}
}