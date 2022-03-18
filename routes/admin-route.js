import express from 'express';
import passport from 'passport';
const adminRouter = express.Router();
import {adminController} from '../controllers/admin-controller.js'

adminRouter.get('/investors', adminController._getAllInvestors);
adminRouter.post('/delete/:id',adminController._deleteInvestor, )
export default adminRouter;