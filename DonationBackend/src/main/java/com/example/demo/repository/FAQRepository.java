package com.example.demo.repository;

import com.example.demo.model.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FAQRepository extends JpaRepository<FAQ, Short> {
}
