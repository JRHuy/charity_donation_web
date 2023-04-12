package org.vti.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "userID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // auto increment
    private short userID;
    @Column(name = "isActive")
    private boolean isActive;
    @Column(length = 13, nullable = false, unique = true)
    private String phoneNum, citizenIdentityNum;
    @Column(length = 50, nullable = false)
    private String name, userEmail, userPassword;
    private Date dateOfBirth;
    private String gender;
    @ManyToOne
    @JoinColumn(name = "roleID")
    private Role role;

    public User() {
    }

    public User(boolean isActive, String name, String phoneNum, String citizenIdentityNum, String userEmail, String userPassword, Date dateOfBirth, String gender, Role role) {
//        this.userID = userID;
        this.isActive = isActive;
        this.name = name;
        this.phoneNum = phoneNum;
        this.citizenIdentityNum = citizenIdentityNum;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public short getUserID() {
        return userID;
    }

    public void setUserID(short userID) {
        this.userID = userID;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
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

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", isActive=" + isActive +
                ", phoneNum='" + phoneNum + '\'' +
                ", citizenIdentityNum='" + citizenIdentityNum + '\'' +
                ", name='" + name + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", gender='" + gender + '\'' +
                ", role=" + role +
                '}';
    }
}
