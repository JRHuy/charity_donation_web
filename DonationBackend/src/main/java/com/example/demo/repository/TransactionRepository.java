package com.example.demo.repository;

import com.example.demo.model.Transaction;
import com.example.demo.model.TransactionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionHistory, Integer> {
//    @Query(value = "select t from Donation.transaction_history t where transaction = ?1 order by t.money desc limit 3", nativeQuery = true)
    List<TransactionHistory> findTop3ByTransactionOrderByMoneyDesc(Transaction transaction);
    List<TransactionHistory> findTop3ByTransactionOrderByTransactionIDDesc(Transaction transaction);
}
