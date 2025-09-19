const express = require("express");
const mongoose = require("mongoose");
const Sliding = require('./Sliding');
const cors = require("cors");
const icons = require("./Icons");
const watches = require("./watches");
const Best = require("./Best");
const app = express();
const she = require('./sherules');
const Cart = require("./cart");
const womens = require("./womens");
const mainwatches = require('./mainwatches');
const mens = require('./mens');
const Login = require("./login");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

try {
    mongoose.connect("mongodb+srv://punugulahari1:12345@cluster0.fmy2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("database connected");
} catch (error) {
    console.log(error);
}

app.post("/sliding", async (req, res) => {
    const image = req.body;
    const Nh = new Sliding(image);
    try {
        await Nh.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/slidingget', async (req, res) => {
    const Sap = await Sliding.find();
    res.json(Sap);
});

app.post('/iconspost', async (req, res) => {
    const { image, name } = req.body;
    try {
        const Npu = new icons({ image, name });
        Npu.save();
        console.log("sended to db");
        res.send("sended to db");
    } catch (error) {
        console.log(error);
        res.send("error").status(500);
    }
});

app.get("/iconsget", async (req, res) => {
    const Po = await icons.find();
    res.json(Po);
});

app.post("/watchespost", async (req, res) => {
    const image = req.body;
    const Nh = new watches(image);
    try {
        await Nh.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/watchesget', async (req, res) => {
    const Sap = await watches.find();
    res.json(Sap);
});

app.post("/bestpost", async (req, res) => {
    const image = req.body;
    const Nh1 = new Best(image);
    try {
        await Nh1.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/bestget', async (req, res) => {
    const Sap = await Best.find();
    res.json(Sap);
});

app.post("/shepost", async (req, res) => {
    const image = req.body;
    const Nh1 = new she(image);
    try {
        await Nh1.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/sheget', async (req, res) => {
    const Sap = await she.find();
    res.json(Sap);
});


app.post("/main1post", async (req, res) => {
    const { name, img1, img2, img3, price } = req.body;
    const Nh1 = new mainwatches({ name, img1, img2, img3, price });
    try {
        await Nh1.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/main1get', async (req, res) => {
    const Sap = await mainwatches.find();
    res.json(Sap);
});

app.post("/womenspost", async (req, res) => {
    const { name, img1, img2, img3, price } = req.body;
    const Nh1 = new womens({ name, img1, img2, img3, price });
    try {
        await Nh1.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/womensget', async (req, res) => {
    const Sap = await womens.find();
    res.json(Sap);
});

app.post("/menspost", async (req, res) => {
    const { name, img1, img2, img3, price } = req.body;
    const Nh1 = new mens({ name, img1, img2, img3, price });
    try {
        await Nh1.save();
        res.send('sended to database');
        console.log('sended to database');
    } catch (error) {
        console.log(error);
    }
});

app.get('/mensget', async (req, res) => {
    const Sap = await mens.find();
    res.json(Sap);
});


app.get("/watches/:id", async (req, res) => {
    const abc = req.params.id;
    const cd = await mainwatches.findById(abc);
    try {
        res.json(cd);
    } catch (error) {
        console.log(error);
    }
});

app.get("/womens/:id", async (req, res) => {
    const abcd = req.params.id;
    const searc = await womens.findById(abcd);
    try {
        res.json(searc);
    } catch (err) {
        res.send(err);
    }
});


app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    const low = await new Login({ name, password });
    try {
        low.save();
        res.send("send to backend successfully");
        console.log("sended to db");
    } catch (error) {
        console.log(error);
    }
});

app.post("/check", async (req, res) => {
    const { name, password } = req.body;
    const lop = await Login.findOne({ name });
    if (!lop) {
        res.send("no account has been created");
    }
    if (lop) {
        if (lop.password === password) {
            const token = jwt.sign({ id: lop._id, name: lop.name }, "12345HAr", { expiresIn: "1h" });
            res.send(token);
            console.log(token);
        } else {
            console.log("no account has been created");
            res.send("password does not match");
        }
    }
});

function Hmy(req, res, next) {
    const barrer = req.header("authorization");

    if (!barrer) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = barrer.split(" ")[1]; 

    jwt.verify(token, "12345HAr", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token", error: err });
        }

        req.user = decoded;
        next();
    });
}

app.get("/profile", Hmy, (req, res) => {
    res.json(req.user);
});

app.post("/cartpost", async (req, res) => {
    const { name, name1, price, img1 } = req.body;
    const Nui1 = await new Cart({ name, name1, price, img1 });
    try {
        Nui1.save();
        console.log("sended to db");
    } catch (error) {
        console.log(error);
    }
});

app.get("/cartget", async (req, res) => {
    const cd = await Cart.find();
    try {
        res.json(cd);
    } catch (error) {
        console.log(error);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const idq = req.params.id;
    try {
        if (idq) {
            const nk = await Cart.findByIdAndDelete(idq);
            res.json({ "deleted": nk });
        } else {
            res.send("error:no id");
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(9000,"0.0.0.0", () => {
    console.log("Server running on port 9000");
});
