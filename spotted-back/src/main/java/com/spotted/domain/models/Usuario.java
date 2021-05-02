package com.spotted.domain.models;

import java.time.LocalDateTime;

public class Usuario {
    private Long id;
    private String nick;
    private String link;
    private LocalDateTime dataCriacao;

    public Usuario(String nick,String nome,String link){
        this.dataCriacao = LocalDateTime.now();
        this.nick = nick;
        this.link = link;
    }

    public Long getId() {
        return id;
    }

    public String getNick() {
        return nick;
    }

    public String getLink() {
        return link;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }
}
