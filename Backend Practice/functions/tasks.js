const Home = (req, res) => {
    res.send("Home component")
};

const signin = (req, res) => {
    res.send("signin");
}

export default { Home, signin }