const mongoose =require ('mongoose');

const Buvette = mongoose.model('Produits',{
    NomComplet:{
        type:String
    },
    Email:{
        type:String
    },
    MotDePasse:{
        type:String
    },
    Patente:{
        data: Buffer, // Données de l'image ou du PDF
        contentType: String // Type de contenu (ex: 'image/jpeg', 'application/pdf', etc.)
        },
    ContratEcole:{
            data: Buffer, // Données de l'image ou du PDF
            contentType: String // Type de contenu (ex: 'image/jpeg', 'application/pdf', etc.)
            },
     AdresseEcole:{
            type:String
        }

})
module.exports=Buvette;