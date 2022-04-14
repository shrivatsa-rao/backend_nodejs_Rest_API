const express = require("express");

const mongoose = require("mongoose");


const User = require("./model/user");

const app = express();



app.use(express.json());

app.get("/", (req, res) => {
    res.send("first request!!!");
});



app.get("/users/:id", async (req, res) => {
    var userId = req.params.id
    try {
        const response = await User.findById(userId)

        console.log(response);
    } catch (error) {
        console.log(error);
    }
});


app.post("/create_user", async (req, res) => {
    try {
        const myuser = User(req.body);
        try {
            await myuser.save();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error })
        }
        res.send(myuser);
    }
    catch (err) {
        console.log(err);
        res.send({ message: err });
    }


});





mongoose.connect(
    "mongodb+srv://shrivtsa:shri26@cluster0.nwxz4.mongodb.net/backend?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("connected to dat");
    }
);

app.listen(3000, () => {
    console.log("listening to 3000");
});


