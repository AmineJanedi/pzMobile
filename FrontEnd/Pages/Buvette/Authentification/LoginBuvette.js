import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text,TextInput, View, Pressable,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";
import { useState } from 'react';


const LoginBuvette = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  return (
    <ScrollView>
    <View style={styles.login}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
    
      <Text style={[styles.bienvenueParent, styles.signIn1Typo1]}>
        Bienvenue Buvette
      </Text>
      <Text style={[styles.motDePasse, styles.signIn1Typo]}>
        Mot de passe oublié ?
      </Text>
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("DashboardBuvette")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Pressable
          style={styles.childPosition}
          onPress={() => navigation.navigate("DashboardBuvette")}
        >
          <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.input, styles.inputLayout]}>
      <View style={[styles.inputChild, styles.childPosition]} />
      {/* TextInput pour la saisie de texte */}
      <TextInput 
        placeholder="Entrer votre Email"
        onChangeText={(text) => setEmail(text)}
        value={Email}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />


      </View>
      <View style={[styles.input1, styles.inputLayout]}>
      <View style={[styles.inputChild, styles.childPosition]} />
         <TextInput 
        placeholder="Entrer votre Mot de passe"
        secureTextEntry={true}

        onChangeText={(text) => setPassword(text)}
        value={Password}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />
      </View>
      <Image
        style={styles.undrawMyNotificationsRjej1Icon}
        contentFit="cover"
        source={require("../../../assets/Buvette.png")}
      />
      <View style={styles.loginChild} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    width: 325,
    left: 25,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  textTypo: {
    textAlign: "left",
    position: "absolute",
  },
  signIn1Typo1: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
  },
  signIn1Typo: {
    textAlign: "center",
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  inputLayout: {
    height: 51,
    width: 325,
    left: 25,
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
  },
  batteryThreeQuartersIcon: {
    left: "95.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    position: "absolute",
    overflow: "hidden",
    right: "0%",
  },
  text: {
    lineHeight: 15,
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 15,
    height: 16,
  },
  bienvenueParent: {
    top: 196,
    left: 110,
    lineHeight: 21,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  motDePasse: {
    top: 616,
    left: 104,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorMediumturquoise_200,
    letterSpacing: 0.8,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  signIn1: {
    width: "99.69%",
    lineHeight: 25,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    height: "100%",
    textAlign: "center",
  },
  button: {
    top: 656,
    height: 62,
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  entrerVotreEmail: {
    top: "31.37%",
    left: "9.23%",
    lineHeight: 18,
    color: Color.colorGray_200,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  input: {
    top: 468,
  },
  input1: {
    top: 540,
  },
  undrawMyNotificationsRjej1Icon: {
    top: 252,
    left: 102,
    width: 172,
    height: 170,
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    width: 259,
    height: 206,
  },
  login: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginBuvette;
