package com.paroquiaperto.backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Missa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime horario;

    private String descricao;

    @ManyToOne
    @JoinColumn(name = "paroquia_id")
    private Paroquia paroquia;

    // getters e setters
    public Long getId() {
        return id;
    }   
    public void setId(Long id) {
        this.id = id;
    }
    public LocalDateTime getHorario() {
        return horario;
    }
    public void setHorario(LocalDateTime horario) {
        this.horario = horario;
    }
    public String getDescricao() {
        return descricao;
    }
    
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public Paroquia getParoquia() {
        return paroquia;
    }
    public void setParoquia(Paroquia paroquia) {
        this.paroquia = paroquia;
    }
}
