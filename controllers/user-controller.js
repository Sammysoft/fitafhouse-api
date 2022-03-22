import User  from '../config/user.model.schema.js';
import bcrypt from 'bcrypt';




export const userController = {
    _onboard: async(req,res,next)=>{
                    const user = await new User(req.body)
                    try {
                        bcrypt.genSalt(10, (err, salt)=>{
                            !err
                            bcrypt.hash(user.password, salt, async(err, hash)=>{
                                !err
                                user.password = hash;
                                const newUser = await user.save();
                                res.status(200).json({
                                    msg: newUser
                                })
                            })

                            })
                    } catch (error) {
                                res.status(400).json({
                                    msg: "Could not secure password"
                                })
                            }
                },
               _invest: async(req,res,next)=>{
                  try {
                    User.findById({_id: req.params.id},(err, user)=>{
                        const {plan, timeDue, rate, amount , isActive} = req.body;
                        console.log(isActive)
                        const investmentDetails = {plan, timeDue, rate, amount}

                         user.investment.push(investmentDetails);
                         user.save()
                       User.findByIdAndUpdate(req.params.id, {$set: {isActive: true}},(err, result)=>{
                           console.log(result)
                           if(!err){
                               res.status(200).json({
                                   result
                               })
                           }
                       } )
                    } );
                  } catch (error) {
                            res.status(400).json({
                                msg : 'Sorry, Could not make this investment'
                            })
                  }
               },
         

}