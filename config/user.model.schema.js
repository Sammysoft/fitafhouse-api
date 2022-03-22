import mongoose from "mongoose";

const investmentSchema = mongoose.Schema({
    plan:{
        type: String,
    },
    timeDue: {
        type: String,
    },
    amount:{
        type: String,
    },
    rate: {
        type: String,
    }
}, {timestamps: true})

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
    investment: [investmentSchema],
    role:{
        type: String,
        default: 'Investor'
    },
    isActive:{
        type: Boolean
    },
    accountNumber: {
        type: Number
    }
}, {
    timestamps: true
})
const User = mongoose.model('User', userSchema)
export default User;