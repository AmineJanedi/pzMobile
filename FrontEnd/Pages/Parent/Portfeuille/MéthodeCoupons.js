import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";

const MéthodeCoupons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mthodeCoupons}>
      <View style={styles.mthodeCouponsChild} />
      <Text style={[styles.alimenterVotreCarte, styles.textTypo]}>
        Alimenter votre carte
      </Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
     
      <Image
        style={styles.mthodeCouponsItem}
        contentFit="cover"
        source={require("../../../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.component2499}
        onPress={() => navigation.navigate("ModifierCompteParent")}
      >
        <View style={[styles.component2499Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
        />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Pressable
          style={styles.childPosition}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.continuer}>Continuer</Text>
        </Pressable>
      </Pressable>
      <View style={styles.mthodeCouponsInner} />
      <Text style={[styles.budget, styles.dtLayout]}>Budget</Text>
      <Text style={[styles.text1, styles.textTypo]}>2154 2201 4850 ****</Text>
      <Text style={[styles.dt, styles.dtLayout]}>500 DT</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={styles.mthodeCouponsChild1} />
      <View style={[styles.input, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.enterYourFull, styles.codeDeCouponTypo]}>
          A895B11ZER56FSFDFDS694
        </Text>
      </View>
      <View style={[styles.mthodeCouponsChild2, styles.rectangleViewBg]} />
      <Text style={[styles.codeDeCoupon, styles.codeDeCouponTypo]}>
        Code de coupon
      </Text>
      <Text style={[styles.coupons, styles.inputPosition]}>Coupons</Text>
      <Image
        style={styles.component431Icon}
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
  dtLayout1: {
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  dtLayout: {
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  inputPosition: {
    left: 50,
    position: "absolute",
  },
  codeDeCouponTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  mthodeCouponsChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  alimenterVotreCarte: {
    top: 190,
    left: 80,
    color: Color.colorWhite,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  mthodeCouponsItem: {
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
  buttonChild: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
    width: "100%",
    left: "0%",
  },
  continuer: {
    width: "99.68%",
    lineHeight: 25,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
  },
  button: {
    top: 587,
    left: 75,
    width: 222,
    height: 62,
    position: "absolute",
  },
  mthodeCouponsInner: {
    top: 254,
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorDarkcyan_100,
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
    left: 26,
  },
  mthodeCouponsChild1: {
    height: "2.96%",
    width: "6.4%",
    top: "51.97%",
    right: "80%",
    bottom: "45.07%",
    left: "13.6%",
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    right: "0%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.colorMediumturquoise_200,
    width: "100%",
    left: "0%",
  },
  enterYourFull: {
    top: "31.37%",
    left: "9.22%",
    color: Color.colorWhite,
  },
  input: {
    top: 466,
    width: 281,
    height: 51,
  },
  mthodeCouponsChild2: {
    top: 484,
    left: 258,
    borderRadius: Border.br_81xl,
    width: 1,
    height: 19,
  },
  codeDeCoupon: {
    top: "52.46%",
    left: "21.33%",
    color: Color.colorMediumturquoise_200,
  },
  coupons: {
    top: 381,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
  },
  component431Icon: {
    top: 424,
    left: 46,
    width: 24,
    height: 24,
    position: "absolute",
  },
  mthodeCoupons: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MéthodeCoupons;
