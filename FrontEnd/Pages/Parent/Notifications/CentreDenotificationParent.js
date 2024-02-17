import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const CentreDeNotificationParent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.centreDeNotifications}>
      <View style={styles.centreDeNotificationsChild} />
      <Pressable
        style={[styles.component2499, styles.componentLayout]}
        onPress={() => navigation.navigate("ModifierCompteParent")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union6.png")}
        />
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      
      <Image
        style={styles.centreDeNotificationsItem}
        contentFit="cover"
        source={require("../../../assets/icon.png")}
      />
      <Text style={[styles.bonjourLinda, styles.bonjourLindaTypo]}>
        Bonjour , Linda said
      </Text>
      <Pressable
        style={[styles.component832, styles.componentLayout]}
        onPress={() => navigation.navigate("Stpage")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/icon.png")}
        />
      </Pressable>
      <View style={[styles.component124, styles.componentLayout]}>
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/icon.png")}
        />
      </View>
      <Pressable
        style={styles.component2500}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <View style={styles.component2499Child} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/icon.png")}
        />
      </Pressable>
      <Text style={[styles.notifications, styles.bonjourLindaTypo]}>
        Notifications
      </Text>
      <View
        style={[
          styles.centreDeNotificationsInner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Text style={[styles.commande, styles.dateTypo]}>Commande :</Text>
      <Text style={[styles.votreBraceletEst, styles.text1Typo]}>
        Votre bracelet est arrivé !
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>27/01/2024</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.ajoutDallergie, styles.date1Typo]}>
        Ajout d’allergie :
      </Text>
      <Text
        style={[styles.votreAllergieA, styles.text2Typo]}
      >{`Votre allergie a été 
approuvé`}</Text>
      <Text style={[styles.text2, styles.text2Typo]}>26/01/2024</Text>
      <Text style={[styles.date1, styles.date1Typo]}>Date</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    width: 339,
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
    left: 22,
    position: "absolute",
  },
  dateTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 345,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    top: 365,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  date1Typo: {
    top: 455,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2Typo: {
    top: 475,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  centreDeNotificationsChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMediumturquoise_200,
    width: 375,
    height: 233,
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  centreDeNotificationsItem: {
    top: 70,
    left: 264,
    width: 92,
    height: 91,
    position: "absolute",
  },
  bonjourLinda: {
    left: 80,
    color: Color.colorWhite,
    top: 190,
  },
  unionIcon1: {
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
  },
  unionIcon2: {
    height: "66.67%",
    width: "58.33%",
    top: "16.67%",
    right: "20.83%",
    bottom: "16.67%",
    left: "20.83%",
  },
  component124: {
    left: 320,
    top: 190,
  },
  unionIcon3: {
    height: "66.55%",
    width: "66.55%",
    top: "16.55%",
    right: "16.9%",
    bottom: "16.9%",
    left: "16.55%",
  },
  component2500: {
    top: 37,
    left: 13,
    width: 29,
    height: 29,
    position: "absolute",
  },
  notifications: {
    top: 289,
    left: 40,
    color: Color.colorGray_300,
  },
  centreDeNotificationsInner: {
    top: 330,
    height: 67,
  },
  commande: {
    left: 41,
  },
  votreBraceletEst: {
    left: 41,
  },
  text1: {
    left: 252,
  },
  date: {
    left: 251,
  },
  rectangleView: {
    top: 440,
    height: 77,
  },
  ajoutDallergie: {
    left: 41,
  },
  votreAllergieA: {
    left: 41,
  },
  text2: {
    left: 252,
  },
  date1: {
    left: 251,
  },
  centreDeNotifications: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CentreDeNotificationParent;
