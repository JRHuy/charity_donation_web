package com.example.demo.controller;

import com.example.demo.exception.ProgramNotFoundException;
import com.example.demo.exception.RolesNotFoundException;
import com.example.demo.model.Program;
import com.example.demo.model.Role;
import com.example.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping("/role")
    Role newRole(@RequestBody Role newRole) {
        return roleRepository.save(newRole);
    }

    @GetMapping("/roles")
    List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @GetMapping("/role/{id}")
    Role getRoleById(@PathVariable Short id) {
        return roleRepository.findById(id)
                .orElseThrow(() -> new RolesNotFoundException(id));
    }

    @PutMapping("/role/{id}")
    Role updateRole(@RequestBody Role newRole, @PathVariable Short id) {
        return roleRepository.findById(id)
                .map(role -> {
                    role.setRoleName(newRole.getRoleName());
//                    role.setUsers(newRole.getUsersID());
                    return roleRepository.save(role);
                }).orElseThrow(() -> new RolesNotFoundException(id));
    }

    @DeleteMapping("/role/{id}")
    String deleteRole(@PathVariable Short id) {
        if (!roleRepository.existsById(id)) {
            throw new RolesNotFoundException(id);
        }
        roleRepository.deleteById(id);
        return "Role with id " + id + " has been deleted.";
    }
}
