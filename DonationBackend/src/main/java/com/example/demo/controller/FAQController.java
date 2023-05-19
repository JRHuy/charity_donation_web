package com.example.demo.controller;

import com.example.demo.exception.FaqNotFoundException;
import com.example.demo.model.FAQ;
import com.example.demo.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FAQController {
    @Autowired
    private FAQRepository faqRepository;

    @PostMapping("/faq")
    FAQ newFaq(@RequestBody FAQ newFaq) {
        return faqRepository.save(newFaq);
    }

    @GetMapping("/faqs")
    List<FAQ> getAllFaqs() {
        return faqRepository.findAll();
    }

    @GetMapping("/faq/{id}")
    FAQ getFaqById(@PathVariable Short id) {
        return faqRepository.findById(id)
                .orElseThrow(() -> new FaqNotFoundException(id));
    }

    @PutMapping("/faq/{id}")
    FAQ updateFaq(@RequestBody FAQ newFaq, @PathVariable Short id) {
        return faqRepository.findById(id)
                .map(faq -> {
                    faq.setTitle(newFaq.getTitle());
                    faq.setDescription(newFaq.getDescription());
                    return faqRepository.save(faq);
                }).orElseThrow(() -> new FaqNotFoundException(id));
    }

    @DeleteMapping("/faq/{id}")
    String deleteFaq(@PathVariable Short id) {
        if (!faqRepository.existsById(id)) {
            throw new FaqNotFoundException(id);
        }
        faqRepository.deleteById(id);
        return "FAQ with id " + id + " has been deleted.";
    }
}
