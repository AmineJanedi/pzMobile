import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../../../GlobalStyles";

const WelcomeB = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.buvette}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
      <Text
        style={[styles.espaceBuvette, styles.getStartedTypo]}
      >{`Espace Buvette `}</Text>
      <Text style={styles.bienvenuChezParent}>{`Bienvenu chez Parent Zen ! 
Vous allez profiter d'une organisation de transaction avec les enfants en accord avec des contraintes bien définies.`}</Text>
     
     
     
    
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("LoginBuvette")}
      >
        <View style={[styles.buttonChild, styles.getStartedPosition]} />
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Se connecter
        </Text>
      </Pressable>
      <Pressable
        style={styles.vousNavezPasContainer}
        onPress={() => navigation.navigate("SignupBuvette")}
      >
        <Text style={styles.text8}>
          <Text
            style={styles.vousNavezPas}
          >{`Vous n’avez pas de compte ? `}</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../../../assets/Buvette.png")}
      />
    </View></ScrollView>
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
    top: "0%",
    width: "4.53%",
    height: "100%",
    overflow: "hidden",
  },
  buttonChildPosition: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  getStartedTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  getStartedPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
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
    fontSize: FontSize.size_smi,
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  espaceBuvette: {
    top: 435,
    left: 48,
    lineHeight: 21,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  bienvenuChezParent: {
    top: 478,
    left: 37,
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 22,
    color: Color.colorGray_100,
    width: 293,
    height: 128,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    left: "0%",
  },
  getStarted: {
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
    left: 26,
    height: 62,
  },
  vousNavezPas: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumturquoise_200,
  },
  text8: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 0.8,
  },
  vousNavezPasContainer: {
    left: 31,
    top: 740,
    position: "absolute",
  },
  image5Icon: {
    top: 220,
    left: 102,
    width: 170,
    height: 170,
    position: "absolute",
  },
  buvette: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default WelcomeB;
