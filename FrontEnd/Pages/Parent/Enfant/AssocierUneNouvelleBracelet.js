import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../../../GlobalStyles";

const AssocierUneNouvelleBracelet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.associerUneNouvelleBracelet}>
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.braceletFlexBox]}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.braceletTypo]}>PAS A l’école</Text>
      <Text style={[styles.am, styles.amTypo]}>9:30 AM</Text>
      <Text style={[styles.ecolePrivAl, styles.budgetPosition1]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={[styles.component2143, styles.component2143Layout]}>
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <View
        style={[styles.associerUneNouvelleBraceletChild, styles.budgetPosition]}
      />
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
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.text1Position]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </View>
      <Text style={[styles.couplerUneBracelet, styles.braceletTypo]}>
        Coupler une bracelet
      </Text>
      <View
        style={[
          styles.associerUneNouvelleBraceletItem,
          styles.associerShadowBox,
        ]}
      />
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
        style={styles.associer}
        onPress={() => navigation.navigate("DocteurAI")}
      >
        <Text style={[styles.associer1, styles.budgetTypo]}>Associer</Text>
      </Pressable>
      <View
        style={[
          styles.associerUneNouvelleBraceletInner,
          styles.associerShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.component2143Layout]} />
      <Text style={[styles.text, styles.textTypo]}>14012024</Text>
      <Text style={[styles.idBracelet, styles.braceletTypo]}>ID Bracelet</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  braceletFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
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
  braceletTypo: {
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
  budgetPosition1: {
    left: 140,
    color: Color.colorBlack,
  },
  component2143Layout: {
    height: 19,
    position: "absolute",
  },
  budgetPosition: {
    top: 147,
    position: "absolute",
  },
  budgetTypo: {
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  associerShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "35.11%",
    right: "62.5%",
    width: "2.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    textAlign: "left",
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
    top: 107,
    height: 19,
  },
  associerUneNouvelleBraceletChild: {
    left: 203,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 75,
    backgroundColor: Color.colorMediumturquoise_200,
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
    position: "absolute",
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
  couplerUneBracelet: {
    top: 217,
    left: 43,
    letterSpacing: 1.1,
    textAlign: "left",
    position: "absolute",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
  },
  associerUneNouvelleBraceletItem: {
    top: 261,
    width: 284,
    height: 166,
    backgroundColor: Color.colorWhite,
    left: 35,
  },
  vectorIcon: {
    height: "0.49%",
    top: "46.8%",
    bottom: "52.71%",
  },
  vectorIcon1: {
    height: "0.62%",
    top: "46.18%",
    bottom: "53.2%",
  },
  associer1: {
    color: Color.colorMediumturquoise_200,
    width: 121,
    height: 25,
  },
  associer: {
    left: 64,
    top: 370,
    position: "absolute",
  },
  associerUneNouvelleBraceletInner: {
    top: 312,
    left: 61,
    width: 240,
    height: 32,
    backgroundColor: Color.colorMediumturquoise_200,
  },
  rectangleView: {
    top: 318,
    left: 148,
    borderRadius: Border.br_81xl,
    width: 1,
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 320,
    left: 85,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  idBracelet: {
    top: 290,
    left: 62,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.7,
    lineHeight: 14,
    color: Color.colorBlack,
    textAlign: "left",
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
  associerUneNouvelleBracelet: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AssocierUneNouvelleBracelet;
