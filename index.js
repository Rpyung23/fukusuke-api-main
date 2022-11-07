require('dotenv').config();
const express = require('express');
const { connect } = require('./src/libs/persistence');
const appModule = require('./src/app.module');
let usersLog = require("./src/src2/api/users.api")
let clientsLog = require("./src/src2/api/clients.api")
let paypal = require("./src/src2/api/paypal")
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.json());
app.use(appModule);
app.use(usersLog)
app.use(paypal)
app.use(clientsLog)

app.listen(PORT, () => {
  console.log(`Application started in port ${PORT}`);

  connect()
    .then(() => {
      console.log('Application connected to the DB');
    })
    .catch(() => {
      console.error('Could not connect to the DB, please try again!');
    });
});
