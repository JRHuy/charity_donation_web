package com.example.demo.repository;

import com.example.demo.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrganizationRepository extends JpaRepository<Organization, Short> {
}
