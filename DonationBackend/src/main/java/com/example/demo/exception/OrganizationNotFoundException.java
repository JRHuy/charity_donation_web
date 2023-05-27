package com.example.demo.exception;

public class OrganizationNotFoundException extends RuntimeException {
    public OrganizationNotFoundException(int id) {
        super("Could not find the organization with id: " + id);
    }
}
