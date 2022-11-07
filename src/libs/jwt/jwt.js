var jwt = require('jsonwebtoken');
const SECRETPASS = "SUSHI2022"
let getTipoRoles = ()=>
{
    return {
        cliente:"clientRol",
        administrativos:"userAdminsRol"
    }
}

let LogInUserJWT = (user) =>
{

    var token = jwt.sign({ idUser: user._id,name:user.name,rol: getTipoRoles().administrativos}, SECRETPASS,{expiresIn:'24h'});
    return token
}

let LogInClientsJWT = (user) =>
{

    var token = jwt.sign({ idUser: user._id,name:user.name,rol: getTipoRoles().cliente}, SECRETPASS,{expiresIn:'24h'});
    return token
}

let logOutUserJWT = (token) =>
{

}

let isOkUserJWT = (req, res, next)=>
{
    try{
        var decoded = jwt.verify(req.body.token, SECRETPASS);
        req.body.data = decoded;
        return next();
    }catch (e) {
        return res.status(401).json({
            msm:e.toString(),
            datos:null
        })
        /*return {
            status_code : 400,
            idUser: null,
            name: null
        }*/
    }
}

module.exports = {isOkUserJWT,logOutUserJWT,LogInUserJWT,LogInClientsJWT,getTipoRoles}