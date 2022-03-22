import express from 'express';
import passport from 'passport';
const adminRouter = express.Router();
import {adminController} from '../controllers/admin-controller.js'


adminRouter.post('/delete/:id',adminController._deleteInvestor, );
adminRouter.get('/users', adminController._getUsers)
adminRouter.get('/stats', adminController._getStats)
adminRouter.get('/active-investors', adminController._getActiveInvestors)


export default adminRouter;