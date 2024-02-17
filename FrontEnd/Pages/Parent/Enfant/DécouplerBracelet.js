import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";

const DécouplerBracelet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dcouplerLeBracelet}>
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.amineTypo]}>Amine</Text>
      </View>
      <View style={[styles.component2498, styles.componentPosition]}>
        <View style={[styles.component2498Child, styles.text3Position]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.textTypo]}>PAS A l’école</Text>
      <Text style={[styles.am, styles.amTypo]}>9:30 AM</Text>
      <Text style={[styles.ecolePrivAl, styles.budgetPosition]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      <Image
        style={[styles.image3Icon, styles.image3IconPosition]}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={[styles.component2143, styles.componentPosition]}>
        <View style={[styles.component2498Child, styles.text3Position]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View style={[styles.dcouplerLeBraceletChild, styles.dcouplerBorder]} />
      <View style={styles.component2499}>
        <View style={[styles.component2498Child, styles.text3Position]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      <Text style={[styles.dt, styles.dtTypo]}>41,5 DT</Text>
      <Text style={[styles.budget, styles.budgetTypo]}>Budget</Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.text3Position]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </View>
      <Text style={[styles.dcouplerLeBracelet1, styles.textTypo]}>
        Découpler le bracelet
      </Text>
      <View
        style={[styles.dcouplerLeBraceletItem, styles.image3IconPosition]}
      />
      <Text style={[styles.ouiJai, styles.jaiTypo]}>
        Oui , j’ai perdu le bracelet
      </Text>
      <Text style={[styles.jaiBesoinDe, styles.jaiTypo]}>
        J’ai besoin de maintenance
      </Text>
      <Text style={[styles.non, styles.jaiTypo]}>Non</Text>
      <Text style={[styles.vousEtesSureDeContainer, styles.dtTypo]}>
        <Text style={styles.vousEtesSureDe}>{`Vous-etes sure de découpler le 
Bracelet`}</Text>
        <Text style={styles.textTypo}>{` `}</Text>
        <Text style={styles.textTypo}>
          <Text style={styles.text2}>{`13012024 `}</Text>
        </Text>
        <Text style={styles.vousEtesSureDe}>De</Text>
        <Text style={styles.textTypo}> Amine</Text>
      </Text>
      <Text style={[styles.ajouterDesProduits, styles.budgetTypo]}>
        Ajouter des produits interdit
      </Text>
      <Pressable
        style={[styles.dcouplerLeBraceletInner, styles.dcouplerBorder]}
        onPress={() => navigation.navigate("AjouterAllrgie")}
      />
      <Text style={[styles.ajouterDesProduits, styles.budgetTypo]}>
        Associer avec une bracelet
      </Text>
      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />
     
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
  componentPosition: {
    top: 107,
    position: "absolute",
  },
  text3Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  image3IconPosition: {
    left: 35,
    position: "absolute",
  },
  dcouplerBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  dtTypo: {
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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
  jaiTypo: {
    height: 25,
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
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
  },
  pasALcole: {
    left: 142,
    width: 72,
    height: 11,
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    letterSpacing: 0.5,
    fontWeight: "600",
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
    borderRadius: Border.br_21xl_5,
    width: 81,
    height: 84,
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
  },
  dcouplerLeBraceletChild: {
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
    height: 18,
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
  dcouplerLeBracelet1: {
    top: 217,
    left: 43,
    letterSpacing: 1.1,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dcouplerLeBraceletItem: {
    top: 270,
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
    width: 284,
    height: 207,
  },
  ouiJai: {
    top: 368,
    width: 121,
    left: 70,
    height: 25,
    color: Color.colorMediumturquoise_200,
  },
  jaiBesoinDe: {
    top: 418,
    width: 121,
    left: 70,
    height: 25,
    color: Color.colorMediumturquoise_200,
  },
  non: {
    top: 369,
    left: 239,
    width: 37,
    height: 25,
    color: Color.colorMediumturquoise_200,
  },
  vousEtesSureDe: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  text2: {
    textDecoration: "underline",
  },
  vousEtesSureDeContainer: {
    top: 297,
    left: 58,
    width: 237,
    color: Color.colorBlack,
  },
  ajouterDesProduits: {
    top: 508,
    left: 54,
    width: 224,
    height: 10,
    color: Color.colorWhite,
  },
  dcouplerLeBraceletInner: {
    top: 502,
    left: 26,
    width: 305,
    height: 35,
  },
  plusCircleIcon: {
    top: 507,
    left: 299,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
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
  text3: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0.8,
    lineHeight: 15,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  dcouplerLeBracelet: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DécouplerBracelet;
