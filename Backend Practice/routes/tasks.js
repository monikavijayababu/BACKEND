import express from "express";
import functions from "../functions/tasks.js"
console.log(functions);

const tasks = express.Router();

// tasks.use();

tasks.get("/", functions.Home)
tasks.get("/signin", functions.signin);

export default tasks;