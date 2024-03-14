import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable,ScrollView,Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import axios from 'axios';
const DashboardParent = ({ route }) => {
  const [parentName, setParentName] = useState('');
  const [typeCompte, settypeCompte] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // Fonction pour récupérer le nom du parent à partir de son ID
    const fetchParentName = async () => {
      try {
        // Récupérer l'ID du parent de la route
        const { id } = route.params;

        // Faire une requête à l'API pour obtenir les détails du parent
        const response = await axios.get(`http://192.168.1.4:4000/Parent/${id}`);

        // Extraire le nom du parent de la réponse
        const { nom,typeCompte } = response.data.parent;

        // Mettre à jour le nom du parent dans l'état local
        setParentName(nom);
        settypeCompte(typeCompte);

      } catch (error) {
        console.error('Error fetching parent name:', error);
      }
    };

    // Appeler la fonction pour récupérer le nom du parent
    fetchParentName();
  }, [route]);


  return (
    <ScrollView>
    <View style={styles.dashboardParent}>
      
      {/*Partie supérieure */}
    
      <View style={styles.dashboardParentChild} />
      <View style={[styles.component2499, styles.component2499Layout]}>
        <View style={styles.component2499Child} />
    
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union6.png")}
        />
        <View>
        <Pressable
         onPress={() => navigation.navigate("CentreDeNotificationParent")}
>
         <Image
          style={styles.alert}
          contentFit="cover"
          source={require("../../../assets/alert.png")}
        />
        </Pressable></View>
      </View>
     
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
    
      <Image
        style={styles.dashboardParentItem}
        contentFit="cover"
        source={require("../../../assets/ellipse-11.png")}
      />

      <Text style={[styles.bonjourLinda, styles.bonjourLindaClr]}>
        Bonjour , {parentName} 
      </Text>
      <Text style={{top:210,color:'white'}}> Type compte : {typeCompte}</Text>
      {/*Budget familiale */}
      <View style={styles.dashboardParentChild1} />
      <Text style={[styles.budgetFamiliale, styles.dtLayout]}>
        Budget familiale
      </Text>
      <Text style={[styles.dt, styles.dtPosition]}>500 DT</Text>
      
     
      <View style={[styles.component754, styles.component754Position]}>
        <View style={styles.component2499Child} />
        <Pressable  style={[styles.unionIcon1, styles.unionIconLayout]}
                onPress={() => navigation.navigate("MéthodeBancaireParent")}
                >
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union7.png")}

        />
        </Pressable>
        {/*Boutton Commander Bracelet */}
      </View>
      <View style={styles.buttonContainer}>
  <Pressable
    style={{backgroundColor:Color.colorMediumturquoise_200,width:110,height:35,top:303,left:240,borderTopLeftRadius:15,borderBottomRightRadius:15}}
    onPress={() => navigation.navigate("CommanderBracelet")}
  >
    <Text style={{color:'white',marginLeft:14}}>Commander un bracelet</Text>
  </Pressable>
</View>
      {/*Famille */}
      <Text style={[styles.famille, styles.syndaClr]}>Famille</Text>
    
      <Image
        style={[styles.plusCircleIcon, styles.component2499Layout]}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />
        <Pressable
              style={[styles.plusCircleIcon, styles.component2499Layout]}

        onPress={() => navigation.navigate("AjouterEnfant")}
      >
</Pressable>
       <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
      />
      <Pressable
        style={[styles.dashboardParentChild2, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("DashboardEnfant")}
      />
       <View style={[styles.syndaWrapper, styles.syndaWrapperLayout]}>
        <Text style={[styles.synda, styles.syndaTypo]}>Synda</Text>
      </View>
      <View style={[styles.amineWrapper, styles.syndaWrapperLayout]}>
        <Text style={[styles.synda, styles.syndaTypo]}>Amine</Text>
      </View>
      {/*Activité */}
      <Text style={[styles.activit, styles.syndaClr]}>Activité</Text>
      <View style={styles.dashboardParentInner} />
      <Text style={[styles.touteLaFamille, styles.syndaTypo]}>
        Toute la famille
      </Text>

      <Text style={[styles.aujourdhui, styles.syndaTypo]}>Aujourd’hui</Text>
      
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  component2499Layout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  unionIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    color:"white"
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
  bonjourLindaClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  syndaClr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  syndaTypo: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
  },
  syndaLayout: {
    width: 232,
    height: 16,
    position: "absolute",
  },
  amineLayout: {
    width: 227,
    position: "absolute",
  },
  syndaWrapperLayout: {
    height: 14,
    position: "absolute",
  },
  touteLaFamillePosition: {
    left: 52,
    position: "absolute",
  },
  groupLayout: {
    width: 17,
    borderColor: Color.colorDarkslategray,
    height: 17,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  dtLayout: {
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
  },
  dtPosition: {
    left: 220,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 95,
    width: 87,
    borderWidth: 0.5,
    borderColor: Color.colorCadetblue,
    top: 369,
    borderStyle: "solid",
    position: "absolute",
  },
  component754Position: {
    top: 260,
    position: "absolute",
  },
  dashboardParentBorder: {
    borderColor: Color.colorBlack,
    height: 17,
    width: 17,
    borderWidth: 1,
    borderStyle: "solid",
    left: 52,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  dashboardParentChild: {
    width: 375,
    height: 233,
    backgroundColor: Color.colorMediumturquoise_200,
    left: 0,
    top: 0,
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
    color:"white"
  },
  alert:{
    height: "100%",
    width: "74.17%",
    top: "500.5%",
    left:"-250%"
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
    textAlign: "left",
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    width: 325,
    height: 16,
    left: 25,
    position: "absolute",
  },
  dashboardParentItem: {
    left: 264,
    height: 91,
    width: 92,
    top: 70,
    position: "absolute",
  },
  bonjourLinda: {
    top: 170,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    left: 95,
    fontWeight: "600",
    position: "absolute",
  },
  famille: {
    top: 334,
    left: 27,
    color: Color.colorGray_100,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    position: "absolute",
  },
  activit: {
    top: 485,
    left: 27,
    color: Color.colorGray_100,
    lineHeight: 21,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    position: "absolute",
  },
  dashboardParentInner: {
    top: 528,
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
    height: 248,
    backgroundColor: Color.colorWhite,
    left: 31,
    position: "absolute",
  },
  touteLaFamille: {
    left: 52,
    position: "absolute",
    top: 554,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  syndaAAchet: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  syndaAAchetUnSandwitchThWrapper: {
    top: 599,
    left: 80,
  },
  amineAEssaye: {
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  amineAEssayeDacheterUnPWrapper: {
    left: 85,
    height: 28,
    top: 628,
  },
  synda: {
    color: Color.colorGray_100,
    textAlign: "left",
    left: 0,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  syndaWrapper: {
    left: 55,
    width: 41,
    top: 444,
    height: 14,
  },
  amineWrapper: {
    left: 160,
    width: 42,
    top: 444,
    height: 14,
  },
  amineAAchet: {
    left: 28,
    color: Color.colorGray_100,
    textAlign: "left",
    top: 70,
    position: "absolute",
  },
  groupChild: {
    height: 17,
    top: 70,
  },
  groupItem: {
    height: 17,
    top: 0,
    borderColor: Color.colorDarkslategray,
  },
  amineAAchetDesBiscuitsParent: {
    width: 217,
    height: 87,
    top: 599,
  },
  syndaAPass37Wrapper: {
    top: 704,
    width: 130,
    left: 80,
  },
  amineEstEnDehorDeLcoleWrapper: {
    top: 739,
    width: 206,
    left: 80,
  },
  plusCircleIcon: {
    top: 405,
    left: 243,
    overflow: "hidden",
  },
  rectangleView: {
    left: 317,
    borderRadius: 100,
    backgroundColor: "#d9d9d9",
    width: 3,
    height: 90,
    top: 628,
    position: "absolute",
  },
  dashboardParentChild1: {
    top: 248,
    borderColor: Color.colorMediumturquoise_100,
    width: 326,
    height: 59,
    borderWidth: 1,
    borderStyle: "solid",
    left: 25,
    backgroundColor: Color.colorMediumturquoise_200,
    position: "absolute",
  },
  budgetFamiliale: {
    left: 46,
    width: 114,
    top: 270,
    position: "absolute",
    height: 17,
    color: Color.colorWhite,
    textAlign: "left",
  },
  dt: {
    top: 268,
    height: 18,
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    width: 92,
  },
  
  rectanglePressable: {
    left: 31,
    height: 95,
    width: 87,
    borderWidth: 0.5,
    borderColor: Color.colorCadetblue,
    top: 369,
  },
  dashboardParentChild2: {
    left: 133,
  },
  unionIcon1: {
    height: "100%",
    width: "100%",
  },
  component754: {
    left: 315,
    width: 31,
    height: 31,
  },
  aujourdhui: {
    left: 246,
    color: Color.colorMediumturquoise_200,
    textAlign: "center",
    top: 554,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  dashboardParentChild3: {
    top: 703,
  },
  dashboardParentChild4: {
    top: 633,
  },
  dashboardParentChild5: {
    top: 737,
  },
  dashboardParent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DashboardParent;
