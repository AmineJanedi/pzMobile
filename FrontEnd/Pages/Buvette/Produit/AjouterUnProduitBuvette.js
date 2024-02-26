import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,TextInput,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../../../GlobalStyles";
import axios from 'axios';


const AjouterUnProduitBuvette = () => {
  const navigation = useNavigation();
  const [nomProduit, setNomProduit] = useState('');
  const [prix, setPrix] = useState('');
  const ajouterProduit = async () => {
    try {
      // Appel de l'API d'ajout de produit avec les données saisies par l'utilisateur
      const response = await axios.post('http://192.168.1.4:4000/ProduitBuvette/AjouterProduitBuvette', {
        NomProduit: nomProduit,
        Prix: prix
      });
            Alert.alert('Produit ajouté', 'La demande d\'ajouter ce produit est en cours de traitement !');

      // Réinitialisation des champs après l'ajout du produit
      setNomProduit('');
      setPrix('');
    } catch (error) {
      // En cas d'erreur, affichage d'une alerte avec le message d'erreur
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'ajout du produit : ' + error.message);
    }
  };
  return (
    <View style={styles.ajouterUnProduit}>
            <View style={[styles.dashboardBuvetteChild, styles.id18192088Position]} />
    <View style={styles.component2499}>
        <View style={styles.component2499Child} />
     
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
      <View style={styles.component2499}>
        <View style={styles.component2499Child} />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      <Text style={styles.ajouterUnProduit1}>{`Ajouter un produit `}</Text>
      <View style={[styles.ajouterUnProduitChild, styles.ajouterShadowBox]} />
      <View style={[styles.ajouterUnProduitItem, styles.ajouterShadowBox]} />
      <Text style={[styles.id, styles.idTypo]}>Prix :</Text>
      <Text style={[styles.nomProduit, styles.idTypo]}>Nom produit :</Text>
      <TextInput
        style={[styles.danupFraise, styles.textTypo]} // Style de TextInput
        placeholder="Entrez le Nom de produit"
        onChangeText={setNomProduit} 
        value={nomProduit} 
      />
      <TextInput
        style={[styles.text, styles.textTypo]} // Style de TextInput
        placeholder="Entrez le Prix"
        onChangeText={setPrix} 
        value={prix} 
      />
       
      <Pressable
        style={styles.ajouterUnProduitInner}
        onPress={ajouterProduit}
      />
      <Pressable
        style={styles.ajouterDesProduitsContainer}
        onPress={ajouterProduit}
      >
        <Text style={styles.ajouterDesProduits}>Ajouter des produits</Text>
      </Pressable>
      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  ajouterShadowBox: {
    height: 25,
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
    left: 26,
    position: "absolute",
  },
  idTypo: {
    color: Color.colorBlack,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    left: 41,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    left: 44,
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
  shapeIcon: {
    top: -64,
    left: -83,
    width: 182,
    height: 182,
    position: "absolute",
  },
  component2499Child: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  unionIcon: {
    height: "66.55%",
    width: "66.55%",
    top: "16.55%",
    right: "16.9%",
    bottom: "16.9%",
    left: "16.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardBuvetteChild: {
    width: 375,
    height: 200,
    backgroundColor: Color.colorMediumturquoise_200,
    left: 0,
    position: "absolute",
  },
  
  component2499: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  listeProduitItem: {
    top: 70,
    width: 92,
    height: 91,
    left: 264,
    position: "absolute",
  },
  ajouterUnProduit1: {
    top: 227,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.1,
    lineHeight: 21,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 44,
    position: "absolute",
  },
  ajouterUnProduitChild: {
    top: 318,
  },
  ajouterUnProduitItem: {
    top: 398,
  },
  id: {
    top: 376,
  },
  text: {
    top: 403,
  },
  nomProduit: {
    top: 296,
  },
  danupFraise: {
    top: 323,
  },
  ajouterUnProduitInner: {
    top: 453,
    left: 29,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 305,
    height: 35,
    position: "absolute",
  },
  ajouterDesProduits: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.9,
    lineHeight: 17,
    fontFamily: FontFamily.playRegular,
    color: Color.colorWhite,
    width: 224,
    height: 50,
    textAlign: "left",
  },
  ajouterDesProduitsContainer: {
    left: 57,
    top: 459,
    position: "absolute",
  },
  plusCircleIcon: {
    top: 458,
    left: 302,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
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
  text1: {
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
 
  ajouterUnProduit: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterUnProduitBuvette;
