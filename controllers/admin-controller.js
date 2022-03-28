import User from "../config/user.model.schema.js"

export const adminController ={



    _deleteInvestor: async(req,res,next)=>{
        User.findOneAndDelete({_id: req.params.id}, (err, result)=>{
            if(err){
                res.status(200).json({
                    msg: 'Could not delete this investor'
                })
            }else{
                res.status(200).json({
                    data: req.user,
                    msg:'Deleted Succesfully'
                })
            }
        })
    },
    _getUsers: async(req,res,next)=>{
        try {
            const users = await User.find()
            res.status(200).json({
                    Investors:  users
            })
        } catch (error) {
            res.status(400).json({
                msg: 'Could Not Fetch Users'
            })
        }

},
_getStats: async(req,res,next)=>{
   const numberOfActiveInvestors = await User.where({isActive: true}).count()
  const numberOfUsers = await User.find().count({})
//    const numberOfActiveInvestors = numberOfUsers - numberOfNonActiveInvestors
   res.status(200).json({
       numberOfActiveInvestors: numberOfActiveInvestors,
       numberOfUsers: numberOfUsers
   })
},
_getActiveInvestors: async(req,res,next)=>{

        const investorsStats = await User.find({isActive: true}).count();
        const investors = await User.find({isActive: true})
        res.status(200).json({
            investorsStats,
            investors
        })
},
_approveInvestment: async(req,res,next)=>{
    try {
User.findByIdAndUpdate(req.params.id, {$set: {approved: true}}, (err, result)=>{
    !err
    res.status(200).json({
        msg: 'Investment has been approved'
    })
})

    } catch (error) {
         res.status(400).json({
             msg: 'Investment Could not be approved'
         })
    }
}
}

