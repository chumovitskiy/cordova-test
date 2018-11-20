package com.beuty4me.handlers;

import com.beuty4me.pojos.Task;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class TaskHandler {
    public Mono<ServerResponse> getAllTasks(ServerRequest request) {
        return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(BodyInserters.fromObject(new Task[] {
                        new Task(1, "Hello"),
                        new Task(2, "From"),
                        new Task(3, "Webflux")
                }));
    }
}
