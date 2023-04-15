import express from "express";
import { translate } from "@vitalets/google-translate-api";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    const { text } = await translate("Hello", {to: "ko"});

    res.send(text);
});

app.get("/translate", async (req, res) => {
    const { text } = await translate(req.query.text, {to: req.query.to});

    res.send(text);
})

app.listen(port, () => {
    console.log(`Listening on : ${port}`);
});