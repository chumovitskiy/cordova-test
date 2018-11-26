package com.beuty4me;

import com.beuty4me.handlers.*;
import org.springframework.http.server.reactive.ReactorHttpHandlerAdapter;
import org.springframework.web.reactive.function.server.*;
import reactor.ipc.netty.http.server.HttpServer;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.RouterFunctions.toHttpHandler;


public class TodoService {
    public static void main(String[] args) throws InterruptedException {
        HandlerFunction<ServerResponse> ui = new StaticHandler();
        HandlerFunction<ServerResponse> tasks = new AllTasksHandler();

        //create routing
        var tasksHandler = new ReactorHttpHandlerAdapter(toHttpHandler(
                route(GET("/tasks"), tasks)
                .andRoute(GET("/*"), ui)
                .andRoute(GET("/plugins/cordova-plugin-device/src/browser/*"), ui)
                .andRoute(GET("/plugins/cordova-plugin-device/www/*"), ui)
        ));

        //start Netty
        HttpServer
                .create()
                .newHandler(tasksHandler)
                .block();

        //lock thread
        Thread.currentThread().join();
    }
}
