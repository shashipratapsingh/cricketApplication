package com.cricket.app.service;

import com.cricket.app.entity.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    List<Match> getAllMatchs();
    List<Match> getAllLiveMatchs();

    List<List<String>> pointTable();

}
