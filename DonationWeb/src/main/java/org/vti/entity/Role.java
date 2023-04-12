package org.vti.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Role")
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "roleID")
    private short roleID;

    @Column(name = "`rolename`", nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleName roleName;

    @OneToMany(mappedBy = "role")
    private List<User> users;

    public Role() {
    }

    public short getRoleID() {
        return roleID;
    }

    public void setRoleID(short roleID) {
        this.roleID = roleID;
    }

    public RoleName getRoleName() {
        return roleName;
    }

    public void setRoleName(RoleName roleName) {
        this.roleName = roleName;
    }

    public enum RoleName {
        ADMIN, CUSTOMER;
    }
}
