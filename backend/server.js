const express = require("express");
const notes = require("./data/notes.js");
const app = express();
app.get("/",(req,res)=> {
    res.send("API is running...");
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.listen(5000,console.log("Server started on Port 5000"));