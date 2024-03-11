const mongoose =require ('mongoose');

const AllergieAjoutéParent = mongoose.model('AllergieAjoutéParent',{

    NomAllergie :{
        type:String
    },
    IngredientAllergeneenes :{
        type:String
    }
})
module.exports=AllergieAjoutéParent;