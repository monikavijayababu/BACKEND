import express from "express";
import tasks from "./routes/tasks.js";

//app
const app = express();

// middleware
// app.use(); /* use should not give empty */

// Base url
app.use("/api/vn/tasks", tasks);

//Database config
app.listen(9000, () => {
    console.log("port listening at 9000")
});