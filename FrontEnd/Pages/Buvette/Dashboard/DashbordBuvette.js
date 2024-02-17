import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Pressable, Text,ScrollView  } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import axios from 'axios';

const DashboardBuvette = () => {
  const navigation = useNavigation();
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET à l'API GetAllProduits
    axios.get('http://192.168.1.5:4000/Produit/getNomEtPrix')
      .then(response => {
        // Mettre à jour l'état local avec les données des produits reçues
        setProduits(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);
  return (
    <ScrollView>
    <View style={styles.dashboardBuvette}>
      {/*Dashboard partie supérieure */}
     
      <View style={[styles.dashboardBuvetteChild, styles.id18192088Position]} />
      <Pressable
        style={[styles.component832, styles.componentLayout]}
        onPress={() => navigation.navigate("FirstPage")}
      >
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      
     {/*Image d'employé buvette */}
      <Image
        style={styles.dashboardBuvetteItem}
        contentFit="cover"
        source={require("../../../assets/Homme.png")}
      />
      <Pressable 
              onPress={() => navigation.navigate("ModifierPageBuvette")}
              >
       <Image
          style={[styles.Parametre]}
          contentFit="cover"
          source={require("../../../assets/union6.png")}
        />
        </Pressable>
      <Text style={styles.bonjourNourredin}>Bonjour , Nourredin</Text>
      {/*Produit 1*/}
      <Text style={[styles.produits, styles.produitsTypo]}>Produits</Text>
     <View style={styles.chocotomChocolatWrapper}>
     <ScrollView horizontal={true} style={styles.scrollView}>
    {/* Afficher les détails des produits */}
    {produits.map(produit => (
      <View key={produit.ID} style={styles.produit}>
        <Text>{produit.NomProduit}</Text>
        <Text>Prix: {produit.Prix}</Text>
      </View>
    ))}
  </ScrollView>
    </View>
   
      {/*Transaction */ }
      <View style={styles.dashboardBuvetteInner} />
      <Text style={[styles.transaction, styles.produitsTypo]}>Transaction</Text>
      <Text style={[styles.toutesLesTransactions, styles.id18192088Typo]}>
        Toutes les transactions
      </Text>
      <View style={[styles.id13122024Parent, styles.id13122024ParentLayout]}>
        <Text style={[styles.id13122024, styles.total5dtLayout]}>
          ID : 13122024
        </Text>
        <Text style={[styles.total5dt, styles.total5dtLayout]}>
          Total : 5DT
        </Text>
      </View>
     
        {/*Ajouter produits*/}
        <Pressable
        style={[styles.plusCircle, styles.componentLayout]}
        onPress={() => navigation.navigate("ListeProduitBuvette")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/pluscircle2.png")}
        />
      </Pressable>
      
      {/*Caisse */}
      <View style={styles.dashboardBuvetteChild2} />
      <Text style={[styles.caisse, styles.caissePosition]}>Caisse</Text>
      <Text style={[styles.dt, styles.dtPosition]}>500 DT</Text>
      <Text style={[styles.ecolePrivAl, styles.dtPosition]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      {/*Wallet*/}
      <Pressable
        style={[styles.component697, styles.caissePosition]}
        onPress={() => navigation.navigate("RetirerArgentBuvette")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../../../assets/union7.png")}
        />
      </Pressable>
     {/*Bouton scanner bracelet */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("EnfantScannéBuvette")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={styles.register}>Scanner Bracelet</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  id18192088Position: {
    top: 0,
    left: 0,
  },
  scrollView: {
    flexDirection: 'row',
  },
  produit: {
    marginRight: 10, // Espacement entre les produits
  },
  componentLayout: {
    height: 24,
    width: 24,
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
  produitsTypo: {
    color: Color.colorGray_300,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  id18192088Typo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  id13122024ParentLayout: {
    height: 15,
    position: "absolute",
  },
  total5dtLayout: {
    width: 80,
    height: 15,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
 
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
 
  caissePosition: {
    top: 260,
    position: "absolute",
  },
  dtPosition: {
    left: 220,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  dashboardChildLayout: {
    height: 105,
    width: 87,
    borderWidth: 0.5,
    borderColor: Color.colorCadetblue,
    top: 369,
    borderStyle: "solid",
    position: "absolute",
  },
  id201Layout: {
    top: 421,
    width: 39,
    height: 15,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  prix1dtLayout: {
    width: 65,
    top: 451,
    height: 15,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  dashboardBuvetteChild: {
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    left: 0,
    position: "absolute",
  },
  unionIcon: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
  },
  component832: {
    top: 187,
    left: 19,
  },
  unionIcon1: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
  },
  component2499: {
    top: 67,
    left: 342,
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
 
  dashboardBuvetteItem: {
    top: 70,
    left: 264,
    height: 91,
    width: 92,
    position: "absolute",
  },
  Parametre:{
    top: 70,
    left: 340,
    height: 20,
    width: 20,
    position: "absolute",
  },
  bonjourNourredin: {
    top: 190,
    left: 80,
    color: Color.colorWhite,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  produits: {
    top: 334,
    left: 27,
  },
  transaction: {
    top: 494,
    left: 34,
  },
  dashboardBuvetteInner: {
    top: 527,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 300,
    height: 196,
    left: 31,
    position: "absolute",
  },
  toutesLesTransactions: {
    top: 544,
    left: 52,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  id13122024: {
    left: 0,
  },
  total5dt: {
    left: 100,
  },
  id13122024Parent: {
    top: 578,
    width: 180,
    left: 75,
    height: 15,
  },
  id18192088: {
    width: 85,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  id18192088Parent: {
    top: 598,
    width: 180,
    left: 75,
    height: 15,
  },
  id13122066: {
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  id13122066Parent: {
    top: 623,
    width: 180,
    left: 75,
    height: 15,
  },
  id13122024Group: {
    top: 648,
    width: 180,
    left: 75,
    height: 15,
  },
  chocotomChocolatWrapper: {
    top: 382,
    width: "100%",
    height: "100%",
    left: 40,
    position: "absolute",
  },
  sandwitchThon: {
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
    left: 140,
    top: 377,
    width: 78,
    height: 28,
  },
  icon: {
    overflow: "hidden",
  },
  plusCircle: {
    left: 329,
    top: 335,
  },
  rectangleView: {
    top: 588,
    left: 287,
  },
  dashboardBuvetteChild1: {
    top: 482,
    left: 280,
    transform: [
      {
        rotate: "89.78deg",
      },
    ],
  },
  dashboardBuvetteChild2: {
    top: 248,
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 326,
    height: 59,
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
    color: Color.colorWhite,
    textAlign: "left",
  },
  dt: {
    top: 257,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.9,
    lineHeight: 17,
    fontFamily: FontFamily.portLligatSansRegular,
    height: 18,
    width: 92,
  },
  ecolePrivAl: {
    top: 277,
    fontSize: FontSize.size_4xs,
    letterSpacing: 0.5,
    lineHeight: 10,
    width: 95,
    height: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  dashboardBuvetteChild3: {
    left: 31,
  },
  dashboardBuvetteChild4: {
    left: 133,
  },
  cakeFraiseWrapper: {
    width: 39,
    left: 240,
    top: 377,
    height: 28,
    position: "absolute",
  },
  dashboardBuvetteChild5: {
    left: 233,
  },
  component697: {
    left: 315,
    width: 31,
    height: 31,
  },
  id201: {
    left: 40,
  },
  prix1dt: {
    left: 40,
  },
  prix1dt1: {
    left: 140,
  },
  prix1dt2: {
    left: 240,
  },
  id101: {
    left: 140,
  },
  id301: {
    left: 240,
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
  },
  register: {
    width: "99.7%",
    lineHeight: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.colorWhite,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  button: {
    top: 740,
    left: 33,
    width: 304,
    height: 48,
    position: "absolute",
  },
  dashboardBuvette: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DashboardBuvette;
