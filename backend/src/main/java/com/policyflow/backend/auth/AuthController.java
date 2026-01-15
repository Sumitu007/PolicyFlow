package com.policyflow.backend.auth;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @GetMapping("/test")
    public String test() {
        return "Auth API working";
    }


    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {

        // TEMP validation (will replace with DB later)
        if ("admin".equals(request.get("userId"))
                && "admin123".equals(request.get("password"))) {

            return Map.of(
                    "status", "SUCCESS",
                    "message", "Login successful"
            );
        }

        return Map.of(
                "status", "FAIL",
                "message", "Invalid credentials"
        );
    }
}
