package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "Program")
public class Program implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "programID")
    @GeneratedValue
    private int programID;

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
    private int donateTotal;

    @Column
    private String programDescription;

    @Column
    private boolean active;

   }