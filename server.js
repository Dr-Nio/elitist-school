const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
//const mongoose = require("mongoose");

const app = express();

app.use('/graphql', graphqlHTTP({
        schema,
        pretty: true,
        graphiql: true
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`GraphQL Server started on PORT: ${PORT}`));