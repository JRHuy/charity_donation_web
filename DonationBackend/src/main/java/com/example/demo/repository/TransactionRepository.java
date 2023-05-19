package com.example.demo.repository;

import com.example.demo.model.TransactionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<TransactionHistory, Integer> {
}
