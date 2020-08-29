import {Letter} from '../mongoose/mongoose'
import {user} from '../user.data'


const graphql = require('graphql');

const {GraphQLObjectType,GraphQLString,GraphQLList} = graphql;

const LetterType = new GraphQLObjectType({
    name:"Letter",
    fields:()=>({
       id:{type:GraphQLString},
       message:{type:GraphQLString},
       email:{type:GraphQLString},
    })
})

const RootType = new GraphQLObjectType({
    name:"RootType",
    fields:{
        letters:{
            type:new GraphQLList(LetterType),
            async resolve(parent,args){
                if(user.isAdmin){
                    return await Letter.find().exec();
                }
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addLetter:{
            type:LetterType,
            args:{
                email:{type:GraphQLString},
                message:{type:GraphQLString}
            },
            async resolve(parent,args){///create a letter
                const obj = {email:args.email,message:args.message};
                await Letter.create(obj)
                return obj
            }
        }
    }
})

module.exports.root = new graphql.GraphQLSchema({
    query:RootType,
    mutation:Mutation
})

///02:12:40