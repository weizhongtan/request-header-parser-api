"use strict"

var express = require("express");
var app = express();

app.get("/header", function(req, res) {
    console.log("ip:", req.get("X-Forwarded-For"));
    console.log("Accept-Language:", req.get("Accept-Language"));
    console.log("user-agent:", req.get("User-Agent"));
    var OS = req.get("User-Agent").match(/\([a-zA-Z\d\s\.\;]+\)/i)[0];
    var info = {
        ipaddress: req.get("X-Forwarded-For"),
        language: req.get("Accept-Language").substring(0, 5),
        software: OS.substring(1, OS.length-1)
    };
    res.end(JSON.stringify(info));
});

app.listen(8080, function() {
    console.log("Request header parser listening on port 8080");
})