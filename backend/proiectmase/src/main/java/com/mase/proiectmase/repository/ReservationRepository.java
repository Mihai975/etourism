package com.mase.proiectmase.repository;

import com.mase.proiectmase.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    public List<Reservation> findByUsername(String username);


}
