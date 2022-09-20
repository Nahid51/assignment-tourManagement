import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 5000;

import tourRoute from "./routes/tour.route.js";

// middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/tours", tourRoute);


// database connection
mongoose.connect(process.env.DATABASE)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at port ${port}.`)
        })
    })
    .catch(error => {
        console.log(`${error} did not connect.`)
    })

app.get("/", (req, res) => {
    res.send("Hello Node JS")
});
