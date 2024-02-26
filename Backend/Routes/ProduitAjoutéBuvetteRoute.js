const express = require('express');
const router = express.Router();
const ProduitAjoutéBuvette = require('../models/ProduitAjoutéBuvette');

// Route pour ajouter un nouveau produit de la part de buvette
router.post('/AjouterProduitBuvette',async (req,res)=>{
    console.log(req.body)
    try {
        const savedProduit = await ProduitAjoutéBuvette.create(req.body)
        res.status(200).json(savedProduit)
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;
