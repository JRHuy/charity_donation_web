package com.example.demo.exception;

public class ProgramNotFoundException extends RuntimeException {
    public ProgramNotFoundException(int id) {
        super("Could not find the program with id: " + id);
    }
}
