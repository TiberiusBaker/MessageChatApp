import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
  console.log("Server is running");
});

app.post("/send", (req, res) => {
  console.log("Received message");
  if (req.body) {
    console.log(req.body);
    console.log("Sending message");
    res.send("Message sent");
  } else {
    console.log("No message");
    res.send("No message");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
