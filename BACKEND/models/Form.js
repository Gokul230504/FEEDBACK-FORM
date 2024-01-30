var mdb = require('mongoose')
const FormScheme= new mdb.Schema(
{
    name:{type:String},
    email:{type:String,unique:true},
    feedback:{type:String},
}
)
const form_module=mdb.model('Feedback Form',FormScheme)
module.exports=form_module