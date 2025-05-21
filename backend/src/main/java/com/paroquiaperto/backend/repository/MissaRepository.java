package com.paroquiaperto.backend.repository;

import com.paroquiaperto.backend.model.Missa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MissaRepository extends JpaRepository<Missa, Long> {
}
