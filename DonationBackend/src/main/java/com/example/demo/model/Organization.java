package com.example.demo.model;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "Organization")
public class Organization implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "organizationID")
    @GeneratedValue
    private Short organizationID;

    @Column(name = "programName", length = 50, nullable = false)
    private String programName;

    @Column(name = "description", length = 100, nullable = false)
    private String description;

    private Short numOfProjects, projectSucceeded;

    private BigDecimal ogDonate;

    @OneToMany (mappedBy = "organizationID")
    private List<Program> program;

    public Short getOrganizationID() {
        return organizationID;
    }

    public void setOrganizationID(Short organizationID) {
        this.organizationID = organizationID;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public short getNumOfProjects() {
        return numOfProjects;
    }

    public void setNumOfProjects(Short numOfProjects) {
        this.numOfProjects = numOfProjects;
    }

    public Short getProjectSucceeded() {
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
}
