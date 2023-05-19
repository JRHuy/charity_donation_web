package com.example.demo.controller;

import com.example.demo.exception.ProgramNotFoundException;
import com.example.demo.model.Program;
import com.example.demo.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProgramController {
    @Autowired
    private ProgramRepository programRepository;

    @PostMapping("/program")
    Program newProgram(@RequestBody Program newProgram) {
        return programRepository.save(newProgram);
    }

    @GetMapping("/programs")
    List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    @GetMapping("/program/{id}")
    Program getProgramById(@PathVariable Short id) {
        return programRepository.findById(id)
                .orElseThrow(() -> new ProgramNotFoundException(id));
    }

    @PutMapping("/program/{id}")
    Program updateProgram(@RequestBody Program newProgram, @PathVariable Short id) {
        return programRepository.findById(id)
                .map(program -> {
                    program.setProgName(newProgram.getProgName());
                    program.setProgramDescription(newProgram.getProgramDescription());
                    program.setCurrentMoney(newProgram.getCurrentMoney());
                    program.setTargetMoney(newProgram.getTargetMoney());
                    program.setDonateTotal(newProgram.getDonateTotal());
                    return programRepository.save(program);
                }).orElseThrow(() -> new ProgramNotFoundException(id));
    }

    @DeleteMapping("/program/{id}")
    String deleteProgram(@PathVariable Short id) {
        if (!programRepository.existsById(id)) {
            throw new ProgramNotFoundException(id);
        }
        programRepository.deleteById(id);
        return "Program with id " + id + " has been deleted.";
    }
}
