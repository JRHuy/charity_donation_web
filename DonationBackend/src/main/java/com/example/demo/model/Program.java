package com.example.demo.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "Program")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "programID")
public class Program implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "programID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int programID;

    @Column(length = 100, nullable = false)
    private String programName;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "organizationID", nullable = true)
    private Organization organization;

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

    @Column
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate deadline;

}