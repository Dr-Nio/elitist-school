const graphql = require('graphql');

const GraphQLDate = require('graphql-date');

const _ = require('lodash');

const Admin = require('../models/admin');
const Staff = require('../models/staff');
const Student = require('../models/student');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLNonNull } = graphql;

const now = new Date();

const AdminType = new GraphQLObjectType({
    name: 'Admin',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        created_at: { type: GraphQLDate },
        updated_at: { type: GraphQLDate }
    })
});

const StaffType = new GraphQLObjectType({
    name: 'Staff',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        created_at: { type: GraphQLDate },
        updated_at: { type: GraphQLDate }
    })
});

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        created_at: { type: GraphQLDate },
        updated_at: { type: GraphQLDate }
    })
});

const ContractorType = new GraphQLObjectType({
    name: 'Contractor',
    fields: () => ({
        id: { type: GraphQLID },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
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
        addAdmin: {
            type: AdminType,
            args: {
                fname: { type: new GraphQLNonNull(GraphQLString) },
                lname: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            }, 
            resolve(parent, args){ 
              //return _.find(users, { id: args.id });
              let admin = new Admin({
                fname: args.fname,
                lname: args.lname,
                phone: args.phone,
                email: args.email,
                password: args.password
              });
              return admin.save();
            }
        },
        addStudent: {
            type: StudentType,
            args: {
                fname: { type: new GraphQLNonNull(GraphQLString) },
                lname: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            }, 
            resolve(parent, args){ 
              //return _.find(users, { id: args.id });
              let student = new Student({
                fname: args.fname,
                lname: args.lname,
                phone: args.phone,
                email: args.email,
                password: args.password
              });
              return student.save();
            }
        },
        addStaff: {
            type: StaffType,
            args: {
                fname: { type: new GraphQLNonNull(GraphQLString) },
                lname: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            }, 
            resolve(parent, args){ 
              //return _.find(users, { id: args.id });
              let staff = new Staff({
                fname: args.fname,
                lname: args.lname,
                phone: args.phone,
                email: args.email,
                password: args.password
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