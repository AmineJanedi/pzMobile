import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FirstPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.stpage}>

      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
       <Image
        style={styles.logo}
        source={require("../assets/LOGO.svg")}
      />
      <Text style={styles.logotxt}>Bienvenue dans ParentZEN</Text>
      <View style={styles.stpageChild} />
      <Text
        style={[styles.continuerEnTant, styles.parentTypo]}
      >{`Continuer en tant que `}</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("WelcomeP")}
      >
       
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperPosition]}
        onPress={() => navigation.navigate("WelcomeB")}
      >
       
      </Pressable>
      <Text style={[styles.parent, styles.parentTypo]}>Parent</Text>
      <Text style={styles.buvette}>Buvette</Text>
      
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  logo:{
height:100,
width:100,
left:140,
top:80,
  },
  logotxt:{
    left:65,
    top:90,
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 31,
    letterSpacing: 1.4,
    fontSize: FontSize.size_lg,

  },
  parentTypo: {
    height: 23,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  wrapperPosition: {
    width: 244,
    left: 61,
    position: "absolute",
  },
  continuerPosition: {
    top: "80.91%",
    height: "7.64%",
    position: "absolute",
  },
  shapeIcon: {
    top: -94,
    left: -74,
    width: 290,
    height: 270,
    position: "absolute",
  },
  stpageChild: {
    top: 227,
    left: 29,
    borderRadius: 66,
    backgroundColor: "rgba(80, 194, 201, 0.24)",
    width: 319,
    height: 357,
    position: "absolute",
  },
  continuerEnTant: {
    top: 259,
    left: 62,
    width: 241,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 320,
    height: 58,
  },
  container: {
    top: 458,
    height: 57,
  },
  parent: {
    top: 338,
    left: 146,
    width: 71,
  },
  buvette: {
    top: 475,
    left: 147,
    width: 83,
    height: 22,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  stpageItem: {
    width: "86.67%",
    right: "6.4%",
    bottom: "11.45%",
    left: "6.93%",
    backgroundColor: Color.colorMediumturquoise_200,
  },
  continuer: {
    width: "86.4%",
    left: "9.33%",
    lineHeight: 25,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    height: "7.64%",
  },
  stpage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default FirstPage;
