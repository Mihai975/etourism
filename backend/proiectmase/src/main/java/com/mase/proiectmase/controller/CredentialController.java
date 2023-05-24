package com.mase.proiectmase.controller;

import com.mase.proiectmase.dto.LoginResponse;
import com.mase.proiectmase.dto.RegisterResponse;
import com.mase.proiectmase.entity.Credential;
import com.mase.proiectmase.service.CredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/register")
public class CredentialController {

    @Autowired
    CredentialService credentialService;

    @PostMapping("/new-user")
    public ResponseEntity<RegisterResponse> save(@RequestBody Credential credential){

        RegisterResponse registerResponse = new RegisterResponse();
        if(credentialService.findByUsername(credential.getUsername()).isPresent()){
            registerResponse.setMessage("Acest username este deja folosit");
            return new ResponseEntity<>(registerResponse, HttpStatus.BAD_REQUEST);
        }
        if(credential.getUsername().length() < 8 && credential.getPassword().length() > 8){
            registerResponse.setMessage("Numele de utilizator trebuie sa aiba cel putin 8 caractere");
            return new ResponseEntity<>(registerResponse, HttpStatus.BAD_REQUEST);
        }
        if(credential.getUsername().length() > 8 && credential.getPassword().length() < 8){
            registerResponse.setMessage("Parola trebuie sa aiba cel putin 8 caractere");
            return new ResponseEntity<>(registerResponse, HttpStatus.BAD_REQUEST);
        }
        if(credential.getUsername().length() < 8 && credential.getPassword().length() < 8){
            registerResponse.setMessage("Parola trebuie sa aiba cel putin 8 caractere");
            return new ResponseEntity<>(registerResponse, HttpStatus.BAD_REQUEST);
        }
        else {
            registerResponse.setMessage("Inregistrarea a fost facuta cu succes");
            credentialService.save(credential);
            return new ResponseEntity<>(registerResponse, HttpStatus.OK);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> isLoggedIn(@RequestBody Credential credential){

        LoginResponse loginResponse = new LoginResponse();
        if(credentialService.findByUsername(credential.getUsername()).isPresent()){
            Credential actualCredential = credentialService.findByUsername(credential.getUsername()).get();
            if(credential.getPassword().equals(actualCredential.getPassword())){
                loginResponse.setMessage("Te-ai conectat cu succes");
                return new ResponseEntity<>(loginResponse, HttpStatus.OK);
            }
            else{
                loginResponse.setMessage("Nume de utilizator sau parola gresita");
                return new ResponseEntity<>(loginResponse,HttpStatus.BAD_REQUEST);
            }
        }else {
            loginResponse.setMessage("Nume de utilizator sau parola gresita");
            return new ResponseEntity<>(loginResponse,HttpStatus.BAD_REQUEST);
        }
    }
}
