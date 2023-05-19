package com.example.demo.exception;

public class TransactionNotFoundException extends RuntimeException {
    public TransactionNotFoundException(int id) {
        super("Could not find the transaction with id: " + id);
    }
}
