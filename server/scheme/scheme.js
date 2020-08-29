const graphql = require('graphql');

const {GraphQLObjectType,GraphQLString,GraphQLList} = graphql;

const letters = [
    {id:"1",message:"2lsl",email:""}
]

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
        letter:{
            type:LetterType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                const id = args.id
                return letters.find(el=>el.id==id) 
            }
        },
        letters:{
            type:new GraphQLList(LetterType),
            resolve(parent,args){
                return letters;
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
            resolve(parent,args){///create a letter
                const obj = {email:args.email,message:args.message};
                letters.push(obj)
                return obj
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    query:RootType,
    mutation:Mutation
})

///02:12:40