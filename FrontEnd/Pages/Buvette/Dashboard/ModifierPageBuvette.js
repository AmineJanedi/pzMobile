import * as React from "react";
import { StyleSheet, View, Text, Pressable,ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const ModifierPageBuvette = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.modifierCompteBuvette}>
      <View style={styles.modifierCompteBuvetteChild} />
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      
      <View style={styles.component2500}>
        <View style={[styles.component2500Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <Text style={[styles.modifierVotreProfile, styles.text1Typo]}>
        Modifier votre profile
      </Text>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.textFlexBox]}>
          Modifier votre Email
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.textFlexBox]}>
          Modifier votre nom
        </Text>
      </View>
      <View style={[styles.input2, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.textFlexBox]}>
          Modifier votre Mot de passe
        </Text>
      </View>
      <View style={[styles.input3, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.textFlexBox]}>
          Modifier votre numéro de télephone
        </Text>
      </View>
      <View style={[styles.input4, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.textFlexBox]}>
          Modifier votre nom d’école
        </Text>
      </View>
      <Pressable
        style={styles.component2499}
        onPress={() => navigation.navigate("DashboardLemon")}
      >
        <View style={[styles.component2500Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DashboardBuvette")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Pressable
          style={styles.childPosition}
          onPress={() => navigation.navigate("DashboardBuvette")}
        >
          <Text style={[styles.enregistrer, styles.text1Typo]}>
            Enregistrer
          </Text>
        </Pressable>
      </Pressable>
      <View style={styles.modifierCompteBuvetteItem} />
      <Text style={[styles.budget, styles.dtLayout]}>Budget</Text>
      <Text style={[styles.text1, styles.text1Typo]}>6987 2201 4850 2029</Text>
      <Text style={[styles.dt, styles.dtLayout]}>500 DT</Text>
      <Image
        style={styles.modifierCompteBuvetteInner}
        contentFit="cover"
        source={require("../../../assets/Homme.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  inputLayout: {
    height: 51,
    width: 325,
    left: 25,
    position: "absolute",
  },
  inputPosition: {
    left: 23,
    height: 51,
    width: 325,
    position: "absolute",
  },
  dtLayout: {
    height: 21,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  modifierCompteBuvetteChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 15,
    height: 16,
    width: 325,
    left: 25,
    position: "absolute",
  },
  component2500Child: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    left: "0%",
  },
  unionIcon: {
    height: "62.5%",
    width: "66.67%",
    top: "18.75%",
    right: "16.67%",
    bottom: "18.75%",
    left: "16.67%",
  },
  component2500: {
    top: 155,
    left: 335,
    width: 24,
    height: 24,
    position: "absolute",
  },
  modifierVotreProfile: {
    top: 190,
    left: 80,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    left: "0%",
  },
  enterYourFull: {
    top: "31.37%",
    left: "9.23%",
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  input: {
    top: 440,
  },
  input1: {
    top: 370,
  },
  input2: {
    top: 513,
  },
  input3: {
    top: 583,
  },
  input4: {
    top: 653,
  },
  unionIcon1: {
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
  buttonChild: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
    width: "100%",
    left: "0%",
  },
  enregistrer: {
    width: "99.68%",
    lineHeight: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    height: "100%",
  },
  button: {
    top: 726,
    left: 65,
    width: 222,
    height: 62,
    position: "absolute",
  },
  modifierCompteBuvetteItem: {
    top: 254,
    left: 26,
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorDarkcyan_100,
    width: 324,
    height: 81,
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
    textAlign: "left",
    position: "absolute",
  },
  dt: {
    top: 270,
    left: 166,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 90,
    lineHeight: 15,
    height: 21,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  modifierCompteBuvetteInner: {
    top: 70,
    left: 264,
    width: 92,
    height: 91,
    position: "absolute",
  },
  modifierCompteBuvette: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ModifierPageBuvette;
