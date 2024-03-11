import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import axios from 'axios';

const AutreAllergie = () => {
  const [chercher, setChercher] = useState('');
  const navigation = useNavigation();
  const [allergies, setallergies] = useState([]);

  useEffect(() => {
    const fetchallergies = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:4000/Allergies/GetAllAllergies');
        setallergies(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des allergies :', error);
      }
    };

    fetchallergies();
  }, []);

  const handleChercherallergie = async (text) => {
    try {
      const response = await axios.get(`http://192.168.1.4:4000/Allergies/chercherAllergie/${text}`);
      console.log(response.data);
      if (response.data && Array.isArray(response.data)) {
        // Mise à jour de l'état allergies avec les nouveaux allergies trouvés
        setallergies(response.data.map(allergie => ({ ID: allergie.ID, nom: allergie.Nomallergie })));
      } else {
        console.error("La réponse de l'API n'est pas correctement formatée.");
      }
    } catch (error) {
      console.error('Erreur lors de la recherche des allergies :', error);
    }
  };

  const handleClick = async (ID) => {
    try {
      const response = await axios.delete(`http://192.168.1.4:4000/allergieInterdit/DeleteallergieInterdit/${ID}`);
      if (response.status === 200) {
        // Mettre à jour la liste des allergies après la suppression
        const updatedallergies = allergies.filter(allergie => allergie.ID !== ID);
        setallergies(updatedallergies);
      } else {
        console.error('Erreur lors de la suppression du allergie :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du allergie :', error);
    }
  };
  
  return (
    <ScrollView>
    <View style={styles.grerallergieInterdit}>
       {/*Partie de données de l'enfant */}
      {/*Modifier enfant */}
      <View style={[styles.component2500, styles.component2500Layout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon6, styles.unionIconPosition]}
          contentFit="cover"
          source={require("../../../assets/union4.png")}
          onPress={() => navigation.navigate("ModifierEnfant")}
        />
      </View>
      {/*Image et données */}
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
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
      <View style={[styles.dashboardLemonItem, styles.dashboardBorder]} />
      {/*Budget  */}
      <View style={[styles.dashboardLemonChild2, styles.budgetPosition]} />
      <Text style={styles.dt3}>41,5 DT</Text>
      <Text style={[styles.budget, styles.budgetPosition]}>Budget</Text>
      <View style={[styles.component2499, styles.componentIconLayout]}>
        <Image
          style={[styles.unionIcon4, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union7.png")}
        />
      </View>
  {/*Section Liste des allergies */}
  <Text style={[styles.listeDesallergies, styles.bonjourNourredinTypo]}>
        Liste des allergies
      </Text>
      {/*Section Chercher un allergie */}
      <View style={[styles.chercherWrapper, styles.chercherParentLayout]}>
        <View style={{ left: 219,
    width: 150,
    top: 245,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    height: 30,
    backgroundColor:Color.colorMediumturquoise_200,
    borderRadius:19,
   }}/>
      <TextInput 
        placeholder="Chercher un allergie"
        onChangeText={(text) => {
          setChercher(text);
          handleChercherallergie(text); // Appel de la fonction de recherche à chaque fois que le texte change
        }}
        value={chercher}
        style={{top:220,left:229,color:'white'}}
      />
      </View>
      <View style={[styles.listeallergieInner, styles.listeChildShadowBox]}>
      <ScrollView>
        {/* Affichage des allergies récupérés */}
        {chercher === '' ? (
          allergies && Array.isArray(allergies) && allergies.map((allergie, index) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              <Text style={{ right: -19, top: 5, marginRight: 20, marginBottom: 21 }}>{`ID : ${allergie.ID}`}</Text>
              <Text style={{ right: -19, top: 5, marginRight: 40, marginBottom: 21 }}>{`Nom : ${allergie.NomAllergie}`}</Text>
              <TouchableOpacity onPress={() => handleClick(allergie.ID)}>
                <Image
                  source={require('../../../assets/add.png')}
                  style={{ width: 22, height: 22, top: 4 }}
                />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          /* Résultat de recherche */
          allergies.filter(allergie => allergie.NomAllergie && allergie.NomAllergie.toLowerCase().includes(chercher.toLowerCase())).map((resultat, index) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              <Text style={{ right: -19, top: 5, marginRight: 20, marginBottom: 21 }}>{`ID : ${resultat.ID}`}</Text>
              <Text style={{ right: -19, top: 5, marginRight: 40, marginBottom: 21 }}>{`Nom : ${resultat.NomAllergie}`}</Text>
              <TouchableOpacity onPress={() => handleClick(resultat.ID)}>
                <Image
                  source={require('../../../assets/add.png')}
                  style={{ width: 18, height: 18, top: 4 }}
                />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

</View> 


         {/*Boutton Ajouter un allergie */}
      <Pressable
        style={[styles.rectanglePressable, styles.listeallergieChildBg]}
        onPress={() => navigation.navigate("AjouterNouvelleAllergie")}
      />
      <Text
        style={[styles.ajouterDesallergies, styles.bonjourNourredinClr]}
        onPress={() => navigation.navigate("AjouterNouvelleAllergie")}
      >{`Ajouter une allergie `}</Text>
      
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({


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
 
 
 
  budgetPosition: {
    top: 147,
    position: "absolute",
  },
  component2500Layout: {
    width: 24,
    height: 24,
    position: "absolute",
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
    height: 17,
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
    height: 17,
    color: Color.colorBlack,
    letterSpacing: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
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
    width: 100,
    top: 147,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    backgroundColor: Color.colorMediumturquoise_200,
    borderStyle: "solid",
    height: 30,
    backgroundColor:Color.colorMediumturquoise_200,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15
  },
  unionIcon4: {
    height: "100%",
    width: "100%",
    top: 85,
    bottom: "21%",
    left: -70,
    marginLeft:"15%"
  },
  component2499: {
    top: 148,
    left: 257,
  },
  dt3: {
    top: 152,
    left: 210,
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
 
 
 
  dashboardLemon: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
//liste 
listeallergieChildBg: {
  backgroundColor: Color.colorMediumturquoise_200,
  position: "absolute",
},
chercherTypo: {
  letterSpacing: 0.5,
  fontFamily: FontFamily.poppinsRegular,
  textAlign: "left",
},

chercherParentLayout: {
  height: 15,
  position: "absolute",
},
iconLayout1: {
  maxHeight: "100%",
  maxWidth: "100%",
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
textFlexBox: {
  textAlign: "left",
  position: "absolute",
},
bonjourNourredinClr: {
  color: Color.colorWhite,
  textAlign: "left",
  position: "absolute",
},
bonjourNourredinTypo: {
  lineHeight: 21,
  letterSpacing: 1.1,
  fontSize: FontSize.size_lg,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
},
listeChildShadowBox: {
  height: "43%",
  width: "80%",
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
  left: 35,
  position: "absolute",
},
vectorIconLayout: {
  left: "84.48%",
  right: "10.64%",
  width: "4.88%",
  height: "2.25%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
vectorIconPosition4: {
  left: "86.13%",
  right: "12.13%",
  width: "1.73%",
  height: "0.8%",
},
vectorIconPosition3: {
  right: "12%",
  width: "2.13%",
  height: "0.86%",
  left: "85.87%",
},
idTypo: {
  lineHeight: 14,
  letterSpacing: 0.7,
  fontSize: FontSize.size_xs,
  top: 330,
  textAlign: "left",
  color: Color.colorBlack,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
  position: "absolute",
},
text1Typo: {
  fontFamily: FontFamily.poppinsRegular,
  top: 350,
  textAlign: "left",
  color: Color.colorBlack,
  lineHeight: 15,
  letterSpacing: 0.8,
  fontSize: FontSize.size_smi,
  position: "absolute",
},
vectorIconPosition2: {
  top: "53.57%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
id1Typo: {
  top: 420,
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
  top: 440,
  fontFamily: FontFamily.poppinsRegular,
  textAlign: "left",
  color: Color.colorBlack,
  lineHeight: 15,
  letterSpacing: 0.8,
  fontSize: FontSize.size_smi,
  position: "absolute",
},
vectorIconPosition1: {
  top: "64.66%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
id2Typo: {
  top: 510,
  lineHeight: 14,
  letterSpacing: 0.7,
  fontSize: FontSize.size_xs,
  textAlign: "left",
  color: Color.colorBlack,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
  position: "absolute",
},
text3Typo: {
  top: 530,
  fontFamily: FontFamily.poppinsRegular,
  textAlign: "left",
  color: Color.colorBlack,
  lineHeight: 15,
  letterSpacing: 0.8,
  fontSize: FontSize.size_smi,
  position: "absolute",
},
vectorIconPosition: {
  top: "75.74%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
id3Typo: {
  top: 600,
  lineHeight: 14,
  letterSpacing: 0.7,
  fontSize: FontSize.size_xs,
  textAlign: "left",
  color: Color.colorBlack,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
  position: "absolute",
},
text4Typo: {
  top: 620,
  fontFamily: FontFamily.poppinsRegular,
  textAlign: "left",
  color: Color.colorBlack,
  lineHeight: 15,
  letterSpacing: 0.8,
  fontSize: FontSize.size_smi,
  position: "absolute",
},
listeallergieChild: {
  top: 0,
  left: 0,
  width: 375,
  height: 233,
},
component2499Child: {
  left: "0%",
  bottom: "0%",
  top: "0%",
  right: "0%",
  height: "100%",
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
  position: "absolute",
},
component2499: {
  top: 67,
  left: 342,
  width: 24,
  height: 24,
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
  color: Color.colorBlack,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
  lineHeight: 15,
  letterSpacing: 0.8,
  fontSize: FontSize.size_smi,
  textAlign: "left",
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
listeallergieItem: {
  top: 70,
  width: 92,
  height: 91,
  left: 264,
  position: "absolute",
},
bonjourNourredin: {
  top: 190,
  left: 80,
  lineHeight: 21,
  letterSpacing: 1.1,
  fontSize: FontSize.size_lg,
  fontFamily: FontFamily.poppinsSemiBold,
  fontWeight: "600",
},
listeDesallergies: {
  top: 236,
  left: 40,
  height:900,
  color: Color.colorGray_300,
  textAlign: "left",
  position: "relative",
  alignItems:'flex-start'
},
listeallergieInner: {
  top: 285,
alignItems:'flex-start'  },
vectorIcon: {
  top: "41.72%",
  bottom: "56.02%",
},
vectorIcon1: {
  bottom: "56.71%",
  top: "42.49%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
vectorIcon2: {
  bottom: "56.65%",
  left: "85.87%",
  top: "42.49%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
nomallergie: {
  left: 54,
},
danupFraise: {
  left: 54,
},
text1: {
  left: 265,
},
id: {
  left: 264,
},
rectangleView: {
  top: 405,
},
vectorIcon3: {
  top: "52.81%",
  bottom: "44.94%",
},
vectorIcon4: {
  bottom: "45.63%",
  left: "86.13%",
  right: "12.13%",
  width: "1.73%",
  height: "0.8%",
},
vectorIcon5: {
  bottom: "45.57%",
  left: "85.87%",
  right: "12%",
  width: "2.13%",
  height: "0.86%",
},
nomallergie1: {
  left: 54,
},
chocotomFraise: {
  left: 54,
},
text2: {
  left: 265,
},
id1: {
  left: 264,
},
listeallergieChild1: {
  top: 495,
},
vectorIcon6: {
  top: "63.89%",
  bottom: "33.85%",
},
vectorIcon7: {
  bottom: "34.54%",
  left: "86.13%",
  right: "12.13%",
  width: "1.73%",
  height: "0.8%",
},
vectorIcon8: {
  bottom: "34.48%",
  left: "85.87%",
  right: "12%",
  width: "2.13%",
  height: "0.86%",
},
nomallergie2: {
  left: 54,
},
cakeFraise: {
  left: 54,
},
text3: {
  left: 265,
},
id2: {
  left: 264,
},
listeallergieChild2: {
  top: 585,
},
vectorIcon9: {
  top: "74.98%",
  bottom: "22.77%",
},
vectorIcon10: {
  bottom: "23.46%",
  left: "86.13%",
  right: "12.13%",
  width: "1.73%",
  height: "0.8%",
},
vectorIcon11: {
  bottom: "23.4%",
  left: "85.87%",
  right: "12%",
  width: "2.13%",
  height: "0.86%",
},
nomallergie3: {
  left: 54,
},
tarteFraise: {
  left: 54,
},
text4: {
  left: 264,
},
id3: {
  left: 263,
},
rectanglePressable: {
  top: 690,
  left: 38,
  borderStyle: "solid",
  borderColor: Color.colorMediumturquoise_100,
  borderWidth: 1,
  width: 305,
  height: 45,
},
ajouterDesallergies: {
  top: 705,
  left: 89,
  fontSize: 20,
  letterSpacing: 0.9,
  lineHeight: 20,
  fontFamily: FontFamily.playRegular,
  width: 224,
  height: 70,
},
vectorIcon12: {
  top: "85.81%",
  right: "11.71%",
  bottom: "11.93%",
  left: "83.41%",
  width: "4.88%",
  height: "2.25%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  overflow: "hidden",
},
vectorIcon13: {
  height: "0.9%",
  width: "0.53%",
  top: "86.49%",
  right: "13.6%",
  bottom: "12.61%",
  left: "85.87%",
  position: "absolute",
},
icon: {
  height: "100%",
  maxWidth: "100%",
  width: "100%",
},
vector: {
  left: "84.88%",
  top: "86.95%",
  right: "13.17%",
  bottom: "12.81%",
  width: "1.95%",
  height: "0.25%",
  position: "absolute",
},
listeallergie: {
  backgroundColor: Color.colorWhitesmoke,
  flex: 1,
  height: 812,
  overflow: "hidden",
  width: "100%",
},
});

export default AutreAllergie;
