const AdminModel = require('../model/admin.model.js');
let getAdminDetails = (req,res)=>{
    AdminModel.find({},(err, result) => {
        if (err) {
        res.send(err);
        }
        console.log(result);
        res.json(result);
        });
}
module.exports = {getAdminDetails};
