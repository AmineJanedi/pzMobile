import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registration}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
     
      <Text
        style={[styles.bienvenueParent, styles.registerTypo]}
      >{`Bienvenue Parent `}</Text>
      <Text style={[styles.remplirCeFormulaire, styles.entrerVotreEmailTypo]}>
        Remplir ce formulaire avant de commencer
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DashboardParent")}
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
          Confirmer votre Mot de passe
        </Text>
      </View>
      <Pressable
        style={styles.vousAvezDjaContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text1}>
          <Text style={styles.textClr}>{`Vous avez déja un compte ? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    overflow: "hidden",
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  registerTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  entrerVotreEmailTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.poppins,
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
    left: 27,
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
    maxHeight: "100%",
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
    maxHeight: "100%",
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
    top: "0%",
    width: "4.53%",
    height: "100%",
    overflow: "hidden",
    right: "0%",
  },
  text: {
    lineHeight: 15,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    letterSpacing: 0.8,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    left: 25,
    height: 16,
    width: 325,
    position: "absolute",
  },
  bienvenueParent: {
    top: 237,
    left: 92,
    lineHeight: 21,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  remplirCeFormulaire: {
    top: 272,
    left: 31,
    color: "rgba(0, 0, 0, 0.74)",
    textAlign: "center",
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
    top: 656,
    height: 62,
    left: 27,
    width: 325,
    position: "absolute",
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
    textAlign: "left",
  },
  input: {
    top: 411,
  },
  input1: {
    top: 339,
  },
  input2: {
    top: 483,
  },
  input3: {
    top: 555,
  },
  signIn: {
    fontWeight: "700",
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.poppins,
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
  registration: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Registration;
