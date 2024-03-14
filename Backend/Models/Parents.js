const mongoose =require ('mongoose');

const Parents = mongoose.model('Parents',{
    nom: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
      },
      motDePasse: {
        type: String,
        required: true
      },
      cin: {
        type: String,
        required: true
      },
      typeCompte: {
        type: String,
        required: true
      }
   
    
})
module.exports=Parents;