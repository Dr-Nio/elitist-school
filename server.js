const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./graphql/schema");
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    process.env.DB_CONN, 

    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Alloow Crross-Origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
        schema,
        pretty: true,
        graphiql: true
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`GraphQL Server started on PORT: ${PORT}`));