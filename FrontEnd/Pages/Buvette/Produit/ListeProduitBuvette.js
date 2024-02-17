import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable,ScrollView, TextInput} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import axios from 'axios';

const ListeProduitBuvette = () => {
  const [chercher, setChercher] = useState('');
  const navigation = useNavigation();
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://192.168.1.5:4000/Produit/getNomEtPrix');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProduits();
  }, []);

  return (
    <ScrollView>
    <View style={styles.listeProduit}>
      <View style={[styles.listeProduitChild, styles.listeProduitChildBg]} />
      <View style={styles.component2499}>
        <Image
          style={[styles.unionIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/union6.png")}
        />
      </View>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
     
      <Image
        style={styles.listeProduitItem}
        contentFit="cover"
        source={require("../../../assets/Homme.png")}
      />
      <Text style={[styles.bonjourNourredin, styles.bonjourNourredinClr]}>
        Bonjour , Nourredin
      </Text>
      {/*Section Liste des produits */}
      <Text style={[styles.listeDesProduits, styles.bonjourNourredinTypo]}>
        Liste des produits
      </Text>
      {/*Section Chercher un produit */}
      <View style={[styles.chercherWrapper, styles.chercherParentLayout]}>
      <TextInput 
        placeholder="Chercher un produit"
        onChangeText={(text) => {
          setChercher(text);
          handleChercherProduit(text); // Appel de la fonction de recherche à chaque fois que le texte change
        }}
        value={chercher}
        style={{top:276,left:235}}
      />
      </View>
      {/* Affichage des produits récupérés */}
      <View style={[styles.listeProduitInner, styles.listeChildShadowBox]}>
      <ScrollView>
      {produits && Array.isArray(produits) && produits.map((produit, index) => (
    <View key={index} style={{ flexDirection: 'row'}}>
      <Text style={{right:-19,top:5,marginRight: 40 }}>{`Nom : ${produit.NomProduit}`}</Text>
      <Text style={{top:5,marginBottom:15}}>{`Prix : ${produit.Prix}`}</Text>
    </View>
  ))}
  </ScrollView>
    </View>
         {/*Boutton Ajouter un produit */}
      <Pressable
        style={[styles.rectanglePressable, styles.listeProduitChildBg]}
        onPress={() => navigation.navigate("AjouterUnProduitBuvette")}
      />
      <Text
        style={[styles.ajouterDesProduits, styles.bonjourNourredinClr]}
      >{`Ajouter des produits `}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listeProduitChildBg: {
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  chercherTypo: {
    letterSpacing: 0.5,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
 
  chercherParentLayout: {
    height: 15,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  bonjourNourredinClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  bonjourNourredinTypo: {
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  listeChildShadowBox: {
    height: "42%",
    width: 313,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
    left: 35,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "84.48%",
    right: "10.64%",
    width: "4.88%",
    height: "2.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition4: {
    left: "86.13%",
    right: "12.13%",
    width: "1.73%",
    height: "0.8%",
  },
  vectorIconPosition3: {
    right: "12%",
    width: "2.13%",
    height: "0.86%",
    left: "85.87%",
  },
  idTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 330,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    top: 350,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIconPosition2: {
    top: "53.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  id1Typo: {
    top: 420,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2Typo: {
    top: 440,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIconPosition1: {
    top: "64.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  id2Typo: {
    top: 510,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3Typo: {
    top: 530,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "75.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  id3Typo: {
    top: 600,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text4Typo: {
    top: 620,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  listeProduitChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 233,
  },
  component2499Child: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  unionIcon: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
    position: "absolute",
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
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  listeProduitItem: {
    top: 70,
    width: 92,
    height: 91,
    left: 264,
    position: "absolute",
  },
  bonjourNourredin: {
    top: 190,
    left: 80,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  listeDesProduits: {
    top: 274,
    left: 53,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "relative",
    alignItems:'flex-start'
  },
  listeProduitInner: {
    top: 315,
alignItems:'flex-start'  },
  vectorIcon: {
    top: "41.72%",
    bottom: "56.02%",
  },
  vectorIcon1: {
    bottom: "56.71%",
    top: "42.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    bottom: "56.65%",
    left: "85.87%",
    top: "42.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nomProduit: {
    left: 54,
  },
  danupFraise: {
    left: 54,
  },
  text1: {
    left: 265,
  },
  id: {
    left: 264,
  },
  rectangleView: {
    top: 405,
  },
  vectorIcon3: {
    top: "52.81%",
    bottom: "44.94%",
  },
  vectorIcon4: {
    bottom: "45.63%",
    left: "86.13%",
    right: "12.13%",
    width: "1.73%",
    height: "0.8%",
  },
  vectorIcon5: {
    bottom: "45.57%",
    left: "85.87%",
    right: "12%",
    width: "2.13%",
    height: "0.86%",
  },
  nomProduit1: {
    left: 54,
  },
  chocotomFraise: {
    left: 54,
  },
  text2: {
    left: 265,
  },
  id1: {
    left: 264,
  },
  listeProduitChild1: {
    top: 495,
  },
  vectorIcon6: {
    top: "63.89%",
    bottom: "33.85%",
  },
  vectorIcon7: {
    bottom: "34.54%",
    left: "86.13%",
    right: "12.13%",
    width: "1.73%",
    height: "0.8%",
  },
  vectorIcon8: {
    bottom: "34.48%",
    left: "85.87%",
    right: "12%",
    width: "2.13%",
    height: "0.86%",
  },
  nomProduit2: {
    left: 54,
  },
  cakeFraise: {
    left: 54,
  },
  text3: {
    left: 265,
  },
  id2: {
    left: 264,
  },
  listeProduitChild2: {
    top: 585,
  },
  vectorIcon9: {
    top: "74.98%",
    bottom: "22.77%",
  },
  vectorIcon10: {
    bottom: "23.46%",
    left: "86.13%",
    right: "12.13%",
    width: "1.73%",
    height: "0.8%",
  },
  vectorIcon11: {
    bottom: "23.4%",
    left: "85.87%",
    right: "12%",
    width: "2.13%",
    height: "0.86%",
  },
  nomProduit3: {
    left: 54,
  },
  tarteFraise: {
    left: 54,
  },
  text4: {
    left: 264,
  },
  id3: {
    left: 263,
  },
  rectanglePressable: {
    top: 690,
    left: 38,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 305,
    height: 45,
  },
  ajouterDesProduits: {
    top: 705,
    left: 89,
    fontSize: 20,
    letterSpacing: 0.9,
    lineHeight: 20,
    fontFamily: FontFamily.playRegular,
    width: 224,
    height: 70,
  },
  vectorIcon12: {
    top: "85.81%",
    right: "11.71%",
    bottom: "11.93%",
    left: "83.41%",
    width: "4.88%",
    height: "2.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon13: {
    height: "0.9%",
    width: "0.53%",
    top: "86.49%",
    right: "13.6%",
    bottom: "12.61%",
    left: "85.87%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "84.88%",
    top: "86.95%",
    right: "13.17%",
    bottom: "12.81%",
    width: "1.95%",
    height: "0.25%",
    position: "absolute",
  },
  listeProduit: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ListeProduitBuvette;
