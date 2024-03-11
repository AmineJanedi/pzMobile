import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const RegistrationParent = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
         <View style={styles.registrationParent}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
     
      <Text
        style={[styles.bienvenueBuvette, styles.registerTypo]}
      >{`Bienvenue Buvette `}</Text>
      <Text style={[styles.remplirCeFormulaire, styles.entrerVotreEmailTypo]}>
        Remplir ce formulaire avant de commencer
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("LoginBuvette")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.register, styles.registerTypo]}>Créer Compte</Text>
      </Pressable>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}>
          Entrer votre Email
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}>
          Entrer votre nom
        </Text>
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}>
          Entrer Mot de passe
        </Text>
      </View>
      <View style={[styles.input3, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}>
          Télecharger la patente
        </Text>
      </View>
      <View style={[styles.input4, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text
          style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
        >{`Télecharger le contrat `}</Text>
      </View>
      <View style={[styles.input5, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}>
          Entrer L’adresse de l’école
        </Text>
      </View>
      <Pressable
        style={styles.vousAvezDjaContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text1}>
          <Text
            style={styles.vousAvezDja}
          >{`Vous avez déja un compte ? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.component2499}
        onPress={() => navigation.navigate("Buvette")}
      >
        <View style={[styles.component2499Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </Pressable>
    </View>
    </ScrollView>
 
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: 325,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  registerTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  entrerVotreEmailTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  inputLayout: {
    height: 51,
    left: 28,
    width: 325,
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
    bottom: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    position: "absolute",
  },
  signalIcon: {
    right: "12.32%",
    left: "83.15%",
    bottom: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    position: "absolute",
  },
  batteryThreeQuartersIcon: {
    left: "95.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    width: "4.53%",
    height: "100%",
    right: "0%",
  },
  text: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    letterSpacing: 0.8,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    left: 25,
    height: 16,
  },
  bienvenueBuvette: {
    top: 138,
    left: 89,
    lineHeight: 21,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  remplirCeFormulaire: {
    top: 173,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: 28,
    lineHeight: 18,
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    left: "0%",
  },
  register: {
    width: "99.69%",
    lineHeight: 25,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  button: {
    top: 661,
    left: 27,
    height: 62,
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    left: "0%",
  },
  entrerVotreEmail: {
    top: "31.37%",
    left: "9.23%",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  input: {
    top: 304,
  },
  input1: {
    top: 237,
  },
  input2: {
    top: 376,
  },
  input3: {
    top: 448,
  },
  input4: {
    top: 518,
  },
  input5: {
    top: 588,
  },
  vousAvezDja: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  signIn: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumturquoise_200,
  },
  text1: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 0.8,
  },
  vousAvezDjaContainer: {
    left: 51,
    top: 741,
    position: "absolute",
  },
  component2499Child: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
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
    position: "absolute",
  },
  component2499: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  registrationParent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default RegistrationParent;
