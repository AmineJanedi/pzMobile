import * as React from "react";
import { Text, StyleSheet, View, Pressable,ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import Slider from "@react-native-community/slider";

const DpenseParJour = () => {
  const navigation = useNavigation();
    const [value, setValue] = React.useState(0); // Initial value
  
    const handleValueChange = (newValue) => {
      setValue(newValue);
      // Optional: Perform additional actions based on the new value
    };
  return (
    <ScrollView>
    <View style={styles.dpenseParJour}>
   

      <View style={styles.amineWrapper}>
        <Text style={styles.amine}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.textTypo]}>PAS A l’école</Text>
      <Text style={styles.am}>9:30 AM</Text>
      <Text style={styles.ecolePrivAl}>Ecole privé al yassmine,La Marsa</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={styles.component2143}>
        <View style={[styles.component2498Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      
      
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.childPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </View>
      {/*Limiter les dépenese cadre */}
      <View style={styles.dpenseParJourItem} />
      <Slider
      style={{ width: 200, height: 40,top:350,right:-80 }} // Customize size
      minimumValue={0}
      maximumValue={100} // Adjust range
      value={value} // Controlled component: set and update value
      onValueChange={handleValueChange}
      step={1} // Optional: define step for discrete values
      thumbTintColor="#3498db" // Customize thumb color (optional)
      minimumTrackTintColor="#007bff" // Customize track color (optional)
    />
          <Text style={{ marginLeft: 10,top:315,right:-275}}>{Math.round(value)}</Text>
      <Text style={[styles.jours, styles.dt1Layout]}>Maximum dépense par Jours</Text>
      <Text style={[styles.dt1, styles.dt1Layout]}>DT</Text>
      <Text style={styles.limiterLesDpenses}>Limiter les dépenses</Text>
     {/*
      <Text style={[styles.semaine, styles.dt2Layout]}>Semaine</Text>
      <Text style={[styles.dt2, styles.dt2Layout]}>35 DT</Text>
     
      <Text style={[styles.mois, styles.dt3Layout]}>Mois</Text>
      <Text style={[styles.dt3, styles.dt3Layout]}>120 DT</Text>
       */}
       {/*boutoon appliquer */}
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableBorder]}
        onPress={{}}
    >
      <Text style={[styles.ajouterDesProduitsInterdit, styles.budgetTypo]}>
        Appliquer les limites de dépenses
      </Text>
    </Pressable>
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    top: "0%",
  },
  rectanglePressableBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  rectanglePressable: {
    top: 420,
    left: 60,
    width: 250,
    height: 50,
    borderRadius:15
  },
  ajouterDesProduitsInterdit: {
    width: "100%",
    height: "100%",
    left:15,
    top:15,
    color: Color.colorWhite,
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
  childBg: {
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  dt1Layout: {
    height: 16,
    position: "absolute",
  },
  dpenseLayout: {
    height: 13,
    width: 188,
    left: 103,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  dpenseChildLayout: {
    height: 27,
    width: 27,
    position: "absolute",
  },
  dt2Layout: {
    top: 423,
    height: 16,
    width: 93,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  dt3Layout: {
    top: 493,
    height: 16,
    width: 93,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
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
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
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
    width: "100%",
    position: "absolute",
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
    height: "100%",
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
    height: "100%",
    color: Color.colorBlack,
    letterSpacing: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
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
  dpenseParJourChild: {
    left: 203,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 75,
    top: 147,
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
    fontFamily: FontFamily.portLligatSans,
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
    fontFamily: FontFamily.play,
    width: 161,
    height: 17,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    top: 147,
    left: 140,
    color: Color.colorBlack,
    textAlign: "left",
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
  dpenseParJourItem: {
    top: 268,
    left: 26,
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
    height: "30%",
    position: "absolute",
  },
  buttonChild: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  continuer: {
    width: "99.68%",
    lineHeight: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 1.1,
    color: Color.colorWhite,
    fontWeight: "600",
    height: "100%",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  signIn: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  button: {
    top: 567,
    left: 86,
    width: 222,
    height: 62,
    position: "absolute",
  },
  jours: {
    width: "100%",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 328,
    height: "100%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    right: 30,
  },
  dt1: {
    left: 271,
    width: 93,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xl,
    top: 357,
    height: 16,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  limiterLesDpenses: {
    top: 286,
    left: 53,
    letterSpacing: 1.1,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dpenseParJourInner: {
    top: 354,
  },
  ellipseIcon: {
    top: 345,
    left: 152,
  },
  semaine: {
    left: 21,
  },
  dt2: {
    left: 271,
  },
  rectangleView: {
    top: 424,
  },
  dpenseParJourChild1: {
    top: 415,
    left: 192,
  },
  mois: {
    left: 21,
  },
  dt3: {
    left: 271,
  },
  dpenseParJourChild2: {
    top: 494,
  },
  dpenseParJourChild3: {
    top: 485,
    left: 242,
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
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 15,
    left: 25,
    width: 325,
  },
  dpenseParJour: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DpenseParJour;
