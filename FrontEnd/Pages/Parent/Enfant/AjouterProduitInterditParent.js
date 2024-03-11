import { StyleSheet, View, Text,  Button,Alert ,ScrollView,TextInput,Pressable} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../../../GlobalStyles";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { RadioButton,Checkbox } from 'react-native-paper';


const AjouterProduitInterditParent = () => {
  const navigation = useNavigation();
  const [Chercher, setchercher] = useState('');
  const [selectedProduit, setSelectedProduit] = useState([]);
  const [produits, setProduits] = useState([]);
  const [chercher, setChercher] = useState('');
  const [produitTrouve, setProduitTrouve] = useState(null);

  const handleChercherProduit = async () => {
    try {
      // Appel de l'API de recherche de produit avec le nom saisi par l'utilisateur
      const response = await axios.get(`http://192.168.1.4:4000/Produit/chercherProduit/${chercher}`);
      // Si le produit est trouvé, mettre à jour l'état du produit trouvé
      setProduitTrouve(response.data);
    } catch (error) {
      // En cas d'erreur, afficher une alerte avec le message d'erreur
    }
  };
  const handleCategoryChange = (value) => {
    setSelectedProduit(value);
  };
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:4000/Produit/getNomEtPrix');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };
    fetchProduits();
  }, []);
  const ajouterProduitsInterdits = async () => {
    try {
      // Vérifiez s'il y a des produits sélectionnés
      if (selectedProduit.length === 0) {
        console.error("Aucun produit sélectionné.");
        return;
      }

      // Envoyez les données des produits sélectionnés à l'API
      const response = await axios.post('http://192.168.1.4:4000/ProduitInterdit/AjouterProduitsInterdits', { produitsSelectionnes: selectedProduit });
      
      // Vérifiez si la requête a réussi
      if (response.status === 200) {
        console.log("Produits interdits ajoutés avec succès :", response.data);
        // Réinitialisez l'état des produits sélectionnés après l'ajout
        setSelectedProduit([]);
      } else {
        console.error("Erreur lors de l'ajout des produits interdits :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout des produits interdits :", error);
    }
  };
  
  return (
    <ScrollView>
    <View style={styles.aprsScannerEnfant}>      
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require(".../../../assets/shape1.png")}
      />
{/* Ajouter des produit intérdit*/}
<View
        style={styles.rectanglePressable}/>
      <Text style={[styles.enfantScann, styles.produitsClr]}>
      Ajouter des produit intérdit
      </Text>
      <View style={[styles.aprsScannerEnfantChild4, styles.aprsChildLayout]} />
      <Image
        style={[styles.image2Icon, styles.buttonPosition]}
        contentFit="cover"
        source={require(".../../../assets/image-3.png")}
      />
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.sandwitchTypo]}>Amine</Text>
      </View>
      <View style={[styles.bracletId13122024Wrapper, styles.wrapperPosition]}>
        <Text style={[styles.bracletIdContainer, styles.sandwitchTypo]}>
          <Text style={styles.textTypo}>Braclet ID</Text>
          <Text style={styles.ID}>Test</Text>
        </Text>
      </View>
      <View style={[styles.budget5DtWrapper, styles.wrapperPosition]}>
        <Text style={[styles.bracletIdContainer, styles.sandwitchTypo]}>
          <Text style={styles.textTypo}>Budget</Text>
          <Text style={styles.Budget}>Test</Text>
        </Text>
      </View>
      <View style={[styles.produitsInterditsWrapper, styles.wrapperPosition]}>
        <Text style={[styles.produitsInterdits, styles.registerFlexBox]}>
          20 Produits Interdits
        </Text>
      </View>

      {/*Produits */}
      <View style={[styles.aprsScannerEnfantInner, styles.checkboxContainer]}>
  <Text style={[styles.toutesLesProduits, styles.sandwitchTypo]}>
    Toutes les produits
  </Text>
  <View style={styles.chercherWrapper}>
    <TextInput 
      placeholder="Chercher un produit"
      onChangeText={(text) => {
        setChercher(text);
        handleChercherProduit(text); // Appel de la fonction de recherche à chaque fois que le texte change
      }}
      value={chercher}
      style={styles.entrerVotreEmail}
    />
  </View>
  <ScrollView>
    {produits.filter((produit) => produit.NomProduit.toLowerCase().includes(chercher.toLowerCase()))
      .map((produit, index) => (
        <Checkbox.Item
          key={index}
          label={`${produit.NomProduit} (${produit.Prix} DT)`}
          status={selectedProduit.includes(produit.NomProduit) ? 'checked' : 'unchecked'}
          onPress={() => {
            const selected = [...selectedProduit];
            if (selected.includes(produit.NomProduit)) {
              selected.splice(selected.indexOf(produit.NomProduit), 1);
            } else {
              selected.push(produit.NomProduit);
            }
            setSelectedProduit(selected);
          }}
        />
      ))}
  </ScrollView>
