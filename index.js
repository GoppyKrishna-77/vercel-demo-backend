import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); 

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ serverMsg: "Hello Welcome to Express Server!" }));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Started at Port ${PORT}\nGoto 0.0.0.0:${PORT}`);
});
