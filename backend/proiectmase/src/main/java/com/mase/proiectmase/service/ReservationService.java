package com.mase.proiectmase.service;


import com.mase.proiectmase.entity.Reservation;
import com.mase.proiectmase.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    public void save(Reservation reservation){
        reservationRepository.save(reservation);
    }

    public List<Reservation> findAllByUsername(String username){
        return reservationRepository.findByUsername(username);
    }
}
