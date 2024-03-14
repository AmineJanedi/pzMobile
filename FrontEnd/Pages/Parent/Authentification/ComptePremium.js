import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text,ScrollView,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";

const ComptePremium = () => {
  const navigation = useNavigation();
  const [Nom, setNom] = useState('');
  const[Numéro,setNuméro]=useState('');
  const[Exp,setExp]=useState('');
  const[Cvv,setCvv]=useState('');
  const[Montant,setMontant]=useState('');



  return (
    <ScrollView>
    <View style={styles.comptePremium}>
      
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      {/*Rectangle Virement bancaire */}
      <View style={styles.comptePremiumChild} />
      {/*Nom */}
      <Text style={[styles.nom, styles.nomTypo]}>{`Nom  `}</Text>
      <View style={[styles.comptePremiumItem, styles.compteShadowBox]} />
      <TextInput 
        placeholder="Entrer votre nom"
        onChangeText={(text) => {
          setNom(text);
        }}
        value={Nom}
        style={[styles.lindaSaied, styles.nomTypo]}/>
        {/*Numéro de carte */}
      <Text style={[styles.numroDeLa, styles.nomTypo]}>Numéro de la carte</Text>
      <View style={[styles.comptePremiumInner, styles.compteShadowBox]} />
      <TextInput 
        placeholder="XXXX XXXX XXXX XXXX"
        inputMode="numeric"
        maxLength={16}
        onChangeText={(text) => {
          setNuméro(text);
        }}
        value={Numéro}
      style={[styles.comptePremiumInner1, styles.nomTypo1]}      />
      <Image
        style={styles.component78Icon}
        contentFit="cover"
        source={require("../../../assets/Bank.png")}
      />
      <Text style={[styles.virementBancaire, styles.virementBancaireTypo]}>
        Virement bancaire
      </Text>
     
     {/*Exp date */}
     <Text style={[styles.expDate, styles.cvvTypo]}>Exp Date</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <TextInput
            style={{top:595,left:60,color:'white'}} // Style de TextInput
            placeholder="MM/AA"
            maxLength={5}
            keyboardType='numbers-and-punctuation'
            onChangeText={(text) => {
              setExp(text);
            }}
            value={Exp}
          />
          {/*CVV */}
      <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
      <View
        style={[styles.comptePremiumChild1, styles.rectangleViewShadowBox]}
      />
      <TextInput
            style={{top:580,left:220,color:'white'}} // Style de TextInput
            placeholder="XXX"
            maxLength={3}
            keyboardType='decimal-pad'
            onChangeText={(text) => {
              setCvv(text);
            }}
            value={Cvv}
          />
      <Text style={[styles.payerVotreCompte, styles.virementBancaireTypo]}>
        Activer votre compte Premium avec 20 DT seulement !
      </Text>
      <Text style={styles.avecLaVersionContainer}>
        <Text
          style={styles.avecLaVersion}
        >{`Avec la version Premium vous pouvez:
`}</Text>
        <Text
          style={styles.suivreLemplacementDe}
        >{`Suivre l’emplacement de votre enfant!
Savoir le Rythme cardiaque de votre enfant !
Savoir le niveaux d’oxygéne de votre enfant!
Savoir la température de votre enfant !
Consulter l’intérpretation d’un médcin AI`}</Text>
      </Text>
      <View
          style={{top: 665,
            left: 55, height: 32,
            width: 227,
            shadowOpacity: 1,
            elevation: 15,
            shadowRadius: 15,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            
            shadowColor: "rgba(0, 0, 0, 0.25)",
            borderRadius: Border.br_5xl,
            backgroundColor: Color.colorMediumturquoise_200,
            position: "absolute",}}
        />
            <TextInput
            style={{top:639,left:75,color:'white'}} // Style de TextInput
            placeholder="10 DT"
            maxLength={2}
            inputMode='numeric'
            onChangeText={(text) => {
              setMontant(text); 
            }}
            value={Montant}
          />
    <Text style={{left: "15.67%",
     top: 640,
      color: Color.colorMediumturquoise_200,
      fontFamily: FontFamily.poppinsRegular,
      lineHeight: 18,
      letterSpacing: 0.8,
      fontSize: FontSize.size_smi,
      textAlign: "left",
      position: "absolute",}}>Montant</Text>
       
         {/*Bouton Payer*/}
         <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn, styles.signInPosition]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.payer}>Payer</Text>
        </Pressable>
      </View>
      
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  signInPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  nomTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  nomTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color:'white',
    position: "absolute",
  },
  cvvTypo: {
    top: "69.46%",
    textAlign: "left",
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  virementBancaireTypo: {
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 1.1,
    position: "absolute",
  },
  compteShadowBox: {
    height: 32,
    width: 227,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    width: 132,
    top: 587,
    height: 32,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  shapeIcon: {
    top: -109,
    left: -99,
    width: 290,
    height: 270,
    position: "absolute",
  },
  component2499Child: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  unionIcon: {
    height: "66.55%",
    width: "66.55%",
    top: "16.55%",
    right: "16.9%",
    bottom: "16.9%",
    left: "16.55%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component2499: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  payer: {
    width: "99.68%",
    lineHeight: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 1.1,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    height: "100%",
  },
  signIn: {
    left: "0%",
    top: "0%",
  },
  button: {
    top: 725,
    left: 68,
    width: 222,
    height: 40,
    position: "absolute",
  },
  comptePremiumChild: {
    top: 345,
    left: 26,
    backgroundColor: Color.colorWhite,
    width: 323,
    height: 365,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  nom: {
    top: "49.75%",
    color: Color.colorMediumturquoise_200,
    textAlign: "left",
    lineHeight: 18,
    left: "14.67%",
  },
  numroDeLa: {
    top: "60.84%",
    color: Color.colorMediumturquoise_200,
    textAlign: "left",
    lineHeight: 18,
    left: "14.67%",
  },
  expDate: {
    left: "14.67%",
    top: "69.46%",
  },
  component78Icon: {
    top: 358,
    left: 46,
    width: 24,
    height: 24,
    position: "absolute",
  },
  virementBancaire: {
    top: 361,
    left: 90,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_300,
  },
  comptePremiumItem: {
    top: 437,
    left: 52,
  },
  comptePremiumInner: {
    top: 517,
    left: 55,
  },
  comptePremiumInner1: {
    top: 525,
    left: 65,
  },
  rectangleView: {
    left: 55,
  },
  cvv: {
    left: "57.33%",
  },
  comptePremiumChild1: {
    left: 205,
  },
  lindaSaied: {
    top: 446,
    left: 75,
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorWhite,
  },
  payerVotreCompte: {
    top: 160,
    left: 45,
    fontSize: 17,
    lineHeight: 22,
    width:300
  },
  avecLaVersion: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  suivreLemplacementDe: {
    fontFamily: FontFamily.poppinsRegular,
  },
  avecLaVersionContainer: {
    top: 210,
    left: 25,
    color: Color.colorGray_100,
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  comptePremium: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ComptePremium;
