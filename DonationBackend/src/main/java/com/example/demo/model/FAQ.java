package com.example.demo.model;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "FAQ")
public class FAQ implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column
    @GeneratedValue
    private Short faqID;


    @Column(name = "title", length = 50, nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
