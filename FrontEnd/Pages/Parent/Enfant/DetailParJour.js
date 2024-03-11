import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../../../GlobalStyles";

const DetailParJour = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dtailParJour}>
      <View style={[styles.amineWrapper, styles.amineWrapperLayout]}>
        <Text style={styles.amine}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.textTypo]}>PAS A l’école</Text>
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
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <View style={[styles.dtailParJourChild, styles.amineWrapperLayout]} />
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
        source={require("../../../assets/shape2.png")}
      />
      <Pressable
        style={styles.component24991}
        onPress={() => navigation.navigate("DashboardLemon")}
      >
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </Pressable>
     
      <View style={styles.dtailParJourItem} />
      <Text style={[styles.produit, styles.am1Layout]}>Produit</Text>
      <Text style={[styles.temps, styles.am1Layout]}>Temps</Text>
      <Text style={[styles.totale, styles.am1Layout]}>Totale</Text>
      <Text style={[styles.am1, styles.am1Layout]}>10:00AM</Text>
      <Text style={[styles.am2, styles.am2Layout]}>12:00AM</Text>
      <Text style={[styles.biscuitChocotom, styles.dt1Layout]}>
        Biscuit Chocotom
      </Text>
      <Text style={[styles.sandwitchSalami, styles.dt1Layout]}>
        Sandwitch salami
      </Text>
      <Text style={[styles.dt1, styles.dt1Layout]}>5 DT</Text>
      <Text style={[styles.prix, styles.am1Layout]}>Prix</Text>
      <Text style={[styles.dt2, styles.am1Layout]}>2 DT</Text>
      <Text style={[styles.dt3, styles.am2Layout]}>3 DT</Text>
      <Text style={styles.aujourdhui}>Aujourd’hui</Text>
      <Text style={[styles.dpenses, styles.textTypo]}>Dépenses</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  amineWrapperLayout: {
    height: 21,
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
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
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
  am1Layout: {
    width: 93,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    height: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  am2Layout: {
    top: 433,
    width: 93,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    height: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  dt1Layout: {
    width: 132,
    left: 125,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    height: 19,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    position: "absolute",
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
  dtailParJourChild: {
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
    width: 20,
    height: 20,
    left: 257,
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
    left: "0%",
    top: "0%",
    fontWeight: "600",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  dtailParJourItem: {
    top: 273,
    left: 37,
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
    height: 256,
    position: "absolute",
  },
  produit: {
    left: 107,
    top: 353,
    width: 93,
  },
  temps: {
    left: 27,
    top: 353,
    width: 93,
  },
  totale: {
    top: 473,
    left: 27,
  },
  am1: {
    top: 393,
    left: 27,
  },
  am2: {
    left: 27,
  },
  biscuitChocotom: {
    top: 393,
  },
  sandwitchSalami: {
    top: 434,
  },
  dt1: {
    top: 474,
  },
  prix: {
    top: 353,
    width: 93,
    left: 257,
  },
  dt2: {
    top: 393,
    left: 257,
  },
  dt3: {
    left: 257,
  },
  aujourdhui: {
    top: 308,
    left: 268,
    color: Color.colorMediumturquoise_200,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  dpenses: {
    top: 307,
    left: 57,
    letterSpacing: 1.1,
    fontWeight: "600",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
  },
  dtailParJour: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DetailParJour;
