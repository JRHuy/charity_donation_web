package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(int id) {
        super("Cannot find the user with the provided id: " + id);
    }
    public UserNotFoundException(String phoneNum) {
        super("Cannot find the user with the provided name: " + phoneNum);
    }
}
