package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

//import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
public class User implements Serializable {
//    private static final long serialVersionUID = 1L;
    @Id
//    @Column(name = "userID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // auto increment
    private int userID;
//    @Column(name = "isActive")
    private boolean isActive;
    @Column(length = 13, nullable = false, unique = true)
    private String phoneNum;
    @Column(length = 13, nullable = false, unique = true)
    private String citizenIdentityNum;
    @Column(length = 50, nullable = false)
    private String name;
    @Column(length = 50, nullable = false, unique = true)
    private String userEmail;
    private String userPassword;
    private LocalDate dateOfBirth;
    private String gender;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "roleID")
    private Role role;
    public User() {
    }

    public User(boolean isActive, String phoneNum, String citizenIdentityNum, String name, String userEmail, String userPassword, LocalDate dateOfBirth, String gender, Role role) {
        this.isActive = isActive;
        this.phoneNum = phoneNum;
        this.citizenIdentityNum = citizenIdentityNum;
        this.name = name;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.role = role;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getCitizenIdentityNum() {
        return citizenIdentityNum;
    }

    public void setCitizenIdentityNum(String citizenIdentityNum) {
        this.citizenIdentityNum = citizenIdentityNum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
