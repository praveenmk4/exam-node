module.exports.getHome= (req,res) =>{ 
    res.send('You are in Home Page');
};

//logout
module.exports.logout = (req,res) =>{
    req.logout();
    res.redirect();
};