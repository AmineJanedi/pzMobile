const express = require('express');
const router = express.Router();
const Produits = require('../Models/Produits');

// API pour récupérer le NomProduit et le Prix/////////////////////////////////////////////////////////////////////
router.get('/getNomEtPrix', async (req, res) => {
    try {
        // Récupérer uniquement les champs NomProduit et Prix de la table Produits
        const produits = await Produits.find({}, 'NomProduit Prix');
        res.status(200).json(produits);
    } catch (err) {
        console.error('Erreur lors de la récupération du NomProduit et du Prix :', err);
        res.status(500).send('Erreur lors de la récupération du NomProduit et du Prix');
    }
});
//API pour chercher un produit par Nom
router.get('/chercherProduit/:nom', async (req, res) => {
  try {
    const nomProduit = req.params.nom;
    // Recherche du produit par nom dans la base de données
    const produit = await Produits.findOne({ NomProduit: nomProduit });
    if (!produit) {
      // Si aucun produit n'est trouvé, retourner un message approprié
      return res.status(404).json({ message: "Produit non trouvé." });
    }
    // Si le produit est trouvé, créer un nouvel objet avec seulement les champs NomProduit et Prix
    const responseProduit = {
      NomProduit: produit.NomProduit,
      Prix: produit.Prix
    };
    // Retourner le nouvel objet dans la réponse
    res.status(200).json(responseProduit);
  } catch (error) {
    // En cas d'erreur, renvoyer un code d'erreur 500 avec un message d'erreur
    console.error('Erreur lors de la recherche du produit par nom :', error);
    res.status(500).json({ message: "Erreur lors de la recherche du produit par nom." });
  }
});

module.exports = router;
