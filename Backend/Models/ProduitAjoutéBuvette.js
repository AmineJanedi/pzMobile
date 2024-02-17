const mongoose =require ('mongoose');

const ProduitAjoutéBuvette = mongoose.model('ProduitAjoutéBuvette',{
    NomProduit :{
        type:String
    },
    Prix :{
        type:Number
    }
})
module.exports=ProduitAjoutéBuvette;