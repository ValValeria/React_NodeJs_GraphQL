const mongoose = require('mongoose')

const LetterScheme = new mongoose.Schema({
    message:String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    time:String
},{versionKey: false}) 


export const Letter = mongoose.model('Schedule',LetterScheme)

mongoose.connect("mongodb+srv://myuser:jsjjsjsjjsj7272jH@cluster0.emx8s.mongodb.net/schedule?retryWrites=true&w=majority",{ useNewUrlParser: true })

