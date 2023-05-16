package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Role")
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "roleID")
    private Short roleID;

    @Column(name = "rolename", nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleName roleName;

//    @JsonManagedReference
//    @OneToMany(mappedBy = "role")
//    private List<User> users;

    public Role() {
    }

    public Short getRoleID() {
        return roleID;
    }

    public void setRoleID(Short roleID) {
        this.roleID = roleID;
    }

    public RoleName getRoleName() {
        return roleName;
    }

    public void setRoleName(RoleName roleName) {
        this.roleName = roleName;
    }

//    public List<User> getUsersID() {
//        return this.users;
//    }
//
//    public void setUsers(List<User> users) {
//        this.users = users;
//    }

    public enum RoleName {
        ADMIN, CUSTOMER
    }
}
