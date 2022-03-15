import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    phonenumber:{type:Number, required: true},
    investment: new mongoose.Schema({
        plan: {String, default: ''},
        timeDue: {String},
        amount: {String}})
}, {
    timestamps: true
})
const User = mongoose.model('User', userSchema)
export default User;