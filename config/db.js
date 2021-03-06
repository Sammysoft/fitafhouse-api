import dotenv from 'dotenv';
import  mongoose  from 'mongoose';


    const _connectDB = async()=>{
                try {
                    dotenv.config();
                    const MongoURL = process.env.MongoDB_ATLAS
               await  mongoose.connect(process.env.MongoDB, { useNewUrlParser: true })
                .then(()=>{
                    console.log("Connected to Database")
                })
                } catch (error) {
                        console.log("An error has occured, ", error)
                }
    }

export default _connectDB;