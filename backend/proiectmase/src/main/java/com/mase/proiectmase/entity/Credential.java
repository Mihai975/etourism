package com.mase.proiectmase.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "credential")
public class Credential {

    @Id
    @Column(name = "username", unique = true)
    private String username;
    @Column(name = "password")
    private String password;
}
