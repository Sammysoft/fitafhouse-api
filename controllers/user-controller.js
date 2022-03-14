import User  from '../config/user.model.schema.js';
import bcrypt from 'bcrypt';
// import bcrypt from 'bcryptjs/dist/bcrypt.js';



export const userController = {
    _onboard: async(req,res,next)=>{
                console.log(req.body)
                    const user = await new User(req.body);
                    console.log(user)
                    try {
                        bcrypt.genSalt(10, (err, salt)=>{
                            !err
                            bcrypt.hash(user.password, salt, async(err, hash)=>{
                                !err
                                user.password = hash;
                                console.log(user)
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
                _dashboard: async(req,res,next)=>{
                    res.status(200).json({
                        msg: "Working"
                    })
                }

}