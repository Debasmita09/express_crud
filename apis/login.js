module.exports={
    login: async(req,res)=>{
        res.render('../views/login', {status: 200, msg: 'loggedin'});
    }
}

//TASK - REDIRECT TO LOCALHOST :3000 LOIG INSERT
