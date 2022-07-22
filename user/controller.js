

module.exports.create = function(req, res){
    //console.log(req.body);
    const user = new User(req.body);
    user.save(function(err, user){
        if(err){
            return res.json({
                status:'error',
                message: err.message
            });
        }
        return res.json({
            status:'SUCCESS',
            data: user
        });
    })
    }


    module.exports.index = function(req, res){
        User.find()
        .then(function(users){
            return res.json({data: users});
        }).catch(function(err){
            return res.json({
                status:'error',
                message: err.message
        });
        })
    }


    module.exports.show = async (req, res) => {

        //throw new Error('This is Test Error');
        try{
            const user = await User.findById(req.params.id);
        }catch(error){
            return res.json({
                status:'error',
                message: error.message
        });
        }
        }