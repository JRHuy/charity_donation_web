package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;


@Entity
@Table(name = "Program")
public class Program implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "programID")
    @GeneratedValue
    private Short programID;

    @Column(length = 100, nullable = false)
    private String progName;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "organizationID", nullable = true)
    private Organization organizationID;

    @Column
    private BigDecimal targetMoney;

    @Column
    private BigDecimal currentMoney;

    @Column
    private BigDecimal donateTotal;

    @Column
    private String programDescription;

    public Short getProgramID() {
        return programID;
    }

    public void setProgramID(Short programID) {
        this.programID = programID;
    }

    public String getProgName() {
        return progName;
    }

    public void setProgName(String progName) {
        this.progName = progName;
    }

    public Organization getOrganizationID() {
        return organizationID;
    }

    public void setOrganizationID(Organization organizationID) {
        this.organizationID = organizationID;
    }

    public BigDecimal getTargetMoney() {
        return targetMoney;
    }

    public void setTargetMoney(BigDecimal targetMoney) {
        this.targetMoney = targetMoney;
    }

    public BigDecimal getCurrentMoney() {
        return currentMoney;
    }

    public void setCurrentMoney(BigDecimal currentMoney) {
        this.currentMoney = currentMoney;
    }

    public BigDecimal getDonateTotal() {
        return donateTotal;
    }

    public void setDonateTotal(BigDecimal donateTotal) {
        this.donateTotal = donateTotal;
    }

    public String getProgramDescription() {
        return programDescription;
    }

    public void setProgramDescription(String programDescription) {
        this.programDescription = programDescription;
    }
}