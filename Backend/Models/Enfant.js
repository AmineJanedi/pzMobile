const mongoose =require ('mongoose');

const Enfant = mongoose.model('Enfant',{
    NomComplet:{
        type:String
    },
    NomEcole :{
        type:String
    },
    GPSEcole :{
        type:String
    },
    IDBracelet :{
        type:String
    },
    ProduitInterdit:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Produits' }],
    Allergies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Allergies' }],

})
module.exports=Enfant;