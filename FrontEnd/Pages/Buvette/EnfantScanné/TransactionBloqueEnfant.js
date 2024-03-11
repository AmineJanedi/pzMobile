import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";

const TransactionBloqueEnfant = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactionBloquEnfant}>
      <View
        style={[
          styles.transactionBloquEnfantChild,
          styles.produitsInterditsPosition,
        ]}
      />
      <View style={[styles.component2499, styles.plusCircleLayout]}>
        <View style={[styles.component2499Child, styles.childPosition]} />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
     
      <Image
        style={styles.transactionBloquEnfantItem}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Text style={[styles.bonjourNourredin, styles.produitsTypo]}>
        Bonjour , Nourredin
      </Text>
      <Text style={[styles.enfantScann, styles.produitsTypo]}>
        Enfant scanné
      </Text>
      <View style={styles.transactionBloquEnfantInner} />
      <Text style={[styles.transaction, styles.caissePosition1]}>
        Transaction
      </Text>
      <Text style={[styles.produits, styles.produitsTypo]}>Produits</Text>
      <View style={[styles.plusCircle, styles.plusCircleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleBorder]} />
      <Text style={[styles.caisse, styles.caissePosition]}>Caisse</Text>
      <Text style={[styles.dt, styles.dtPosition]}>500 DT</Text>
      <Text style={[styles.ecolePrivAl, styles.dtPosition]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleBorder]}
        onPress={() => navigation.navigate("DashboardFille")}
      />
      <View style={[styles.chocotomWrapper, styles.chocotomWrapperLayout]}>
        <Text style={[styles.chocotom, styles.containerTypo]}>Chocotom</Text>
      </View>
      <View style={[styles.totale1DtWrapper, styles.chocotomWrapperLayout]}>
        <Text style={[styles.totale1Container, styles.containerTypo]}>
          <Text style={styles.totale}>Totale</Text>
          <Text style={styles.dt1}> : 1 DT</Text>
        </Text>
      </View>
      <View style={[styles.etatTransactionBloqueChWrapper, styles.etatLayout]}>
        <Text
          style={[styles.etatTransactionBloqueContainer, styles.etatLayout]}
        >
          <Text style={styles.totale}>Etat</Text>
          <Text style={styles.dt1}>{` :Transaction Bloquée ! `}</Text>
          <Text style={styles.textTypo}>Chochotom</Text>
          <Text style={styles.dt1}>{` est un produit interdit !  `}</Text>
        </Text>
      </View>
      <View style={[styles.id201Parent, styles.chocotomWrapperLayout]}>
        <Text style={[styles.id201, styles.containerTypo]}>ID:201</Text>
        <Text style={[styles.prix1dt, styles.containerTypo]}>Prix : 1DT</Text>
      </View>
      <Pressable
        style={[styles.component697, styles.caissePosition]}
        onPress={() => navigation.navigate("RetirerArgentBuvette")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icon.png")}
        />
      </Pressable>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.containerTypo]}>Amine</Text>
      </View>
      <View style={[styles.bracletId13122024Wrapper, styles.wrapperPosition]}>
        <Text style={[styles.bracletIdContainer, styles.containerTypo]}>
          <Text style={styles.textTypo}>Braclet ID</Text>
          <Text style={styles.dt1}> : 13122024</Text>
        </Text>
      </View>
      <View style={[styles.budget5DtWrapper, styles.wrapperPosition]}>
        <Text style={[styles.bracletIdContainer, styles.containerTypo]}>
          <Text style={styles.textTypo}>Budget</Text>
          <Text style={styles.dt1}> : 5 DT</Text>
        </Text>
      </View>
      <View style={[styles.produitsInterditsWrapper, styles.wrapperPosition]}>
        <Text style={[styles.produitsInterdits, styles.registerFlexBox]}>
          20 Produits Interdits
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("DashboardBuvette")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.register, styles.registerFlexBox]}>
          Menu principale
        </Text>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("AprsScannerEnfant")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.register, styles.registerFlexBox]}>
          Changer produit
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  produitsInterditsPosition: {
    top: 0,
    left: 0,
  },
  plusCircleLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    top: "0%",
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
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  produitsTypo: {
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  caissePosition1: {
    left: 46,
    textAlign: "left",
  },
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
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
  chocotomWrapperLayout: {
    height: 15,
    position: "absolute",
  },
  containerTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    top: 0,
  },
  etatLayout: {
    width: 255,
    height: 15,
    position: "absolute",
  },
  wrapperPosition: {
    left: 129,
    position: "absolute",
  },
  registerFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 121,
    top: 722,
    position: "absolute",
  },
  transactionBloquEnfantChild: {
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    left: 0,
    position: "absolute",
  },
  component2499Child: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  unionIcon: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: "0%",
    top: "0%",
    position: "absolute",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  notification: {
    top: 15,
    width: 325,
    height: 16,
    left: 25,
    position: "absolute",
  },
  transactionBloquEnfantItem: {
    top: 70,
    left: 264,
    height: 91,
    width: 92,
    position: "absolute",
  },
  bonjourNourredin: {
    top: 190,
    color: Color.colorWhite,
    left: 80,
    textAlign: "left",
  },
  enfantScann: {
    top: 334,
    left: 27,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  transactionBloquEnfantInner: {
    top: 522,
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
    height: 173,
    left: 31,
    position: "absolute",
  },
  transaction: {
    top: 490,
    color: Color.colorGray_300,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  produits: {
    top: 543,
    color: Color.colorGray_300,
    left: 80,
    textAlign: "left",
  },
  plusCircle: {
    top: 405,
    left: 323,
    overflow: "hidden",
  },
  rectangleView: {
    top: 248,
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 326,
    height: 59,
    left: 25,
    backgroundColor: Color.colorMediumturquoise_200,
  },
  caisse: {
    fontSize: FontSize.size_mid,
    letterSpacing: 1,
    lineHeight: 20,
    fontFamily: FontFamily.playRegular,
    width: 114,
    height: 17,
    left: 46,
    textAlign: "left",
    color: Color.colorWhite,
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
  rectanglePressable: {
    top: 369,
    borderColor: Color.colorCadetblue,
    borderWidth: 0.5,
    width: 87,
    height: 95,
    left: 31,
  },
  chocotom: {
    height: 15,
    position: "absolute",
    width: 104,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  chocotomWrapper: {
    width: 104,
    height: 15,
    top: 579,
    left: 80,
  },
  totale: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  dt1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  totale1Container: {
    height: 15,
    position: "absolute",
    width: 104,
    left: 0,
  },
  totale1DtWrapper: {
    top: 609,
    width: 104,
    height: 15,
    left: 80,
  },
  etatTransactionBloqueContainer: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  etatTransactionBloqueChWrapper: {
    top: 639,
    left: 80,
  },
  id201: {
    width: 39,
    height: 15,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  prix1dt: {
    left: 58,
    width: 62,
    height: 15,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
  },
  id201Parent: {
    left: 197,
    width: 120,
    top: 579,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  component697: {
    left: 315,
    width: 31,
    height: 31,
  },
  image2Icon: {
    top: 376,
    left: 43,
    borderRadius: Border.br_11xl_5,
    width: 61,
    height: 60,
    position: "absolute",
  },
  amine: {
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    position: "absolute",
  },
  amineWrapper: {
    top: 446,
    left: 53,
    width: 42,
    height: 14,
    position: "absolute",
  },
  bracletIdContainer: {
    left: 0,
    position: "absolute",
  },
  bracletId13122024Wrapper: {
    top: 379,
    width: 133,
    height: 14,
  },
  budget5DtWrapper: {
    top: 399,
    width: 88,
    height: 14,
  },
  produitsInterdits: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.6,
    lineHeight: 12,
    width: 115,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  produitsInterditsWrapper: {
    top: 420,
    height: 12,
    width: 115,
  },
  buttonChild: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
  },
  register: {
    width: "99.67%",
    lineHeight: 25,
    textAlign: "center",
    justifyContent: "center",
    color: Color.colorWhite,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  button: {
    left: 207,
  },
  button1: {
    left: 57,
  },
  transactionBloquEnfant: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransactionBloqueEnfant;
