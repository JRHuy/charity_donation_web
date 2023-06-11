package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "Organization")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "organizationID")
public class Organization implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "organizationID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int organizationID;

//    @Column(name = "programName", length = 50, nullable = false)
    private String organizationName;

    @Column(name = "description", length = 100, nullable = false)
    private String description;

    private int numOfProjects, projectSucceeded;

    private BigDecimal ogDonate;



    private String pfpLink;

    @OneToMany(mappedBy = "organization")
//    @OneToMany
    private List<Program> program;

    public int getOrganizationID() {
        return organizationID;
    }

    public void setOrganizationID(int organizationID) {
        this.organizationID = organizationID;
    }

    public String getOrganizationName() {
        return organizationName;
    }

    public void setOrganizationName(String organizationName) {
        this.organizationName = organizationName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getNumOfProjects() {
        return numOfProjects;
    }

    public void setNumOfProjects(int numOfProjects) {
        this.numOfProjects = numOfProjects;
    }

    public int getProjectSucceeded() {
        return projectSucceeded;
    }

    public void setProjectSucceeded(Short projectSucceeded) {
        this.projectSucceeded = projectSucceeded;
    }

    public BigDecimal getOgDonate() {
        return ogDonate;
    }

    public void setOgDonate(BigDecimal ogDonate) {
        this.ogDonate = ogDonate;
    }

    public List<Program> getProgram() {
        return program;
    }

    public void setProgram(List<Program> program) {
        this.program = program;
    }

    public String getPfpLink() {
        return pfpLink;
    }

    public void setPfpLink(String pfpLink) {
        this.pfpLink = pfpLink;
    }
}
