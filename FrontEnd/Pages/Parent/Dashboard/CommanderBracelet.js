import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const CommanderBracelet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardParent}>
      <View style={styles.dashboardParentChild} />
      <Pressable
        style={[styles.component2499, styles.componentIconLayout]}
        onPress={() => navigation.navigate("ModifierCompteParent")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      
      <Image
        style={styles.dashboardParentItem}
        contentFit="cover"
        source={require("../../../assets/ellipse-11.png")}
      />
      <Text style={[styles.bonjourLinda, styles.bonjourLindaTypo]}>
        Bonjour , Linda said
      </Text>
      <View style={styles.dashboardParentInner} />
      <Image
        style={[styles.rectangleIcon, styles.unionIconLayout]}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Pressable
        style={styles.accepter}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <Text style={styles.accepter1}>Accepter</Text>
      </Pressable>
      <Text
        style={[styles.entrerLaQuantit, styles.choisirMthodesClr]}
      >{`Entrer la quantité `}</Text>
      <View style={[styles.rectangleView, styles.notificationPosition]} />
      <Text style={[styles.budgetFamiliale, styles.dtTypo]}>
        Budget familiale
      </Text>
      <Text style={[styles.dt, styles.dtPosition]}>500 DT</Text>
      <Text style={[styles.text1, styles.text1Typo]}>2154 2201 4850 7896</Text>
      <Pressable
        style={styles.component754}
        onPress={() => navigation.navigate("AlimenterCarteParent")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.component832, styles.componentIconLayout]}
        onPress={() => navigation.navigate("Stpage")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.component124, styles.bonjourLindaPosition]}
        onPress={() => navigation.navigate("CentreDeNotifications")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </Pressable>
      <Text style={[styles.text2, styles.textLayout]}>-</Text>
      <Text style={[styles.text3, styles.textLayout]}>+</Text>
      <Text style={[styles.text4, styles.textLayout]}>3</Text>
      <Text style={[styles.payerEnCash, styles.text1Typo]}>Payer en cash</Text>
      <Image
        style={[styles.component78Icon, styles.componentIconLayout]}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Text style={[styles.choisirMthodes, styles.choisirMthodesClr]}>
        Choisir méthodes
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../../../assets/ellipse-246.png")}
      />
      <Image
        style={[styles.component2500Icon, styles.componentIconLayout]}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentIconLayout: {
    height: 24,
    width: 24,
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificationPosition: {
    left: 25,
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
  bonjourLindaTypo: {
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  choisirMthodesClr: {
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  dtTypo: {
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  dtPosition: {
    left: 220,
    color: Color.colorWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  bonjourLindaPosition: {
    top: 190,
    position: "absolute",
  },
  textLayout: {
    height: 33,
    width: 41,
    lineHeight: 37,
    letterSpacing: 1.9,
    fontSize: FontSize.size_13xl,
    top: 449,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  dashboardParentChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
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
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    width: 325,
    height: 16,
  },
  dashboardParentItem: {
    top: 70,
    left: 264,
    height: 91,
    width: 92,
    position: "absolute",
  },
  bonjourLinda: {
    left: 80,
    color: Color.colorWhite,
    top: 190,
    position: "absolute",
    textAlign: "left",
  },
  dashboardParentInner: {
    top: 358,
    left: 22,
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
    height: 339,
    position: "absolute",
  },
  rectangleIcon: {
    height: "4.14%",
    width: "31.47%",
    top: "79.11%",
    right: "36.27%",
    bottom: "16.75%",
    left: "32.27%",
  },
  accepter1: {
    height: "7.14%",
    width: "83.47%",
    lineHeight: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  accepter: {
    left: "6.93%",
    top: "77.96%",
    position: "absolute",
  },
  entrerLaQuantit: {
    top: 387,
    left: 99,
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
  },
  rectangleView: {
    top: 248,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 326,
    height: 59,
    backgroundColor: Color.colorMediumturquoise_200,
  },
  budgetFamiliale: {
    top: 260,
    left: 46,
    fontFamily: FontFamily.playRegular,
    width: 114,
    height: 17,
    color: Color.colorWhite,
  },
  dt: {
    top: 257,
    fontFamily: FontFamily.portLligatSansRegular,
    height: 18,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
    width: 92,
  },
  text1: {
    top: 285,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.6,
    lineHeight: 12,
    width: 130,
    height: 21,
    left: 220,
    color: Color.colorWhite,
  },
  unionIcon1: {
    height: "58.06%",
    width: "58.39%",
    top: "20.97%",
    right: "20.65%",
    bottom: "20.97%",
    left: "20.97%",
  },
  component754: {
    top: 250,
    left: 275,
    width: 31,
    height: 31,
    position: "absolute",
  },
  unionIcon2: {
    height: "50%",
    width: "43.75%",
    top: "27.08%",
    right: "27.92%",
    bottom: "22.92%",
    left: "28.33%",
  },
  component832: {
    top: 187,
    left: 19,
    position: "absolute",
  },
  unionIcon3: {
    height: "66.67%",
    width: "58.33%",
    top: "16.67%",
    right: "20.83%",
    bottom: "16.67%",
    left: "20.83%",
  },
  component124: {
    left: 320,
    height: 24,
    width: 24,
  },
  text2: {
    left: 60,
  },
  text3: {
    left: 240,
  },
  text4: {
    left: 160,
  },
  payerEnCash: {
    top: "69.21%",
    left: "26.4%",
    lineHeight: 18,
    color: Color.colorGray_200,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },
  component78Icon: {
    top: 559,
    left: 60,
    position: "absolute",
  },
  choisirMthodes: {
    top: 519,
    left: 64,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ellipseIcon: {
    top: 566,
    left: 261,
    width: 12,
    height: 12,
    position: "absolute",
  },
  component2500Icon: {
    top: 609,
    left: 60,
    position: "absolute",
  },
  dashboardParent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CommanderBracelet;
