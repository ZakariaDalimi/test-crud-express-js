const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


app.get("/user", (req, res) => {
  console.log('GET Request Successfull!')
  res.send("Got a Put request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// PUT  : katms7 ligne kaml w tmodifoer w t3awd t3mrr ligne

// Patch   :  katmodifier gha daq column
