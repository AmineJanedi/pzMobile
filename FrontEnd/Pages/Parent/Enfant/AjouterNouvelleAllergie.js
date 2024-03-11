import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable,ScrollView,TextInput,Alert} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import axios from "axios";
const AjouterNouvelleAllergie = () => {
  const navigation = useNavigation();
  const [nomAllergie, setNomAllergie] = useState('');
  const [ingredientAllergenes, setIngredientAllergenes] = useState('');
  const handleAddAllergie = async () => {
    try {
      // Make a POST request to your API endpoint to add a new allergie
      const response = await axios.post('http://192.168.1.4:4000/Allergies/addAllergie', {
        NomAllergie: nomAllergie,
        IngredientAllergeneenes: ingredientAllergenes,
      });
  // Check if the allergie was successfully added
    if (response.status === 201) {
      // Reset the form fields by updating the state variables
      setNomAllergie('');
      setIngredientAllergenes('');
      
      // Show an alert indicating that the allergie was added
      Alert.alert('Success', 'Votre demande d\'ajouter une allergie est en cours de traitement');
    }
    
    } catch (error) {
      console.error('Error adding allergie:', error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.ajouterUnAllergie}>
      <View style={styles.amineWrapper}>
        <Text style={[styles.amine, styles.amineTypo]}>Amine</Text>
      </View>
      <View style={styles.component2498}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.amPosition]}>PAS A l’école</Text>
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
          source={require("../../../assets/union1.png")}
        />
      </View>
     
      
      
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
      <Text style={[styles.ajouterUneAllergie, styles.textTypo1]}>
        Demander d'Ajouter une Allergie
      </Text>
      <View style={[styles.ajouterUnAllergieItem, styles.ajouterShadowBox]} />
      <Text style={[styles.nomDallrgie, styles.allrgenesTypo]}>
        {" "}
        Nom d’allérgie
      </Text>
<TextInput placeholder="Entrer le Nom d'allergie"
              onChangeText={(text) => setNomAllergie(text)}

        style={{top:320,left:40}}>

</TextInput>
      <View style={[styles.ajouterUnAllergieInner, styles.ajouterShadowBox]} />
      <TextInput placeholder="Entrer les ingrédients allérgenes"
              onChangeText={(text) => setIngredientAllergenes(text)}

        style={{top:375,left:40}}>

</TextInput>
      <Text style={[styles.allrgenes, styles.allrgenesTypo]}>Allérgenes</Text>
     
     <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableBorder]}
        onPress={handleAddAllergie}
    >
      <Text style={[styles.ajouterDesProduitsInterdit, styles.budgetTypo]}>
        Ajouter une nouvelle allergie
      </Text>
    </Pressable>
      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle1.png")}
      />
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  amineTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
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
  amPosition: {
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    position: "absolute",
  },
  amTypo: {
    height: 17,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.5,
    textAlign: "left",
  },
  budgetPosition: {
    left: 140,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectanglePressableBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  budgetTypo: {
    fontFamily: FontFamily.playRegular,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ajouterShadowBox: {
    height: 25,
    width: 313,
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
    left: 26,
    position: "absolute",
  },
  allrgenesTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    left: 41,
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
    color: Color.colorBlack,
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.5,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    textAlign: "left",
  },
  am: {
    left: 227,
    width: 40,
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    position: "absolute",
    height: 7,
  },
  ecolePrivAl: {
    top: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 199,
    height: 17,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.5,
    textAlign: "left",
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
  ajouterUnAllergieChild: {
    left: 203,
    width: 75,
    top: 147,
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
  ajouterUneAllergie: {
    top: 227,
    letterSpacing: 1.1,
    left: 40,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  ajouterUnAllergieItem: {
    top: 318,
  },
  nomDallrgie: {
    top: 296,
  },
  poisson: {
    top: 323,
    left: 44,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  ajouterUnAllergieInner: {
    top: 388,
  },
  allrgenes: {
    top: 366,
  },
  thonsardine: {
    top: 393,
    left: 44,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
  },
  rectanglePressable: {
    top: 443,
    left: 29,
    width: 305,
    height: 35,
  },
  ajouterDesProduitsInterdit: {
    width: 224,
    height: 20,
    color: Color.colorWhite,
  },
  ajouterDesProduitsContainer: {
    left: 57,
    top: 449,
    position: "absolute",
  },
  plusCircleIcon: {
    top: 448,
    left: 302,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
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
  ajouterUnAllergie: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterNouvelleAllergie;
