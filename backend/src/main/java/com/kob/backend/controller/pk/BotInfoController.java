package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {

    @RequestMapping("/getbotinfo")
    public List<Map<String, String>> getBotInfo() {
        List<Map<String, String>> botInfo = new LinkedList<>();
        Map<String, String> bot1 = new HashMap<>();
        Map<String, String> bot2 = new HashMap<>();

        bot1.put("botName", "Tiger");
        bot1.put("botRating", "1500");
        bot2.put("botName", "Bob");
        bot2.put("botRating", "1502");
        botInfo.add(bot1);
        botInfo.add(bot2);
        return botInfo;
    }
}
