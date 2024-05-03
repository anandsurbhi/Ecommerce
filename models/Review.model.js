const mongoose=require('mongoose');

const reviewschema=mongoose.Schema({
rating:{
    type:Number,
    required:true,
    min:0,
    max:5
},
comment:{
    type:String
}

})

module.exports=mongoose.model('Review',reviewschema);
