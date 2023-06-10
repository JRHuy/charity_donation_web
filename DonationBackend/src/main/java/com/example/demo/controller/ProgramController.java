package com.example.demo.controller;

import com.example.demo.exception.OrganizationNotFoundException;
import com.example.demo.exception.ProgramNotFoundException;
import com.example.demo.model.Program;
import com.example.demo.repository.OrganizationRepository;
import com.example.demo.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProgramController {
    @Autowired
    private ProgramRepository programRepository;
    @Autowired
    private OrganizationRepository organizationRepository;

    @PostMapping("/program")
    Program newProgram(@RequestBody Program newProgram) {
        organizationRepository.findById(newProgram.getOrganization().getOrganizationID())
                .map(organization -> {
                    organization.setNumOfProjects(organization.getNumOfProjects() + 1);
//                    List<Program> programs = organization.getProgram();
//                    programs.add(newProgram);
//                    organization.setProgram(programs);
                    return organizationRepository.save(organization);
                }).orElseThrow(() -> new OrganizationNotFoundException(newProgram.getOrganization().getOrganizationID()));

        return programRepository.save(newProgram);
    }

    @GetMapping("/programs")
    List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    @GetMapping("/program/{id}")
    Program getProgramById(@PathVariable int id) {
        return programRepository.findById(id)
                .orElseThrow(() -> new ProgramNotFoundException(id));
    }

    @PutMapping("/program/{id}")
    Program updateProgram(@RequestBody Program newProgram, @PathVariable int id) {
        return programRepository.findById(id)
                .map(program -> {
                    program.setProgramName(newProgram.getProgramName());
                    program.setProgramDescription(newProgram.getProgramDescription());
                    program.setCurrentMoney(newProgram.getCurrentMoney());
                    program.setTargetMoney(newProgram.getTargetMoney());
                    program.setDonateTotal(newProgram.getDonateTotal());
                    program.setActive(newProgram.isActive());
                    return programRepository.save(program);
                }).orElseThrow(() -> new ProgramNotFoundException(id));
    }

    @DeleteMapping("/program/{id}")
    String deleteProgram(@PathVariable int id) {
        if (!programRepository.existsById(id)) {
            throw new ProgramNotFoundException(id);
        }
        programRepository.deleteById(id);
        return "Program with id " + id + " has been deleted.";
    }
}
