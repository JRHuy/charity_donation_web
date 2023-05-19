package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;


import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


import java.util.Date;

@Entity
@Table(name = "TransactionHistory")
public class TransactionHistory implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transactionID")
    private int  transactionID ;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @Column(length = 50, nullable = false)
//    @DateTimeFormat(iso = DateTimeFormatter.ISO_LOCAL_DATE_TIME)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime transactionTime;
    private Date dateConfirm;

    private String note;

    @Column(name = "isActive")
    private boolean isActive;

    @Column(name = "money")
    private BigDecimal money;

    public TransactionHistory(){


    }

    public TransactionHistory(User user, LocalDateTime transactionTime, boolean isActive, Date dateConfirm, String note, BigDecimal money){
        this.user = user;
        this.transactionTime = transactionTime;
        this.isActive = isActive;
        this.dateConfirm = dateConfirm;
        this.note = note;
        this.money = money;
    }

    public int getTransactionID(){
        return transactionID;
    }
    public void setTransactionID(int transactionID){
        this.transactionID = transactionID;
    }

    public User getUser(){
        return user;
    }
    public void setUser(User user){
        this.user = user;
    }

    public LocalDateTime getTransactionTime(){
        return transactionTime;
    }
    public void setTransactionTime(LocalDateTime transactionTime){
        this.transactionTime = transactionTime;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Date getDateConfirm(){
        return dateConfirm;
    }

    public void setDateConfirm(Date dateConfirm){
        this.dateConfirm = dateConfirm;
    }

    public String getNote(){
        return note;
    }

    public void setNote(String note){
        this.note = note;
    }

    public BigDecimal getMoney(){
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

}