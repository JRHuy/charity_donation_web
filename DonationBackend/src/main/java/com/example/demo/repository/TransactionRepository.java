package com.example.demo.repository;

import com.example.demo.model.Transaction;
import com.example.demo.model.TransactionHistory;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionHistory, Integer> {
//    @Query(value = "select t from Donation.transaction_history t where transaction = ?1 order by t.money desc limit 3", nativeQuery = true)
    List<TransactionHistory> findTop3ByProgram_programIDOrderByMoneyDesc(int programID);
//    @Query("select t from TransactionHistory t where t.program.programID = ?1")
//    List<TransactionHistory> findTop10Donors(int programID);
    List<TransactionHistory> findTop3ByProgram_programIDOrderByTransactionIDDesc(int transactionID);
    List<TransactionHistory> findByUser_userIDOrderByTransactionIDDesc(int userID);
}
