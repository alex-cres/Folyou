var db = require('../dbconnect.js');

function postRecomend(req, res,next) {
    let params=req.body;
   
    db.query("CALL createUpdateRecomendation(?,?)", [params.idUser,params.idUser1], function (rows, error) {
          
        if(error){
                res.send({error: true, err: error});
        }else{
            res.send({error: false});     
            next();
        }
    });
}
module.exports = postRecomend;