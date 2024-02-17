import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";

const DocteurAI = () => {
  return (
    <View style={styles.docteurAi}>
      <View style={[styles.amineWrapper, styles.amineWrapperLayout]}>
        <Text style={[styles.amine, styles.amineTypo]}>Amine</Text>
      </View>
      <View style={[styles.component2498, styles.componentPosition]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
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
      <View style={[styles.component2143, styles.componentPosition]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View style={[styles.docteurAiChild, styles.amineWrapperLayout]} />
      <View style={styles.component2499}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      <Text style={[styles.dt, styles.dtTypo]}>41,5 DT</Text>
      <Text style={[styles.budget, styles.dtTypo]}>Budget</Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </View>
      <Text style={[styles.etatDeSant, styles.etatDeSantTypo]}>
        Etat de santé :
      </Text>
      <Text style={[styles.docteurAi1, styles.textTypo1]}>Docteur AI</Text>
      <View style={[styles.docteurAiItem, styles.docteurBg]} />
      <Text style={[styles.malade, styles.textTypo]}>{`Malade `}</Text>
      <View style={[styles.docteurAiInner, styles.docteurBg]} />
      
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  amineWrapperLayout: {
    height: 21,
    position: "absolute",
  },
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
  textPosition: {
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
  dtTypo: {
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  docteurBg: {
    backgroundColor: Color.colorWhite,
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
  etatDeSantTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    left: 62,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  },
  docteurAiChild: {
    left: 203,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 75,
    top: 147,
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
    color: Color.colorWhite,
    width: 92,
    height: 18,
  },
  budget: {
    fontFamily: FontFamily.playRegular,
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
  docteurAi1: {
    top: 217,
    left: 43,
    letterSpacing: 1.1,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  docteurAiItem: {
    top: 261,
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 284,
    height: 149,
    left: 35,
  },
  malade: {
    top: 313,
    left: 64,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },

  docteurAiInner: {
    top: 318,
    left: 148,
    borderRadius: Border.br_81xl,
    width: 1,
    height: 19,
  },
  etatDeSant: {
    top: 290,
  },
  mdicamentConseill: {
    top: 340,
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
  docteurAi: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DocteurAI;
