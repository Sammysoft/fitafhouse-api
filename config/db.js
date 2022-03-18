import dotenv from 'dotenv';
import  mongoose  from 'mongoose';


    const _connectDB = async()=>{
                try {
                    dotenv.config();
                    const MongoURL = process.env.MongoDB
               await  mongoose.connect("mongodb+srv://FITAFHouse:z7IVKotQfLySsVEl@investment.5o7ix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
                .then(()=>{
                    console.log("Connected to Database")
                })
                } catch (error) {
                        console.log("An error has occured, ", error)
                }
    }

export default _connectDB;