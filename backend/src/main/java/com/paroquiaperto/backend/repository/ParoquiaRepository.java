package com.paroquiaperto.backend.repository;

import com.paroquiaperto.backend.model.Paroquia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParoquiaRepository extends JpaRepository<Paroquia, Long> {
    // Podemos adicionar consultas personalizadas depois
}
