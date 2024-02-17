import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";

const AjouterProduitInterditParent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.grerProduitInterdit}>
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.amineTypo]}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.text4Position]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.amClr]}>PAS A l’école</Text>
      <Text style={[styles.am, styles.amTypo]}>9:30 AM</Text>
      <Text style={[styles.ecolePrivAl, styles.budgetPosition]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={styles.component2143}>
        <View style={[styles.component2498Child, styles.text4Position]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View
        style={[
          styles.grerProduitInterditChild,
          styles.rectanglePressableBorder,
        ]}
      />
      <View style={styles.component2499}>
        <View style={[styles.component2498Child, styles.text4Position]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      <Text style={styles.dt}>41,5 DT</Text>
      <Text style={[styles.budget, styles.budgetTypo]}>Budget</Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape2.png")}
      />
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.text4Position]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </View>
      <Text style={[styles.lesProduitInterdits, styles.text4Typo]}>
        Les produit interdits
      </Text>
      <View style={[styles.grerProduitInterditItem, styles.grerShadowBox]} />
      <Image
        style={[styles.plusCircleIcon, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
      <Text style={[styles.nomProduit, styles.idTypo]}>Nom produit :</Text>
      <Text style={[styles.danupFraise, styles.textTypo]}>Danup Fraise</Text>
      <Text style={[styles.text, styles.textTypo]}>122</Text>
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <View style={[styles.grerProduitInterditInner, styles.grerShadowBox]} />
      <Image
        style={[styles.plusCircleIcon1, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
      <Text style={[styles.nomProduit1, styles.id1Typo]}>Nom produit :</Text>
      <Text style={[styles.chocotomFraise, styles.text1Typo]}>
        Chocotom Fraise
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>201</Text>
      <Text style={[styles.id1, styles.id1Typo]}>ID</Text>
      <View style={[styles.rectangleView, styles.grerShadowBox]} />
      <Image
        style={[styles.plusCircleIcon2, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
      <Text style={[styles.nomProduit2, styles.id2Typo]}>Nom produit :</Text>
      <Text style={[styles.cakeFraise, styles.text2Typo]}>Cake fraise</Text>
      <Text style={[styles.text2, styles.text2Typo]}>305</Text>
      <Text style={[styles.id2, styles.id2Typo]}>ID</Text>
      <View style={[styles.grerProduitInterditChild1, styles.grerShadowBox]} />
      <Image
        style={[styles.plusCircleIcon3, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
      <Text style={[styles.nomProduit3, styles.id3Typo]}>Nom produit :</Text>
      <Text style={[styles.tarteFraise, styles.text3Typo]}>Tarte fraise</Text>
      <Text style={[styles.text3, styles.text3Typo]}>509</Text>
      <Text style={[styles.id3, styles.id3Typo]}>ID</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableBorder]}
        onPress={() => navigation.navigate("AjouterAllrgie")}
      />
      <Text style={[styles.ajouterDesProduits, styles.budgetTypo]}>
        Ajouter des produits interdit
      </Text>
      <Image
        style={[styles.plusCircleIcon4, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />
      <View style={styles.grerProduitInterditChild2} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  amineTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  text4Position: {
    left: "0%",
    top: "0%",
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amClr: {
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
  },
  amTypo: {
    height: 7,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.5,
    textAlign: "left",
    position: "absolute",
  },
  budgetPosition: {
    left: 140,
    color: Color.colorBlack,
  },
  rectanglePressableBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  budgetTypo: {
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  grerShadowBox: {
    height: 67,
    width: 313,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
    left: 26,
    position: "absolute",
  },
  plusIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
    overflow: "hidden",
  },
  idTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 283,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  id1Typo: {
    top: 373,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    top: 393,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  id2Typo: {
    top: 463,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    top: 483,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  id3Typo: {
    top: 553,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text3Typo: {
    top: 573,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
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
  amine: {
    top: 0,
    left: 0,
    letterSpacing: 2.2,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  amineWrapper: {
    top: 79,
    left: 134,
    width: 70,
    height: 21,
    position: "absolute",
  },
  component2498Child: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  unionIcon: {
    height: "66.11%",
    width: "66.67%",
    top: "16.11%",
    right: "16.67%",
    bottom: "17.78%",
    left: "16.67%",
  },
  component2498: {
    left: 122,
    width: 18,
    height: 18,
    top: 107,
    position: "absolute",
  },
  pasALcole: {
    left: 142,
    width: 72,
    height: 11,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.5,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    textAlign: "left",
    position: "absolute",
  },
  am: {
    left: 227,
    width: 40,
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    height: 7,
    fontFamily: FontFamily.poppinsRegular,
  },
  ecolePrivAl: {
    top: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 199,
    height: 7,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.5,
    textAlign: "left",
    position: "absolute",
  },
  image3Icon: {
    top: 68,
    left: 35,
    borderRadius: Border.br_21xl_5,
    width: 81,
    height: 84,
    position: "absolute",
  },
  unionIcon1: {
    height: "58.42%",
    width: "58.42%",
    top: "21.05%",
    right: "21.05%",
    bottom: "20.53%",
    left: "20.53%",
  },
  component2143: {
    left: 262,
    width: 19,
    height: 19,
    top: 107,
    position: "absolute",
  },
  grerProduitInterditChild: {
    left: 203,
    width: 75,
    top: 147,
    height: 21,
  },
  unionIcon2: {
    height: "58%",
    width: "58.5%",
    top: "21%",
    right: "20.5%",
    bottom: "21%",
    left: "21%",
  },
  component2499: {
    top: 148,
    left: 257,
    width: 20,
    height: 20,
    position: "absolute",
  },
  dt: {
    top: 149,
    left: 206,
    fontFamily: FontFamily.portLligatSansRegular,
    width: 92,
    color: Color.colorWhite,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    height: 18,
    textAlign: "left",
    position: "absolute",
  },
  budget: {
    width: 161,
    height: 17,
    top: 147,
    left: 140,
    color: Color.colorBlack,
  },
  shapeIcon: {
    top: -64,
    left: -83,
    width: 182,
    height: 182,
    position: "absolute",
  },
  unionIcon3: {
    height: "66.55%",
    width: "66.55%",
    top: "16.55%",
    right: "16.9%",
    bottom: "16.9%",
    left: "16.55%",
  },
  component24991: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  lesProduitInterdits: {
    top: 227,
    left: 44,
    letterSpacing: 1.1,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  grerProduitInterditItem: {
    top: 268,
  },
  plusCircleIcon: {
    top: 290,
    left: 306,
    height: 22,
    width: 22,
  },
  nomProduit: {
    left: 45,
  },
  danupFraise: {
    top: 303,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    left: 45,
  },
  text: {
    left: 256,
    top: 303,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },
  id: {
    left: 255,
  },
  grerProduitInterditInner: {
    top: 358,
  },
  plusCircleIcon1: {
    top: 380,
    left: 306,
    height: 22,
    width: 22,
  },
  nomProduit1: {
    left: 45,
  },
  chocotomFraise: {
    left: 45,
  },
  text1: {
    left: 256,
  },
  id1: {
    left: 255,
  },
  rectangleView: {
    top: 448,
  },
  plusCircleIcon2: {
    top: 470,
    left: 306,
    height: 22,
    width: 22,
  },
  nomProduit2: {
    left: 45,
  },
  cakeFraise: {
    left: 45,
  },
  text2: {
    left: 256,
  },
  id2: {
    left: 255,
  },
  grerProduitInterditChild1: {
    top: 538,
  },
  plusCircleIcon3: {
    top: 560,
    left: 306,
    height: 22,
    width: 22,
  },
  nomProduit3: {
    left: 45,
  },
  tarteFraise: {
    left: 45,
  },
  text3: {
    left: 255,
  },
  id3: {
    left: 254,
  },
  rectanglePressable: {
    top: 643,
    left: 29,
    width: 305,
    height: 35,
  },
  ajouterDesProduits: {
    top: 649,
    left: 57,
    width: 224,
    height: 10,
    color: Color.colorWhite,
  },
  plusCircleIcon4: {
    top: 648,
    left: 302,
  },
  grerProduitInterditChild2: {
    top: 338,
    left: 357,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro,
    width: 3,
    height: 90,
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
  text4: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  grerProduitInterdit: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterProduitInterditParent;
