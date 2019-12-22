const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./graphql/schema");
require('dotenv').config();
const mongoose = require("mongoose");

//DB env variables
const uri = process.env.DB_CONN;

const app = express();

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});

//Alloow Cross-Origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
        schema,
        pretty: true,
        graphiql: true
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`GraphQL Server started on PORT: ${PORT}`));