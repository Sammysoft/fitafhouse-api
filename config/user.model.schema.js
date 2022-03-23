import mongoose from "mongoose";


const date= new Date();
let month =
["January","February","March","April","May","June","July","August","September","October","November","December"]

let presentDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`



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
    investment: [
        {plan:{type: String}, investmentDuration: {type: Number},amount:{type: String},rate: {type: String},
        created_at: {
            type: String,
            default: presentDate
        }, dueDate: {
            type: String
        }}
    ],
    role:{
        type: String,
        default: 'Investor'
    },
    isActive:{
        type: Boolean
    },
    accountNumber: {
        type: Number
    },
   bank:{
       type: String
   }
}, {
    timestamps: true
})

userSchema.methods.endDate = function endDate(investmentDuration){
    let date, extractedMonth, month, newMonth, dueDate, finalMonth;
    date = new Date();
    month =
        ["January","February","March","April","May","June","July","August","September","October","November","December"]
   extractedMonth = date.getMonth();
   newMonth = Number(extractedMonth) + Number(investmentDuration);
    if(newMonth >= 12){
        newMonth -= 12
        finalMonth = month[newMonth]
            dueDate = `${date.getDate()} ${finalMonth} ${date.getFullYear() + 1}`
            return dueDate;
    }else{
        newMonth = month[newMonth]
        dueDate = `${date.getDate()} ${newMonth} ${date.getFullYear()}`
        return dueDate;
    }


}







const User = mongoose.model('User', userSchema)
export default User;