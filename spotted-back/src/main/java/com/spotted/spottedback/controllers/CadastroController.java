package com.spotted.spottedback.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController("/cadastro")
public class CadastroController {
    
    @PostMapping
    public void cadastrarUsuario(){
        
    }
}