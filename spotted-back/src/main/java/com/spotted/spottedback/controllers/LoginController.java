package com.spotted.spottedback.controllers;

import com.spotted.spottedback.dto.UsuarioDTO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriBuilder;

@Controller
@ResponseBody
@RequestMapping("/Login")
public class LoginController {
   
    @GetMapping
    public String teste(){
        return "Teste ok";
    }

    @PostMapping
    public void login(@RequestBody UsuarioDTO dto, UriBuilder uriBuilder){

    }
}
