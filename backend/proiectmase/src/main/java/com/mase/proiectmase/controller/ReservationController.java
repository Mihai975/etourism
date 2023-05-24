package com.mase.proiectmase.controller;


import com.mase.proiectmase.dto.RegisterResponse;
import com.mase.proiectmase.dto.ReservationResponse;
import com.mase.proiectmase.entity.Reservation;
import com.mase.proiectmase.repository.ReservationRepository;
import com.mase.proiectmase.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/reserve")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @PostMapping("/new-reservation")
    public ResponseEntity<ReservationResponse> save(@RequestBody Reservation reservation){
        ReservationResponse reservationResponse = new ReservationResponse();
        reservationService.save(reservation);
        reservationResponse.setMessage("Rezervarea a fost adaugata cu succes");
        return new ResponseEntity<>(reservationResponse, HttpStatus.OK);
    }

    @GetMapping("/see-all-reservations")
    public List<Reservation> findAllByUsername(@RequestParam String username){
        return reservationService.findAllByUsername(username);
    }
}
