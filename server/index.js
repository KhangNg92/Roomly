const express = require("express");
const mongoose = require("mongoose");

const app = express();

const config = require("./config/keys");

const userRoutes = require("./routes/auth"),
  billRoutes = require("./routes/bill"),
  imageRoutes = require("./routes/image-upload");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const passort = require("./middleware/passport");

app.use(cors());
mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    if (process.env.NODE_ENV === 'production') {
      // const fakeDb = new FakeDb();
      // fakeDb.seedDb();
      console.log("connected to the prod db");
    } else {
      console.log('connected to dev db')
    }
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/bill", billRoutes);
app.use("/api/image", imageRoutes);


if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '../dist/', 'Hackathon-Projec')
  console.log(appPath)
  console.log(__dirname)
  // we want to use all the express static 
  app.use(express.static(appPath))

  // this will catch every request
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(appPath, 'index.html'))
  })
  //
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("I am running");
});
