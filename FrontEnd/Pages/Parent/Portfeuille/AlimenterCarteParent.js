import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";

const AlimenterCarteParent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.alimenterCarteParent}>
      <View style={styles.alimenterCarteParentChild} />
      <Text style={[styles.alimenterVotreCarte, styles.textTypo]}>
        Alimenter votre carte
      </Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
     
      <Image
        style={styles.alimenterCarteParentItem}
        contentFit="cover"
        source={require("../../../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.component2499}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <View style={[styles.component2499Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </Pressable>
      <View
        style={[styles.alimenterCarteParentInner, styles.rectangleViewPosition]}
      />
      <Text style={[styles.budget, styles.dtLayout]}>Budget</Text>
      <Text style={[styles.text1, styles.textTypo]}>2154 2201 4850 ****</Text>
      <Text style={[styles.dt, styles.dtLayout]}>500 DT</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.virementBancaire, styles.sweatCoinTypo]}>
        Carte bancaire
      </Text>
     
      <Image
        style={[styles.component78Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/component-78.png")}
      />
      <Text style={[styles.choisirMthodes, styles.textTypo]}>
        Choisir méthodes
      </Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("MthodeBancaire")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/ellipse-246.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("MthodeSweatCoin")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/ellipse-247.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("MthodeCoupons2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/ellipse-248.png")}
        />
      </Pressable>
      <View style={[styles.component719, styles.iconLayout]}>
        <View style={[styles.component2499Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/union7.png")}
        />
      </View>
      <Image
        style={[styles.component431Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/component-431.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component2499ChildPosition: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  dtLayout1: {
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  textPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 26,
    position: "absolute",
  },
  dtLayout: {
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  sweatCoinTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    left: "22.67%",
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 46,
    position: "absolute",
  },
  frameLayout: {
    height: 12,
    width: 12,
    left: 247,
    position: "absolute",
  },
  alimenterCarteParentChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMediumturquoise_200,
    width: 375,
    height: 233,
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
  alimenterCarteParentItem: {
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
  alimenterCarteParentInner: {
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
    width: 323,
    height: 185,
  },
  virementBancaire: {
    top: "69.22%",
  },
 
  component78Icon: {
    top: 421,
  },
  choisirMthodes: {
    top: 381,
    left: 50,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 428,
  },
  container: {
    top: 468,
  },
  frame: {
    top: 513,
  },
  unionIcon1: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
  },
  component719: {
    top: 464,
  },
  component431Icon: {
    top: 506,
  },
  alimenterCarteParent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AlimenterCarteParent;
