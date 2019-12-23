const graphql = require('graphql');

const _ = require('lodash');

const Staff = require('../models/staff');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const StaffType = new GraphQLObjectType({
    name: 'Staff',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        acctype: { type: GraphQLString }
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

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addStaff: {
            type: StaffType,
            args: {
                fname: { type: GraphQLString },
                lname: { type: GraphQLString },
                phone: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                acctype: { type: GraphQLString }
            }, 
            resolve(parent, args){ 
              //return _.find(users, { id: args.id });
              let staff = new Staff({
                fname: args.fname,
                lname: args.lname,
                phone: args.phone,
                email: args.email,
                password: args.password,
                acctype: args.acctype
              });
              return staff.save(); 
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});