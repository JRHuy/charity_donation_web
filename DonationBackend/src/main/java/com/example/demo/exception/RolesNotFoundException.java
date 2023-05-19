package com.example.demo.exception;

public class RolesNotFoundException extends RuntimeException {
    public RolesNotFoundException(Short id) {
        super("Could not find the role with id: " + id);
    }
}
