const mongoose =require ('mongoose');

const ProduitAjoutéBuvette = mongoose.model('ProduitAjoutéBuvette',{
    ID:{
        type:Number
    },
    NomProduit :{
        type:String
    },
    Prix :{
        type:String
    }
})
module.exports=ProduitAjoutéBuvette;