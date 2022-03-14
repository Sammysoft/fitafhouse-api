import express from "express";
import {userController}  from "../controllers/user-controller.js";
import {auth} from '../controllers/auth.js';
import passport from 'passport';

const userRouter = express.Router();

userRouter.post('/onboarding', userController._onboard);
userRouter.post('/auth',auth._authUser );
userRouter.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    return res.status(200).json({
        data : req.user,
    })
})

export default userRouter;