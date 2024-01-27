/* Express */
import express from "express";
// app.get
// app.post
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({ result: { name: "jittu", email: "monika@gmail.com" } })
});

app.post("/signin", (req, res) => {
    res.status(200).send(req.body);
});

app.post("/signup", (req, res) => {
    res.status(200).send(console.log("first"));
});

app.listen(9000, () => {
    console.log("listening at port 9000")
});
