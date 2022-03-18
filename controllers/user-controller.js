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
                        const invest= req.body;
                         user.investment.push(invest);
                        user.save()
                       User.findById({_id: req.params.id}, (err, result)=>{
                           console.log(result)
                           if(!err){
                               res.status(200).json({
                                   investmentData: result.investment
                               })
                           }
                       } )
                    } );
                  } catch (error) {
                            res.status(400).json({
                                msg : 'Sorry, Could not make this investment'
                            })
                  }
               }

}