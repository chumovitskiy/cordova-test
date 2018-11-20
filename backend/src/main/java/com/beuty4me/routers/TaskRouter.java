package com.beuty4me.routers;

import com.beuty4me.handlers.TaskHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class TaskRouter {

    @Bean
    public RouterFunction<ServerResponse> route(TaskHandler taskHandler) {

        return RouterFunctions
                .route(RequestPredicates.GET("/tasks")
                       .and(RequestPredicates.accept(MediaType.APPLICATION_JSON_UTF8)),
                       taskHandler::getAllTasks);
    }
}
