package com.example.demo.payload.request;

import com.example.demo.model.Role;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public class RegisterRequest {
    @NotBlank
    private String phoneNum;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String citizenIdentityNum;
    @NotBlank
    private String name;
    @NotBlank
    private LocalDate dateOfBirth;
    @NotBlank
    private String gender;

    private Role role;

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
