import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable,TextInput,ScrollView} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import { Camera } from 'expo-camera';


const AjouterEnfant = () => {
  const navigation = useNavigation();
  const [Nom, setNom] = useState('');
  const [NomEcole, setNomEcole] = useState('');
  const [cordonnéesGPS, setCordonnéesGPS] = useState('');
  const [IDBracelet, setIDBracelet] = useState('');
  const [isCameraVisible, setIsCameraVisible] = useState(false);



  return (
    <ScrollView>
    <View style={styles.ajouterEnfant}>
      
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DashboardParent")}
      >       
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape2.png")}
      />
      <Pressable
        style={styles.component2499}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <View style={[styles.component2499Child, styles.buttonChildPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union3.png")}
        />
      </Pressable>
     {/*Bouton ajouter */}
      <Pressable
        style={[styles.button1, styles.button1Layout]}
        onPress={() => navigation.navigate("DashboardParent")}
      >
        <View style={[styles.buttonItem, styles.buttonChildBg]} />
        <Text style={[styles.register, styles.registerTypo]}>Ajouter</Text>
      </Pressable>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.buttonChildPosition]} />
        <TextInput 
        placeholder="Entrer Nom de l'école"
        onChangeText={(text) => setNomEcole(text)}
        value={NomEcole}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.buttonChildPosition]} />
        <TextInput 
        placeholder="Entrer votre Nom"
        onChangeText={(text) => setNom(text)}
        value={setNom}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.buttonChildPosition]} />
        <TextInput 
        placeholder="Entrer Les cordonnées GPS de l'école"
        onChangeText={(text) => setCordonnéesGPS(text)}
        value={cordonnéesGPS}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />
      </View>
      <View style={[styles.input3, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.buttonChildPosition]} />
        <TextInput 
        placeholder="Entrer ID bracelet"
        onChangeText={(text) => setIDBracelet(text)}
        value={IDBracelet}
        style={[styles.entrerVotreEmail, styles.textTypo]}
      />
      </View>
     
     
      <Text style={[styles.associer, styles.associerTypo]}>Associer</Text>
      <Text style={[styles.ajouterEnfant1, styles.registerTypo]}>
        Ajouter enfant
      </Text>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={[styles.component1007, styles.componentLayout]}>
        <View style={[styles.component2499Child, styles.buttonChildPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/imageP.png")}
        />
      </View>
      {/*Scanner le bracelet */}
      <Pressable
  style={[styles.ajouterEnfantChild, styles.buttonChildBg]}
  onPress={() => setIsCameraVisible(true)}
/>
{isCameraVisible && (
  <Camera style={styles.camera} type={Camera.Constants.Type.back}>
    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }} />
  </Camera>
)}

<Text style={[styles.scannerLeBraclet, styles.associerTypo]}>
  Scanner le bracelet
</Text>

      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonChildPosition: {
    left: "0%",
    top: "0%",
  },
   camera: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonChildBg: {
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  registerFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  componentLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  button1Layout: {
    width: 325,
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
  textTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  registerTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  inputLayout: {
    height: 51,
    width: 325,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "85.33%",
    right: "12.27%",
    width: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  associerTypo: {
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  component2498Child: {
    display: "none",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  unionIcon: {
    height: "66.11%",
    top: "16.11%",
    bottom: "17.78%",
    left: "16.67%",
    right: "16.67%",
    width: "66.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
  },
  component2498: {
    top: 107,
    left: 122,
    width: 18,
    height: 18,
    position: "absolute",
  },
  buttonChild: {
    display: "none",
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  rythmeCardiaque: {
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.5,
    lineHeight: 11,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    display: "none",
  },
  signIn: {
    left: "15.45%",
    top: "28%",
    position: "absolute",
  },
  button: {
    top: 536,
    left: 36,
    width: 123,
    height: 25,
    position: "absolute",
  },
  shapeIcon: {
    top: -64,
    left: -83,
    width: 200,
    height: 182,
    position: "absolute",
  },
  component2499Child: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
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
  unionIcon2: {
    height: "74.17%",
    width: "74.17%",
    top: "12.5%",
    right: "12.92%",
    bottom: "13.33%",
    left: "12.92%",
    display: "none",
  },
  component2500: {
    left: 339,
    top: 77,
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
    lineHeight: 15,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
  },
 
  buttonItem: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  register: {
    width: "99.69%",
    lineHeight: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    left: "0%",
    top: "0%",
    height: "100%",
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
  },
  button1: {
    top: 577,
    left: 24,
    height: 62,
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  entrerVotreEmail: {
    top: "31.37%",
    left: "9.23%",
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  input: {
    top: 280,
    left: 28,
    height: 51,
  },
  input1: {
    top: 213,
    left: 28,
    height: 51,
  },
  input2: {
    top: 352,
    left: 28,
    height: 51,
  },
  input3: {
    top: 498,
    left: 25,
  },
  vectorIcon: {
    height: "0.49%",
    top: "64.66%",
    bottom: "34.85%",
  },
  vectorIcon1: {
    height: "0.62%",
    top: "64.04%",
    bottom: "35.34%",
  },
  associer: {
    top: 515,
    left: 252,
    color: Color.colorMediumturquoise_200,
    width: 121,
    height: 25,
  },
  ajouterEnfant1: {
    top: 159,
    left: 53,
    lineHeight: 21,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  image4Icon: {
    left: 249,
    borderRadius: Border.br_21xl_5,
    width: 81,
    height: 84,
    top: 77,
    position: "absolute",
  },
  unionIcon3: {
    height: "62.5%",
    top: "18.75%",
    bottom: "18.75%",
    left: "16.67%",
    right: "16.67%",
    width: "66.67%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  component1007: {
    top: 146,
    left: 315,
  },
  ajouterEnfantChild: {
    top: 436,
    left: 37,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 305,
    height: 35,
  },
  scannerLeBraclet: {
    top: 443,
    left: 54,
    width: 224,
    height: 50,
    color: Color.colorWhite,
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
  },
  plusCircleIcon: {
    top: 442,
    left: 299,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  ajouterEnfant: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterEnfant;
