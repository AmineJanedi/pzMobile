import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const AlimenterCompteEnfant = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.alimenterCompteEnfant}>
      <View style={styles.amineWrapper}>
        <Text style={styles.amine}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.text1Typo]}>PAS A l’école</Text>
      <Text style={styles.am}>9:30 AM</Text>
      <Text style={styles.ecolePrivAl}>Ecole privé al yassmine,La Marsa</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={styles.component2143}>
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <View style={styles.alimenterCompteEnfantChild} />
      <View style={styles.component2499}>
        <View style={[styles.component2498Child, styles.text1Position]} />
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
        source={require("../../../assets/shape.png")}
      />
      <Pressable
        style={styles.component24991}
        onPress={() => navigation.navigate("DashboardLemon")}
      >
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </Pressable>
      <Text style={styles.alimenterLeBracelet}>Alimenter le bracelet</Text>
      <View style={styles.alimenterCompteEnfantItem} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Pressable
        style={styles.alimenter}
        onPress={() => navigation.navigate("DashboardLemon")}
      >
        <Text style={[styles.alimenter1, styles.budgetTypo]}>Alimenter</Text>
      </Pressable>
      <View
        style={[styles.alimenterCompteEnfantInner, styles.alimenterShadowBox]}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.montant, styles.montantTypo]}>Montant :</Text>
      <Text style={[styles.dt1, styles.textTypo]}>50 DT</Text>
      <View
        style={[styles.alimenterCompteEnfantChild1, styles.alimenterShadowBox]}
      />
      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>13012024</Text>
      <Text style={[styles.idBracelet, styles.montantTypo]}>ID Bracelet :</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text1Position: {
    left: "0%",
    top: "0%",
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  budgetTypo: {
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  vectorIconPosition: {
    left: "57.71%",
    right: "39.89%",
    width: "2.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alimenterShadowBox: {
    height: 32,
    width: 254,
    left: 53,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  montantTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
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
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
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
    lineHeight: 9,
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xs,
    top: 112,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  am: {
    left: 227,
    width: 40,
    height: 7,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    lineHeight: 9,
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xs,
    top: 112,
    textAlign: "left",
    position: "absolute",
  },
  ecolePrivAl: {
    top: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 199,
    left: 140,
    height: 7,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    letterSpacing: 0.5,
    textAlign: "left",
    position: "absolute",
  },
  image3Icon: {
    top: 68,
    borderRadius: Border.br_21xl_5,
    width: 81,
    height: 84,
    left: 35,
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
  alimenterCompteEnfantChild: {
    left: 203,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 75,
    backgroundColor: Color.colorMediumturquoise_200,
    top: 147,
    height: 21,
    position: "absolute",
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
    fontFamily: FontFamily.playRegular,
    left: 140,
    color: Color.colorBlack,
    position: "absolute",
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
  alimenterLeBracelet: {
    top: 217,
    left: 43,
    letterSpacing: 1.1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  alimenterCompteEnfantItem: {
    top: 261,
    width: 284,
    height: 216,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    left: 35,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.49%",
    top: "55.3%",
    bottom: "44.21%",
  },
  vectorIcon1: {
    height: "0.62%",
    top: "54.68%",
    bottom: "44.7%",
  },
  alimenter1: {
    color: Color.colorMediumturquoise_200,
    width: 84,
    height: 10,
  },
  alimenter: {
    left: 139,
    top: 439,
    position: "absolute",
  },
  alimenterCompteEnfantInner: {
    top: 298,
  },
  rectangleView: {
    top: 304,
    left: 118,
    borderRadius: Border.br_81xl,
    width: 1,
    backgroundColor: Color.colorWhite,
    height: 19,
    position: "absolute",
  },
  montant: {
    top: 276,
    left: 54,
  },
  dt1: {
    top: 306,
    left: 77,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  alimenterCompteEnfantChild1: {
    top: 378,
  },
  plusCircleIcon: {
    top: 383,
    left: 280,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 386,
    left: 77,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  idBracelet: {
    top: 353,
    left: 53,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
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
  text1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    lineHeight: 15,
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
  alimenterCompteEnfant: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AlimenterCompteEnfant;
