const Jwt = require('jsonwebtoken');
const config = require('../config/config');

const  isAuthorized = (req,res,next)=>{
    let bearerToken = '';
    let bearerHeader =  req.headers["authorization"];

    if(typeof bearerHeader !== 'undefined'){
        try{
            let bearer = bearerHeader.split("");
            bearerToken = bearer[1];
            if(bearerToken == undefined){
                bearerToken = bearerHeader;
            }
            Jwt.verify(bearerToken,config.secret,(err,decoded)=>{
                if(err){
                        res.status(403).send({ status: 403, message: 'Not Authorized 1' });
                }else{
                    req.user = decoded;
                    req.user['userId'] = decoded.id;
                    next();
                }
            });
        } catch(error){
            res.status(403).send({ status: 403, message: 'Not Authorized 2' });
        }
    }else{
        res.status(403).send({ status: 403, message: 'Not Authorized ' });
    }
};

    module.exports ={
        isAuthorized :isAuthorized
    };