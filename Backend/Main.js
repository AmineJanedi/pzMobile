const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./Config/Connect');
const app = express();
const PORT = 4000;

const ProduitRoute = require('./Routes/ProduitRoute');
const ProduitAjoutéBuvetteRoute=require('./Routes/ProduitAjoutéBuvetteRoute')
const ProduitInterdit=require('./Routes/ProduitInterdit')
const AllergieRoute=require('./Routes/AllergieRoute')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Utilisez l'adresse IP locale au lieu de localhost
const adresseIPLocale = '//192.168.1.4'; 
const urlBackend = `http:${adresseIPLocale}:${PORT}`;

// Utilisez l'URL de votre backend dans l'application Expo
app.use('/Produit', ProduitRoute);
app.use('/ProduitBuvette', ProduitAjoutéBuvetteRoute);
app.use('/ProduitInterdit',ProduitInterdit);
app.use('/Allergies',AllergieRoute);


// Configuration de PORT
app.listen(PORT, () => {
    console.log(`Serveur démarré à l'adresse : ${urlBackend}`);
});