</View>


    </View>
    
      {/*Bouton */}
      <View style={[styles.button, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Pressable
        onPress={ajouterProduitsInterdits}
        style={[styles.register, styles.registerFlexBox]}
      >
        <Text style={[styles.register, styles.registerFlexBox]}>Ajouter</Text>
    </Pressable>
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // Alignement des éléments à gauche
    justifyContent: 'center',
  },
  checkboxContainer :{
    display:'flex',
    flexDirection:'column',/* Assurez-vous que les cases à cocher sont alignées verticalement */
    top:390,
    left:45,
    width:"70%"
  },
  checkboxItem :{
    display:'flex',
    alignItems:'center',/* Centrez les éléments horizontalement */
    marginBottom: 10 /* Espacement entre chaque case à cocher */
  },
  produit: {
    flexDirection: 'row', // Disposition en ligne pour le bouton radio et le texte
    alignItems: 'center', // Alignement vertical des éléments
    marginBottom: 20, // Marge inférieure pour séparer les produits
    
  },
  produitText: {
    marginLeft: 0, // Marge à gauche pour espacer le texte du bouton radio
  },
  sandwitchPosition: {
    left: 0,
    top: 0,
  },
  produit: {
    left:70,
    top:74
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    width: "4.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  registerTypo: {
    color: Color.colorWhite,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  produitsClr: {
    color: Color.colorGray_300,
    textAlign: "left",
  },
  sandwitchTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  dtPosition: {
    left: 220,
    color: Color.colorWhite,
    position: "absolute",
  },
  chercherTypo: {
    letterSpacing: 0.5,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  aprsChildLayout: {
    width: 17,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_31xl,
    left: 53,
    height: 17,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  chercherParentLayout: {
    height: 15,
    position: "absolute",
  },
  parentLayout: {
    width: 120,
    left: 197,
  },
  id201ParentPosition: {
    top: 420,
    height: 15,
    position: "absolute",
  },
  sandwitchLayout: {
    width: 100,
    height: 15,
    position: "absolute",
  },
  buttonPosition: {
    left: 43,
    position: "absolute",
  },
  wrapperPosition: {
    left: 129,
    position: "absolute",
  },
  registerFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  aprsScannerEnfantChild: {
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  component2499Child: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  unionIcon: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component2499: {
    top: 67,
    left: 342,
    width: 24,
    height: 24,
    position: "absolute",
  },
  shapeIcon: {
    top: -109,
    left: -99,
    width: 290,
    height: 270,
    position: "absolute",
  },
  wifiIcon: {
    right: "6.16%",
    left: "89.31%",
  },
  signalIcon: {
    right: "12.32%",
    left: "83.15%",
  },
  batteryThreeQuartersIcon: {
    left: "95.47%",
    right: "0%",
    width: "4.53%",
  },
  text: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0.8,
    lineHeight: 15,
    color: Color.colorBlack,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
 
  aprsScannerEnfantItem: {
    top: 70,
    left: 264,
    height: 91,
    width: 92,
    position: "absolute",
  },
 
  enfantScann: {
    top: 180,
    left: 27,
    color: Color.colorGray_300,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  produits: {
    top: 400,
    left: 50,
    color: Color.colorGray_300,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  aprsScannerEnfantInner: {
    top: 360,
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 323,
    height: "40%",
    backgroundColor: Color.colorWhite,
    left: 31,
    position: "flex",
  },
  toutesLesProduits: {
    top:-25,
    left: 20,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rectangleView: {
    top: 598,
    left: 327,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro,
    width: 3,
    height: 90,
    position: "absolute",
  },
  aprsScannerEnfantChild1: {
    top: 248,
    borderColor: Color.colorMediumturquoise_100,
    width: 326,
    height: 59,
    borderWidth: 1,
    borderStyle: "solid",
    left: 25,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  caisse: {
    left: 46,
    fontSize: FontSize.size_mid,
    letterSpacing: 1,
    lineHeight: 20,
    fontFamily: FontFamily.playRegular,
    width: 114,
    height: 17,
    top: 260,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  dt: {
    top: 257,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.9,
    lineHeight: 17,
    fontFamily: FontFamily.portLligatSansRegular,
    height: 18,
    width: 92,
    textAlign: "left",
  },
  ecolePrivAl: {
    top: 277,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 95,
    height: 21,
    left: 220,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectanglePressable: {
    top: 220,
    borderColor: Color.colorCadetblue,
    borderWidth: 0.5,
    width: 87,
    height: 95,
    borderStyle: "solid",
    left: 31,
    position: "absolute",
  },
  aprsScannerEnfantChild2: {
    top: 577,
    backgroundColor: Color.colorMediumturquoise_200,
  },
  sandwitchThon: {
    width: 104,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  sandwitchThonWrapper: {
    width: 104,
    top: 612,
    height: 15,
    left: 80,
  },
  id101: {
    width: 39,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  prix3dt: {
    left: 58,
    width: 62,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    top: 0,
    height: 15,
  },
  id101Parent: {
    height: 15,
    position: "absolute",
    top: 612,
  },
  chocotomWrapper: {
    width: 10,
    left: 80,
  },
  id201Parent: {
    width: 120,
    left: 197,
  },
  aprsScannerEnfantChild3: {
    top: 611,
    backgroundColor: Color.colorWhite,
  },
  sandwitchSalami: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  sandwitchSalamiWrapper: {
    top: 642,
    left: 80,
  },
  id108Parent: {
    top: 652,
    height: 15,
    position: "absolute",
  },
  aprsScannerEnfantChild4: {
    top: 651,
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  component697: {
    left: 315,
    width: 31,
    height: 31,
    top: 260,
    position: "absolute",
  },
  image2Icon: {
    top: 225,
    borderRadius: Border.br_11xl_5,
    width: 61,
    height: 60,
  },
  amine: {
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  amineWrapper: {
    top: 290,
    width: 42,
    height: 14,
    left: 53,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  bracletIdContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  bracletId13122024Wrapper: {
    top: 225,
    width: 133,
    height: 14,
  },
  budget5DtWrapper: {
    top: 250,
    width: 88,
    height: 14,
  },
  ID:{
    top: 270,
    width: 88,
    height: 14,
  },
  Budget:{
    top: 270,
    width: 88,
    height: 14,
  },
  produitsInterdits: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.6,
    lineHeight: 12,
    width: 115,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  produitsInterditsWrapper: {
    top: 278,
    height: 12,
    width: 115,
  },
  buttonChild: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
  },
  register: {
    width: "99.7%",
    lineHeight: 25,
    textAlign: "center",
    justifyContent: "center",
    color: Color.colorWhite,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    display: "flex",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  button: {
    top: 748,
    width: 304,
    height: 48,
  },
  aprsScannerEnfantChild5: {
    top: 370,
    left: 230,
    borderRadius: 25,
    width: 105,
    height: 20,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  chercher: {
    fontSize: FontSize.size_5xs,
    lineHeight: 9,
    color: "rgba(255, 255, 255, 0.75)",
    width: 104,
    letterSpacing: 0.5,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  chercherWrapper: {
    top: -26,
    left: 160,
    width: "50%",
  },
  aprsScannerEnfant: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterProduitInterditParent;
