import express from "express";
const app = express();

app.use(express.json());

const users = [];


app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ error: "Name, email, and password are required." });
    }


    if (users.some(user => user.email === email)) {
        return res.status(400).send({ error: "Email already exists. Please use a different email." });
    }


    const newUser = { name, email, password };
    users.push(newUser);

    res.status(201).send({ message: "User created successfully.", user: newUser });
});



app.post("/signin", (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).send({ error: "Email and password are required." });
    }
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        return res.status(401).send({ error: "Invalid email or password." });
    }

    res.status(200).send({ message: "Sign-in successful.", user });
});


app.post("/forgetpassword", (req, res) => {
    const { email } = req.body;


    if (!email) {
        return res.status(400).send({ error: "Email is required to reset the password." });
    }


    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).send({ error: "Email not found. Please enter a valid email address." });
    }


    res.status(200).send({ message: "Password reset instructions sent to your email." });
});

app.listen(9000, () => {
    console.log("Listening at port 9000");
});
