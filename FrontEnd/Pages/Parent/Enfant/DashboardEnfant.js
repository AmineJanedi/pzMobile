import * as React from "react";
import { Text, StyleSheet, View, Pressable,ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const DashboardEnfant = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.dashboardLemon}>
      <View style={styles.amineWrapper}>
        <Text style={styles.amine}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.textTypo]}>PAS A l’école</Text>
      <Text style={styles.am}>9:30 AM</Text>
      <Text style={styles.ecolePrivAl}>Ecole privé al yassmine,La Marsa</Text>
      <View style={[styles.dashboardLemonChild, styles.dashboardBorder]} />
      <Text style={[styles.dpenses, styles.dpensesTypo]}>Dépenses</Text>
      <View style={[styles.dashboardLemonItem, styles.dashboardBorder]} />
      <View style={[styles.dashboardLemonInner, styles.dashboardBorder]} />
      <Pressable
        style={[styles.button, styles.buttonLayout1]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn, styles.signPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.rythmeCardiaque}>Rythme Cardiaque</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout1]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn1, styles.signPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.rythmeCardiaque}>Température</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.button2, styles.buttonLayout1]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn2, styles.signPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.rythmeCardiaque}>Oxygéne</Text>
        </Pressable>
      </Pressable>
      <Image
        style={[styles.component210Icon, styles.componentIconLayout]}
        contentFit="cover"
        source={require("../../../assets/component-210.png")}
      />
      <Image
        style={[styles.component277Icon, styles.componentIconLayout]}
        contentFit="cover"
        source={require("../../../assets/component-277.png")}
      />
      <Text style={styles.sant}>Santé</Text>
      <View style={[styles.component1517, styles.componentIconLayout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconPosition]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View style={styles.allrgieDeFraiseWrapper}>
        <Text style={styles.allrgieDeFraise}>{`Allérgie de fraise `}</Text>
      </View>
      <Text style={[styles.allrgies, styles.dpensesTypo]}>Allérgies</Text>
      <Text style={[styles.aujourdhui, styles.ceMoisTypo]}>Aujourd’hui</Text>
      <Text style={[styles.cetteSemaine, styles.ceMoisTypo]}>
        Cette Semaine
      </Text>
      <View style={[styles.dtWrapper, styles.dtFramePosition]}>
        <Text style={styles.allrgieDeFraise}>5 DT</Text>
      </View>
      <Pressable
        style={[styles.button3, styles.buttonLayout]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn3, styles.textPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.dtail}>Détail</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.button4, styles.buttonLayout]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn3, styles.textPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.dtail}>Détail</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.dtContainer, styles.dtFramePosition]}>
        <Text style={styles.allrgieDeFraise}>38 DT</Text>
      </View>
      <View style={[styles.produitsInterditsWrapper, styles.wrapperLayout]}>
        <Text style={[styles.produitsInterdits, styles.containerTypo]}>
          20 Produits Interdits
        </Text>
      </View>
      <View
        style={[styles.notifi50FoisParMinute08Wrapper, styles.notifi50Layout]}
      >
        <Text style={[styles.notifi50FoisContainer, styles.notifi50Layout]}>
          <Text style={styles.notifi50FoisContainer1}>
            <Text
              style={styles.notifi50Fois}
            >{`Notifié <50 fois par minute-`}</Text>
            <Text style={styles.am1}>08:00AM</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.stableWrapper, styles.wrapperLayout]}>
        <Text
          style={[styles.produitsInterdits, styles.containerTypo]}
        >{`Stable `}</Text>
      </View>
      <View
        style={[styles.notifi370802amWrapper, styles.notifi37ContainerLayout]}
      >
        <Text
          style={[styles.notifi37Container, styles.notifi37ContainerLayout]}
        >
          <Text style={styles.notifi50FoisContainer1}>
            <Text style={styles.notifi50Fois}>{`Notifié <37° - `}</Text>
            <Text style={styles.am1}>08:02AM</Text>
          </Text>
        </Text>
      </View>
      <Text style={[styles.ceMois, styles.ceMoisTypo]}>Ce Mois</Text>
      <Pressable
        style={[styles.button5, styles.buttonLayout]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.buttonChild} />
        <Pressable
          style={[styles.signIn3, styles.textPosition]}
          onPress={() => navigation.navigate("DashboardParent")}
        >
          <Text style={styles.dtail}>Détail</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.dtFrame, styles.dtFramePosition]}>
        <Text style={styles.allrgieDeFraise}>168 DT</Text>
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("DpenseParJour")}
      />
      <Pressable
        style={[styles.dashboardLemonChild1, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AjouterAllrgie")}
      />
      <Image
        style={[styles.plusCircleIcon, styles.component755Layout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />
      <Text style={[styles.ajouterUneAllrgie, styles.dfinirUnLimiteLayout]}>
        Ajouter une allérgie
      </Text>
      <Text style={[styles.dfinirUnLimite, styles.dfinirUnLimiteLayout]}>
        Définir un Limite de dépense
      </Text>
      <View style={[styles.component755, styles.component755Layout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <Image
        style={[styles.component297Icon, styles.componentIconLayout]}
        contentFit="cover"
        source={require("../../../assets/component-297.png")}
      />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={styles.component2143}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View style={[styles.dashboardLemonChild2, styles.budgetPosition]} />
      <View style={[styles.component2499, styles.componentIconLayout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon4, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <Text style={styles.dt3}>41,5 DT</Text>
      <Text style={[styles.budget, styles.budgetPosition]}>Budget</Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      <Pressable
        style={styles.component24991}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon5, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </Pressable>
      <View style={styles.dashboardLemonChild3} />
      <Image
        style={[styles.component2499Icon, styles.component2500Layout]}
        contentFit="cover"
        source={require("../../../assets/component-2499.png")}
      />
      <View style={[styles.component2500, styles.component2500Layout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon6, styles.unionIconPosition]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
     
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
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
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  dashboardBorder: {
    width: 316,
    borderWidth: 0.5,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    left: 29,
    position: "absolute",
  },
  dpensesTypo: {
    letterSpacing: 1.1,
    left: 42,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  buttonLayout1: {
    height: 25,
    width: 123,
    left: 45,
    position: "absolute",
  },
  signPosition: {
    top: "28%",
    position: "absolute",
  },
  componentIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  unionIconPosition: {
    top: "12.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ceMoisTypo: {
    color: Color.colorMediumturquoise_200,
    left: 47,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  dtFramePosition: {
    left: 210,
    height: 14,
    position: "absolute",
  },
  buttonLayout: {
    width: 50,
    left: 264,
    height: 25,
    position: "absolute",
  },
  wrapperLayout: {
    width: 115,
    position: "absolute",
  },
  containerTypo: {
    lineHeight: 12,
    letterSpacing: 0.6,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  notifi50Layout: {
    height: 17,
    width: 144,
    position: "absolute",
  },
  notifi37ContainerLayout: {
    width: 136,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 35,
    width: 305,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    left: 35,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    position: "absolute",
  },
  component755Layout: {
    height: 22,
    width: 22,
    left: 308,
    position: "absolute",
  },
  dfinirUnLimiteLayout: {
    height: 30,
    width: 224,
    left: 69,
    fontFamily: FontFamily.play,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  budgetPosition: {
    top: 147,
    position: "absolute",
  },
  component2500Layout: {
    width: 24,
    height: 24,
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
    letterSpacing: 2.2,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
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
    fontWeight: "600",
  },
  am: {
    left: 227,
    width: 40,
    height: 7,
    color: Color.colorBlack,
    lineHeight: 9,
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xs,
    top: 112,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  ecolePrivAl: {
    top: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 199,
    left: 140,
    height: 7,
    color: Color.colorBlack,
    letterSpacing: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  dashboardLemonChild: {
    top: 188,
    height: 192,
  },
  dpenses: {
    top: 202,
  },
  dashboardLemonItem: {
    top: 448,
    height: 100,
  },
  dashboardLemonInner: {
    top: 628,
    height: 163,
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rythmeCardiaque: {
    lineHeight: 11,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppins,
  },
  signIn: {
    left: "15.45%",
  },
  button: {
    top: 668,
  },
  signIn1: {
    left: "26.02%",
  },
  button1: {
    top: 708,
  },
  signIn2: {
    left: "34.15%",
  },
  button2: {
    top: 748,
  },
  component210Icon: {
    left: 46,
    top: 748,
  },
  component277Icon: {
    top: 671,
    left: 45,
    width: 20,
  },
  sant: {
    left: 40,
    top: 637,
    letterSpacing: 1.1,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  unionIcon1: {
    height: "74%",
    width: "74%",
    right: "13%",
    bottom: "13.5%",
    left: "13%",
  },
  component1517: {
    top: 493,
    left: 310,
  },
  allrgieDeFraise: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    left: 0,
    top: 0,
    position: "absolute",
  },
  allrgieDeFraiseWrapper: {
    width: 113,
    height: 14,
    top: 496,
    left: 42,
    position: "absolute",
  },
  allrgies: {
    top: 462,
  },
  aujourdhui: {
    top: 241,
  },
  cetteSemaine: {
    top: 289,
  },
  dtWrapper: {
    width: 28,
    top: 241,
  },
  dtail: {
    width: "99.6%",
    lineHeight: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    height: "100%",
    fontFamily: FontFamily.poppins,
  },
  signIn3: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  button3: {
    top: 236,
  },
  button4: {
    top: 279,
  },
  dtContainer: {
    top: 284,
    width: 36,
  },
  produitsInterdits: {
    width: 115,
    position: "absolute",
    fontFamily: FontFamily.poppins,
  },
  produitsInterditsWrapper: {
    height: 12,
    left: 187,
    width: 115,
    top: 496,
  },
  notifi50Fois: {
    fontFamily: FontFamily.poppins,
  },
  am1: {
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
  },
  notifi50FoisContainer1: {
    width: "100%",
  },
  notifi50FoisContainer: {
    lineHeight: 12,
    letterSpacing: 0.6,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  notifi50FoisParMinute08Wrapper: {
    top: 674,
    left: 188,
  },
  stableWrapper: {
    top: 756,
    height: 12,
    left: 187,
    width: 115,
  },
  notifi37Container: {
    lineHeight: 12,
    letterSpacing: 0.6,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  notifi370802amWrapper: {
    top: 713,
    left: 188,
    height: 12,
  },
  ceMois: {
    top: 335,
  },
  button5: {
    top: 327,
  },
  dtFrame: {
    top: 332,
    width: 41,
  },
  rectanglePressable: {
    top: 392,
  },
  dashboardLemonChild1: {
    top: 568,
  },
  plusCircleIcon: {
    top: 573,
    overflow: "hidden",
  },
  ajouterUneAllrgie: {
    top: 575,
  },
  dfinirUnLimite: {
    top: 401,
  },
  unionIcon2: {
    height: "58.18%",
    width: "58.18%",
    top: "20.91%",
    right: "20.91%",
    bottom: "20.91%",
    left: "20.91%",
  },
  component755: {
    top: 400,
  },
  component297Icon: {
    top: 711,
    left: 48,
  },
  image3Icon: {
    top: 68,
    borderRadius: Border.br_21xl_5,
    width: 81,
    height: 84,
    left: 35,
    position: "absolute",
  },
  unionIcon3: {
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
  dashboardLemonChild2: {
    left: 203,
    width: 75,
    top: 147,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    height: 21,
  },
  unionIcon4: {
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
  },
  dt3: {
    top: 149,
    left: 206,
    fontFamily: FontFamily.portLligatSans,
    width: 92,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    height: 18,
    textAlign: "left",
    position: "absolute",
  },
  budget: {
    width: 161,
    fontFamily: FontFamily.play,
    top: 147,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    height: 17,
    left: 140,
    color: Color.colorBlack,
    textAlign: "left",
  },
  shapeIcon: {
    top: -64,
    left: -83,
    width: 182,
    height: 182,
    position: "absolute",
  },
  unionIcon5: {
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
  dashboardLemonChild3: {
    left: 301,
    width: 35,
    height: 24,
    top: 637,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  component2499Icon: {
    top: 635,
    left: 307,
  },
  unionIcon6: {
    height: "74.17%",
    width: "74.17%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
  },
  component2500: {
    top: 77,
    left: 339,
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
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
    height: 16,
    position: "absolute",
  },
  dashboardLemon: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DashboardEnfant;
