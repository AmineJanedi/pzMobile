const mongoose =require ('mongoose');

const ProduitInterdit = mongoose.model('ProduitInterdit',{
    ID:{
        type:String
    },
    NomProduit :{
        type:String
    },
   
})
module.exports=ProduitInterdit;