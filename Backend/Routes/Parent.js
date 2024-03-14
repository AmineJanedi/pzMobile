// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Parent = require('../Models/Parents'); // Import the Parent model

router.post('/AjouterParents', async (req, res) => {
    try {
      // Extract data from the request body
      const { nom, email, motDePasse, cin, typeCompte } = req.body;
  
      // Check if the email is already registered
      const existingParent = await Parent.findOne({ email });
      if (existingParent) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(motDePasse, 10); // 10 is the salt rounds
  
      // Create a new parent instance with the hashed password
      const newParent = new Parent({
        nom,
        email,
        motDePasse: hashedPassword, // Store the hashed password
        cin,
        typeCompte
      });
  
      // Save the new parent to the database
      await newParent.save();
  
      // Send a success response
      res.status(201).json({ message: 'Parent added successfully', parent: newParent });
      let nombreParent = await Parent.updateOne({}, { $inc: { NbParent: 1 } });
  
    } catch (error) {
      // Handle errors
      console.error("Error adding parent:", error);
      res.status(500).json({ message: 'Error adding parent' });
    }
  });
//Route login**********************************************************************************************
router.post('/login', async (req, res) => {
    try {
      const { email, motDePasse } = req.body;
      console.log("Received email:", email); // Log received email
      console.log("Received password:", motDePasse); // Log received password
  
      const parent = await Parent.findOne({ email });
      if (!parent) {
        console.log("Email not found");
        return res.status(404).json({ message: 'Email not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(motDePasse, parent.motDePasse);
      if (!isPasswordValid) {
        console.log("Incorrect password");
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      console.log("Login successful");
      return res.status(200).json({ message: 'Login successful', parent });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
//Recherche nom parent en fonction id
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const parent = await Parent.findById(id);
  
      if (parent) {
        return res.status(200).json({ parent });
      } else {
        return res.status(404).json({ message: 'Parent not found' });
      }
    } catch (error) {
      console.error('Error fetching parent details:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    
module.exports = router;
