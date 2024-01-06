const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

// crete object schema (keyword 'new' for ES6): 1st argument - object decription
// 2nd - 
const userSchema = new Schema({
    
    email: {
        type: String,
        match: /\w{0}[a-zA-Zа-яА-Я]+\d{0}[0-9]+\@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        minLength: 8,
        required: [true, 'Set password for user'],
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token:{ 
        type: String,
        default: ""
    },
    verify:{
        type: Boolean,
        default: false,
    },
    verificationCode:{
        type: String,
        default: "",
    },
    avatarURL: String,
},{
    versionKey: false // Disable version stamp
});

userSchema.post("save", handleMongooseError);

// create model : 1st argument - collection name
const User = model('user', userSchema);

module.exports = User;