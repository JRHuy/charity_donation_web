package com.example.demo.exception;

public class NotEnoughMoneyException extends RuntimeException{
    public NotEnoughMoneyException() {
        super("You don't have enough money to make a donation");
    }
}
