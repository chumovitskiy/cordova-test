package com.beuty4me.handlers;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.HandlerFunction;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

public class StaticHandler implements HandlerFunction<ServerResponse> {
    @Override
    public Mono<ServerResponse> handle(ServerRequest request) {

        return ServerResponse.ok().contentType(MediaType.TEXT_HTML)
                .syncBody(getBody(request));
    }

    private ClassPathResource getBody(ServerRequest request) {
        if ("/".equals(request.path())) {
            return new ClassPathResource("ui/index.html");
        }
        return new ClassPathResource("ui" + request.path());
    }
}
