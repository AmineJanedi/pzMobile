import * as React from "react";
import { StyleSheet, View, Text,ScrollView ,Pressable,TextInput} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const RetirerArgentBuvette = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.mthodeBancaire20}>
      <View style={styles.mthodeBancaire20Child} />
      <Text style={[styles.alimenterVotreCarte, styles.textTypo]}>
        Alimenter votre carte
      </Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
     
      <Image
        style={styles.mthodeBancaire20Item}
        contentFit="cover"
        source={require("../../../assets/Homme.png")}
      />
      <View style={styles.component2499}>
        <Image
          style={[styles.unionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>

      {/* Portfeuille */}
      <View style={styles.mthodeBancaire20Inner} />
      <Text style={[styles.budget, styles.dtLayout]}>Budget</Text>
      <Text style={[styles.text1, styles.textTypo]}>**** **** **** 4850</Text>
      <Text style={[styles.dt, styles.dtLayout]}>500 DT</Text>
      {/*Virement bancaire */}
      <View style={styles.rectangleView} />
      <Text style={[styles.virementBancaire, styles.textTypo]}>
        Virement bancaire
      </Text>
   
         {/* Formulaire */}
                  {/* Nom */}

         <View
        style={[styles.mthodeBancaire20Child1, styles.mthodeChildShadowBox1]}
      />
         <TextInput
          style={{top:460,left:60}} // Style de TextInput
          placeholder="Entrez Votre Nom"
          onChangeText={(text) => {
            // Logique de mise à jour du nom ici
          }}
        />
      <Text style={[styles.nom, styles.nomTypo]}>{`Nom  `}</Text>
               {/* Numéro de la carte */}
      <View
        style={[styles.mthodeBancaire20Child2, styles.mthodeChildShadowBox1]}
      />
       <TextInput
          style={{top:525,left:60}} // Style de TextInput
          placeholder="XXXX XXXX XXX XXXX"
          onChangeText={(text) => {
            // Logique de mise à jour du num ici
          }}
        />
      <Text style={[styles.numroDeLa, styles.nomTypo]}>Numéro de la carte</Text>
      {/*Exp date */}
      <View
        style={[styles.mthodeBancaire20Child3, styles.mthodeChildShadowBox]}
      />
      <TextInput
          style={{top:580,left:60}} // Style de TextInput
          placeholder="JJ/MM/AAAA"
          onChangeText={(text) => {
            // Logique de mise à jour du num ici
          }}
        />
      <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
      {/*CVV */}
      <View
        style={[styles.mthodeBancaire20Child4, styles.mthodeChildShadowBox]}/>
         <TextInput
          style={{top:562,left:220}} // Style de TextInput
          placeholder="XXX"
          onChangeText={(text) => {
            // Logique de mise à jour du num ici
          }}
        />
      <Text style={[styles.expDate, styles.cvvTypo]}>Exp Date</Text>
      <Image
        style={styles.component78Icon}
        contentFit="cover"
        source={require("../../../assets/Bank.png")}
      />
      {/*Boutton payer */}
       <View style={styles.button}>
       <Pressable
        style={[styles.signIn, styles.childPosition]}
        onPress={() => navigation.navigate("DashboardBuvette")}>
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.signIn, styles.childPosition]}>Payer</Text>
        </Pressable>
      </View>
    
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  dtLayout1: {
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  dtLayout: {
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  nomTypo: {
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    left: "14.67%",
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  cvvTypo: {
    top: "71.92%",
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  mthodeChildShadowBox1: {
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
  mthodeChildShadowBox: {
    width: 132,
    top: 607,
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
  mthodeBancaire20Child: {
    top: 0,
    left: 0,
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  alimenterVotreCarte: {
    top: 190,
    left: 80,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
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
    bottom: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
  },
  signalIcon: {
    right: "12.32%",
    left: "83.15%",
    bottom: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
  },
  batteryThreeQuartersIcon: {
    left: "95.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    top: "0%",
    width: "4.53%",
    right: "0%",
  },
  text: {
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  mthodeBancaire20Item: {
    top: 70,
    left: 264,
    width: 92,
    height: 91,
    position: "absolute",
  },
  component2499Child: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    left: "0%",
  },
  unionIcon: {
    height: "66.55%",
    width: "66.55%",
    top: "16.55%",
    right: "16.9%",
    bottom: "16.9%",
    left: "16.55%",
  },
  component2499: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  buttonChild: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
    width: "100%",
    left: "0%",
  },
  signIn: {
    width: "99.68%",
    lineHeight: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    left: "0%",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
  },
  button: {
    top: 701,
    left: 68,
    width: 222,
    height: 62,
    position: "absolute",
  },
  mthodeBancaire20Inner: {
    top: 254,
    borderRadius:25,
    backgroundColor: "#2D8F95",
    width: 324,
    height: 81,
    left: 26,
    position: "absolute",
  },
  budget: {
    top: 268,
    left: 85,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.9,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 91,
  },
  text1: {
    top: 302,
    left: 76,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.2,
    lineHeight: 23,
    width: 299,
    height: 22,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  dt: {
    top: 270,
    left: 166,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 90,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  rectangleView: {
    top: 365,
    backgroundColor: Color.colorWhite,
    width: 323,
    height: 311,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    left: 26,
    position: "absolute",
  },
  nom: {
    top: "52.22%",
  },
  numroDeLa: {
    top: "63.3%",
  },
  expDate: {
    left: "14.67%",
    top: "71.92%",
  },
  component78Icon: {
    top: 378,
    left: 46,
    width: 24,
    height: 24,
    position: "absolute",
  },
  virementBancaire: {
    top: 381,
    left: 90,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  mthodeBancaire20Child1: {
    top: 457,
    left: 52,
  },
  mthodeBancaire20Child2: {
    top: 537,
    left: 55,
  },
  mthodeBancaire20Child3: {
    left: 55,
  },
  cvv: {
    left: "57.33%",
  },
  mthodeBancaire20Child4: {
    left: 205,
  },
  mthodeBancaire20: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default RetirerArgentBuvette;
