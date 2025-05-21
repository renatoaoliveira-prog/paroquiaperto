package com.paroquiaperto.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Paroquia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String endereco;
    private double latitude;
    private double longitude;

    @OneToMany(mappedBy = "paroquia", cascade = CascadeType.ALL)
    private List<Missa> misas;

    @OneToMany(mappedBy = "paroquia", cascade = CascadeType.ALL)
    private List<Evento> eventos;

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }

    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }

    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }

    public List<Missa> getMisas() { return misas; }
    public void setMisas(List<Missa> misas) { this.misas = misas; }

    public List<Evento> getEventos() { return eventos; }
    public void setEventos(List<Evento> eventos) { this.eventos = eventos; }
}
