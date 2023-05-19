package com.example.demo.controller;

import com.example.demo.exception.OrganizationNotFoundException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Organization;
import com.example.demo.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrganizationController {

    @Autowired
    private OrganizationRepository organizationRepository;

    @PostMapping("/organization")
    Organization newOrganization(@RequestBody Organization newOrganization) {
        return organizationRepository.save(newOrganization);
    }

    @GetMapping("/organizations")
    List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    @GetMapping("/organization/{id}")
    Organization getOrgById(@PathVariable Short id) {
        return organizationRepository.findById(id)
                .orElseThrow(() -> new OrganizationNotFoundException(id));
    }

    @PutMapping("/organization/{id}")
    Organization updateOrganization(@RequestBody Organization newOrganization, @PathVariable Short id) {
        return organizationRepository.findById(id)
                .map(org -> {
                    org.setDescription(newOrganization.getDescription());
                    org.setNumOfProjects(newOrganization.getNumOfProjects());
                    return organizationRepository.save(org);
                }).orElseThrow(() -> new OrganizationNotFoundException(id));
    }

    @DeleteMapping("/organization/{id}")
    String deleteOrganization(@PathVariable Short id) {
        if (!organizationRepository.existsById(id)) {
            throw new OrganizationNotFoundException(id);
        }
        organizationRepository.deleteById(id);
        return "Organization with id " + id + " has been deleted.";
    }
}
