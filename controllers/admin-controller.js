import User from "../config/user.model.schema.js"

export const adminController ={

    _getAllInvestors: async(req,res,next)=>{
        try {
            const users = await User.find({role: 'Investor'});
                res.status(200).json({
                    investors: users
                })

        } catch (error) {
                res.status(400).json({
                    msg: 'Error in getting investors'
                })
        }
    },

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
    }
}

