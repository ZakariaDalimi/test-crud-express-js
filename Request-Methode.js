const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


// Get METHODE 
app.get("/", (req, res) => {
  console.log('GET Request Successfull!')
  res.send("Got a Put request");
});

// POST METHODE
app.post("/post", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("Data POST Request Recieved");
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});








// PUT  : katms7 ligne kaml w tmodifoer w t3awd t3mrr ligne

// Patch   :  katmodifier gha daq column
