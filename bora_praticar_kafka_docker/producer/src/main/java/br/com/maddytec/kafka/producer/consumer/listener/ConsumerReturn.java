package br.com.maddytec.kafka.producer.consumer.listener;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerReturn {



	private final Logger logger = LoggerFactory.getLogger(ConsumerReturn.class);
	

	@KafkaListener(topics = "${topic.bora-praticar-retorno}", groupId = "group_id")
	public void consume(String message) throws IOException {
		logger.info("Mensagem Recebida -> {}", message);

	}

}