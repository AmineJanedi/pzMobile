const Enfant = require('../Models/Enfant'); // Importer le modèle Enfant

// Contrôleur pour gérer l'ajout de produits interdits à un enfant
exports.ajouterProduitsInterdits = async (req, res) => {
    try {
        // Récupérer l'ID de l'enfant depuis les paramètres de l'URL
        const enfantId = req.params.id;
        
        // Récupérer les produits interdits sélectionnés depuis le corps de la requête
        const produitsInterdits = req.body.produitsInterdits;

        // Mettre à jour l'enfant dans la base de données
        const enfant = await Enfant.findByIdAndUpdate(
            enfantId,
            { $addToSet: { ProduitInterdit: produitsInterdits } }, // Ajouter les produits interdits à la liste sans doublons
            { new: true } // Retourner l'enfant mis à jour
        );

        // Vérifier si l'enfant existe
        if (!enfant) {
            return res.status(404).json({ message: "Enfant non trouvé." });
        }

        // Envoyer une réponse de succès avec l'enfant mis à jour
        res.status(200).json(enfant);
    } catch (error) {
        // En cas d'erreur, renvoyer une réponse d'erreur
        console.error("Erreur lors de l'ajout des produits interdits :", error);
        res.status(500).json({ message: "Erreur lors de l'ajout des produits interdits." });
    }
};
