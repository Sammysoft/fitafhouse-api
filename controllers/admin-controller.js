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
    },      _getUsers: async(req,res,next)=>{
        try {
            const users = await User.find({role: 'Investor'})
            res.status(200).json({
                users
            })
        } catch (error) {
            res.status(400).json({
                msg: 'Could Not Fetch Users'
            })
        }

},
_getStats: async(req,res,next)=>{
   const numberOfNonActiveInvestors = await User.where({investment: []}).count()
   const numberOfUsers = await User.find().count({})
   const numberOfActiveInvestors = numberOfUsers - numberOfNonActiveInvestors
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
}

