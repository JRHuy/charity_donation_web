package com.example.demo.exception;

public class FaqNotFoundException extends RuntimeException {
    public FaqNotFoundException(Short id) {
        super("Could not find the FAQ with id: " + id);
    }
}
