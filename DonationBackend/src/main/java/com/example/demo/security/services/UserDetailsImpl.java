package com.example.demo.security.services;

import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

public class UserDetailsImpl implements UserDetails {
    private int userID;
    private boolean isActive;
    private String phoneNum;
    private String citizenIdentityNum;
    private String name;
    private String userEmail;
    @JsonIgnore
    private String userPassword;
    private LocalDate dateOfBirth;
    private String gender;

    private Role.RoleName role;
    private BigDecimal money;

    public UserDetailsImpl(int userID, boolean isActive, String phoneNum, String citizenIdentityNum, String name, String userEmail, String userPassword,
                           LocalDate dateOfBirth, String gender, Role.RoleName role, BigDecimal money) {
        this.userID = userID;
        this.isActive = isActive;
        this.phoneNum = phoneNum;
        this.citizenIdentityNum = citizenIdentityNum;
        this.name = name;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.role = role;
        this.money = money;
    }

    public static UserDetailsImpl build(User user) {
        return new UserDetailsImpl(
                user.getUserID(),
                user.getIsActive(),
                user.getPhoneNum(),
                user.getCitizenIdentityNum(),
                user.getName(),
                user.getUserEmail(),
                user.getUserPassword(),
                user.getDateOfBirth(),
                user.getGender(),
                user.getRole().getRoleName(),
                user.getMoney());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    public int getUserID() {
        return userID;
    }

    public String getName() {
        return name;
    }

    public String getUserEmail() {
        return userEmail;
    }

    @Override
    public String getPassword() {
        return userPassword;
    }

    @Override
    public String getUsername() {
        return phoneNum;
    }

//    public String getPhoneNum() {
//        return phoneNum;
//    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
