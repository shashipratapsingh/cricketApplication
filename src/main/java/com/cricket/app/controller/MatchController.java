package com.cricket.app.controller;

import com.cricket.app.entity.Match;
import com.cricket.app.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/match")
public class MatchController {
    @Autowired
    private MatchService matchService;

    @GetMapping("/live")
    public ResponseEntity<List<Match>> AllLiveMatch(){
        return  new ResponseEntity<>(this.matchService.getAllLiveMatchs(), HttpStatus.OK);
    }
    @GetMapping("/allmatch")
    public ResponseEntity<List<Match>> getAllMatchs(){
        return  new ResponseEntity<>(this.matchService.getAllMatchs(), HttpStatus.OK);
    }

    @GetMapping("/pointtable")
    public ResponseEntity<?> getPointTable (){
        return new ResponseEntity<>(this.matchService.pointTable(),HttpStatus.OK);
    }
}
