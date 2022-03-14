import express from 'express';
import passport from 'passport';
import   _connectDB    from './config/db.js';
import session from 'express-session';
import userRouter from './routes/user.route.js';
import MongoStore from 'connect-mongo';
import bodyParser from 'body-parser';
import cors from 'cors';
import './config/passport.js';


const app = express();
const port = process.env.PORT || 6069;
const ATLAS =  process.env.MongoDB_ATLAS
app.use(session({
    secret: 'fitaf secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://FITAFHouse:z7IVKotQfLySsVEl@investment.5o7ix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", collectionName: "sessions" } ),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session())


app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
      next();
    });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
    _connectDB();
});

app.use('/api', userRouter);
