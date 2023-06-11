package com.example.demo.controller;

import com.example.demo.DTO.MoneyFormDTO;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Program;
import com.example.demo.model.TransactionHistory;
import com.example.demo.model.User;
import com.example.demo.repository.ProgramRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/api/user")
    User newUser(@RequestBody User newUser) {
        User user = addNewUser(newUser);
        return userRepository.save(user);
    }

    private User addNewUser(User newUser) {
        User user = new User();
        user.setIsActive(newUser.getIsActive());
        user.setPhoneNum((newUser.getPhoneNum()));
        user.setCitizenIdentityNum(newUser.getCitizenIdentityNum());
        user.setName(newUser.getName());
        user.setUserEmail(newUser.getUserEmail());
        user.setUserPassword(passwordEncoder.encode(newUser.getUserPassword()));
        user.setDateOfBirth(newUser.getDateOfBirth());
        user.setGender(newUser.getGender());
        user.setRole(newUser.getRole());
        user.setMoney(BigDecimal.valueOf(0.00));

        return user;
    }

    @GetMapping("/api/users")
    @PreAuthorize("hasAuthority('ADMIN')")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("api/user/{id}")
    User getUserById(@PathVariable int id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("api/user/{id}")
    User updateUser(@RequestBody User updatedUser, @PathVariable int id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setPhoneNum(updatedUser.getPhoneNum());
                    user.setCitizenIdentityNum(updatedUser.getCitizenIdentityNum());
                    user.setName(updatedUser.getName());
                    user.setUserEmail(updatedUser.getUserEmail());
//                    user.setUserPassword(updatedUser.getUserPassword());
                    user.setUserPassword(passwordEncoder.encode(updatedUser.getUserPassword()));
                    user.setDateOfBirth(updatedUser.getDateOfBirth());
                    user.setGender(updatedUser.getGender());
                    user.setIsActive(updatedUser.getIsActive());
                    user.setRole(updatedUser.getRole());

                    return userRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }

//    @DeleteMapping("api/user/{id}")
//    String deleteUser(@PathVariable int id) {
//        if(!userRepository.existsById(id))
//            throw new UserNotFoundException(id);
//        userRepository.deleteById(id);
//
//        return "User with id " + id + " has been deleted!";
//    }

    @DeleteMapping("api/user/{id}")
    String deleteUser(@PathVariable int id) {
        userRepository.findById(id)
                .map(user -> {
                    user.setIsActive(false);
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));

        return "User with id " + id + " has been deleted!";
    }
}
