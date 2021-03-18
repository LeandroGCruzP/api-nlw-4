import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "List Ale" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Criado com susseso" });
});

app.listen(3333, () => console.log("Server is running"));

// Dia 2: 18:14
