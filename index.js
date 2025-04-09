const express = require("express")
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const app = express();

const mongoURl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?
    authSource=admin`;

const connectWithRetry = () => {
    mongoose
    .connect(mongoURl, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useFindAndModify: false,
    })
    .then(() => console.log("Successfully connected to DB"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry, 5000)
    });
}

connectWithRetry()

app.get("/", (req, res) => {
    res.send("<h2>Hello There...234..</h2>");
});

const port = process.env.port || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));