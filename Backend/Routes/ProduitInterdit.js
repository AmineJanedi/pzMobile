const express = require('express');
const router = express.Router();
const ProduitsInterdit = require('../Models/ProduitInterdit');
// API pour récupérer le NomProduit et le ID/////////////////////////////////////////////////////////////////////
router.get('/getProduitInterdit', async (req, res) => {
    try {
        // Récupérer uniquement les champs NomProduit et Prix de la table Produits
        const produits = await ProduitsInterdit.find({}, 'ID NomProduit');
        res.status(200).json(produits);
    } catch (err) {
        console.error('Erreur lors de la récupération du NomProduit et du Prix :', err);
        res.status(500).send('Erreur lors de la récupération du NomProduit et du Prix');
    }
});
//API pour chercher un produit par Nom
router.get('/chercherProduitInterdit/:nom', async (req, res) => {
    try {
      const nomProduit = req.params.nom;
      // Recherche du produit par nom dans la base de données
      const produit = await ProduitsInterdit.findOne({ NomProduit: nomProduit });
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
// Effacer Produit *********************************************************************
router.delete('/DeleteProduitInterdit/:ID', (req, res) => {
    const idp = req.params.ID;
    ProduitsInterdit.findOneAndDelete({ ID: idp })
        .then((deletedProduit) => {
            if (!deletedProduit) {
                // Si aucun produit n'a été trouvé avec cet ID, renvoyer un message approprié
                return res.status(404).send("Aucun produit trouvé avec cet ID.");
            }
            // Si le produit a été supprimé avec succès, renvoyer un message de succès
            res.status(200).send("Produit supprimé avec succès.");
        })
        .catch((err) => {
            // En cas d'erreur, renvoyer un code d'erreur 400 avec un message d'erreur
            res.status(400).send(err);
        });
});
// Route pour ajouter des produits interdits**************************************************************
router.post('/AjouterProduitsInterdits', async (req, res) => {
    try {
        // Récupérer les données des produits sélectionnés depuis le corps de la requête
        const produitsSelectionnes = req.body.produitsSelectionnes;

        // Vérifier si des produits ont été sélectionnés
        if (!produitsSelectionnes || produitsSelectionnes.length === 0) {
            return res.status(400).send("Aucun produit sélectionné.");
        }

        // Créer de nouveaux enregistrements pour chaque produit sélectionné dans la table ProduitInterdit
        const produitsInterdits = await ProduitsInterdit.create(produitsSelectionnes);

        // Envoyer une réponse avec les produits interdits ajoutés
        res.status(200).json(produitsInterdits);
    } catch (error) {
        // En cas d'erreur, envoyer une réponse avec le message d'erreur
        console.error('Erreur lors de l\'ajout des produits interdits :', error);
        res.status(500).send("Erreur lors de l'ajout des produits interdits.");
    }
});

module.exports = router;
