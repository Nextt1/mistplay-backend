const express = require("express");
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/",require("./routes/home"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
