package com.example.demo.controller;


import com.example.demo.exception.TransactionNotFoundException;
import com.example.demo.model.TransactionHistory;
import com.example.demo.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.List;

@RestController
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping("/transaction")
    TransactionHistory newTransaction(@RequestBody TransactionHistory newTransaction) {

        return transactionRepository.save(newTransaction);
    }

    @GetMapping("/transactions")
    List<TransactionHistory> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @GetMapping("/transaction/{id}")
    TransactionHistory getTransactionById(@PathVariable int id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new TransactionNotFoundException(id));

    }

    @PutMapping("/transaction/{id}")
    TransactionHistory updateTransaction(@RequestBody TransactionHistory newTransaction, @PathVariable int id) {
        return transactionRepository.findById(id)
                .map(transaction -> {
                    transaction.setTransactionTime(newTransaction.getTransactionTime());
                    transaction.setActive(newTransaction.isActive());
                    transaction.setMoney(newTransaction.getMoney());
                    transaction.setDateConfirm(newTransaction.getDateConfirm());
                    transaction.setUser(newTransaction.getUser());
                    transaction.setNote(newTransaction.getNote());
                    return transactionRepository.save(transaction);
                }).orElseThrow(() -> new TransactionNotFoundException(id));
    }

    @DeleteMapping("/transaction/{id}")
    String deleteTransaction(@PathVariable int id) {
        if (!transactionRepository.existsById(id)) {
            throw new TransactionNotFoundException(id);
        }
        transactionRepository.deleteById(id);
        return "Transaction with id " + id + " has been deleted.";
    }
}
