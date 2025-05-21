package com.paroquiaperto.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paroquiaperto.backend.model.Paroquia;
import com.paroquiaperto.backend.repository.ParoquiaRepository;

@RestController
@RequestMapping("/api/paroquias")
public class ParoquiaController {

    @Autowired
    private ParoquiaRepository paroquiaRepository;

    @GetMapping
    public List<Paroquia> getAllParoquias() {
        return paroquiaRepository.findAll();
    }

    @PostMapping
    public Paroquia createParoquia(@RequestBody Paroquia paroquia) {
        return paroquiaRepository.save(paroquia);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paroquia> getParoquiaById(@PathVariable Long id) {
        return paroquiaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paroquia> updateParoquia(@PathVariable Long id, @RequestBody Paroquia paroquiaDetails) {
        return paroquiaRepository.findById(id).map(paroquia -> {
            paroquia.setNome(paroquiaDetails.getNome());
            paroquia.setEndereco(paroquiaDetails.getEndereco());
            paroquia.setLatitude(paroquiaDetails.getLatitude());
            paroquia.setLongitude(paroquiaDetails.getLongitude());
            return ResponseEntity.ok(paroquiaRepository.save(paroquia));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteParoquia(@PathVariable Long id) {
        return paroquiaRepository.findById(id).map(paroquia -> {
            paroquiaRepository.delete(paroquia);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
