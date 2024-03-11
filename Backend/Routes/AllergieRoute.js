const express=require('express');
const router=express.Router();
const Allergies=require('../Models/Allergies');
const AllergieAjoutéParent=require('../Models/AllergieAjoutéParent')
//Afficher tout les Allergies *********************************************************************
router.get('/GetAllAllergies',(req,res)=>{
    Allergies.find()
    .then (
    (Allergies)=>{
        res.status(200).send(Allergies);
    }
    )
    .catch (
        (err)=>{
        res.status(400).send(err)
    })
    })
    // Route pour récupérer l'allergie avec le nom "gluten"
router.get('/GetAllergies/Gluten', async (req, res) => {
    try {
      // Récupérer l'allergie avec le nom "gluten"
      const allergie = await Allergies.findOne({ NomAllergie: 'Gluten' });
  
      if (!allergie) {
        return res.status(404).json({ message: 'Aucune allergie avec le nom "gluten" n\'a été trouvée.' });
      }
  
      res.status(200).json(allergie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération de l\'allergie avec le nom "gluten".' });
    }
  });
  //API pour chercher un Allergie par Nom
router.get('/chercherAllergie/:nom', async (req, res) => {
  try {
    const nomAllergie = req.params.nom;
    // Recherche du Allergie par nom dans la base de données
    const Allergie = await AllergiesInterdit.findOne({ NomAllergie: nomAllergie });
    if (!Allergie) {
      // Si aucun Allergie n'est trouvé, retourner un message approprié
      return res.status(404).json({ message: "Allergie non trouvé." });
    }
    // Si le Allergie est trouvé, créer un nouvel objet avec seulement les champs NomAllergie et Prix
    const responseAllergie = {
      NomAllergie: Allergie.NomAllergie,
      Prix: Allergie.Prix
    };
    // Retourner le nouvel objet dans la réponse
    res.status(200).json(responseAllergie);
  } catch (error) {
    // En cas d'erreur, renvoyer un code d'erreur 500 avec un message d'erreur
    console.error('Erreur lors de la recherche du Allergie par nom :', error);
    res.status(500).json({ message: "Erreur lors de la recherche du Allergie par nom." });
  }
});
// Api pour ajouter une allergie dans la base AjouterAllergieParent*********************************************
router.post('/addAllergie', async (req, res) => {
  try {
      // Extract NomAllergie and IngredientAllergenes from the request body
      const { NomAllergie, IngredientAllergeneenes } = req.body;

      // Validate if required fields are present
      if (!NomAllergie || !IngredientAllergeneenes) {
          return res.status(400).json({ message: 'NomAllergie and IngredientAllergenes are required fields' });
      }

      // Create a new allergie instance
      const newAllergie = new AllergieAjoutéParent({
          NomAllergie,
          IngredientAllergeneenes
      });

      // Save the allergie to the database
      const savedAllergie = await newAllergie.save();

      // Send a success response with the saved allergie data
      res.status(201).json(savedAllergie);
  } catch (error) {
      // Send an error response if something goes wrong
      console.error('Error adding allergie:', error);
      res.status(500).json({ message: 'Error adding allergie' });
  }
});
    module.exports=router;