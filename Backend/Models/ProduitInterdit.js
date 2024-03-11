const mongoose =require ('mongoose');

const ProduitInterdit = mongoose.model('ProduitInterdit',{
    ID:{
        type:Number
    },
    NomProduit :{
        type:String
    },
   
})
module.exports=ProduitInterdit;