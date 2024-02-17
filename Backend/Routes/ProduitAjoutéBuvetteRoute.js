const express = require('express');
const router = express.Router();
const ProduitAjoutéBuvette = require('../models/ProduitAjoutéBuvette');

// Route pour ajouter un nouveau produit
router.post('/ajouterProduit', async (req, res) => {
    try {
        // Extraire les données du corps de la requête
        const { NomProduit, Prix } = req.body;

        // Créer une nouvelle instance de ProduitAjoutéBuvette
        const nouveauProduit = new ProduitAjoutéBuvette({
            NomProduit,
            Prix
        });

        // Enregistrer le nouveau produit dans la base de données
        const produitAjouté = await nouveauProduit.save();

        // Répondre avec le produit ajouté
        res.status(201).json(produitAjouté);
    } catch (error) {
        // En cas d'erreur, répondre avec le statut 400 (Bad Request) et l'erreur
        console.error('Erreur lors de l\'ajout du produit :', error);
        res.status(400).json({ message: 'Erreur lors de l\'ajout du produit', error: error.message });
    }
});

module.exports = router;
