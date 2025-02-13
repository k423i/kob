package com.kob.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class BackendApplicationTests {

    @Test
    void contextLoads() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("pll"));
        System.out.println(passwordEncoder.encode("ppl"));
        System.out.println(passwordEncoder.matches("plyf", "$2a$10$mi0SfGKoxwSY50ReAy12BOdkVOL3nPR.cCeq2IVGg1Sj8pcgnjtT2"));
    }

}
