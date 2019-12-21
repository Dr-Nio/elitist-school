const graphql = require('graphql');

const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

 var users = [
     { fname: 'Umar', email: 'umar@gmail.com', id: '1' },
     { fname: 'fify', email: 'fify@gmail.com', id: '2' },
     { fname: 'joy', email: 'joy@gmail.com', id: '3' },
     { fname: 'brad', email: 'brad@gmail.com', id: '4' },
     { fname: 'Femi', email: 'femi@gmail.com', id: '5' }
 ];

 var users = [
    { fname: 'Umar', email: 'umar@gmail.com', id: '1' },
    { fname: 'fify', email: 'fify@gmail.com', id: '2' },
    { fname: 'joy', email: 'joy@gmail.com', id: '3' },
    { fname: 'brad', email: 'brad@gmail.com', id: '4' },
    { fname: 'Femi', email: 'femi@gmail.com', id: '5' }
];

const StaffType = new GraphQLObjectType({
    name: 'Staff',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        type: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        staff: {
            type: StaffType,
            args: {id: { type: GraphQLID } }, 
            resolve(parent, args){ 
              //return _.find(users, { id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery 
});