package com.mase.proiectmase.service;

import com.mase.proiectmase.entity.Credential;
import com.mase.proiectmase.repository.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CredentialService {

    @Autowired
    CredentialRepository credentialRepository;

    public Optional<Credential> findByUsername(String username) {
        return credentialRepository.findById(username);
    }

    public void save(Credential credential){
        credentialRepository.save(credential);
    }


}
