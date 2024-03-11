import * as React from "react";
import { Text, StyleSheet, View ,ScrollView,TouchableOpacity,Pressable} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../../../GlobalStyles";
import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";


const AjouterAllrgie = () => {
  const navigation = useNavigation();
  const [glutenName, setGlutenName] = useState('');
 
  const [glutenClicked, setGlutenClicked] = useState(false);
  const [EggClicked, setEggClicked] = useState(false);
  const [PoissonClicked, setPoissonClicked] = useState(false);
  const [FraiseClicked, setFraiseClicked] = useState(false);
  const [LaitClicked, setLaitClicked] = useState(false);
  const [ArachideClicked, setArachideClicked] = useState(false);
  const [ViendeClicked, setViendeClicked] = useState(false);
  const [ChocolatClicked, setChocolatClicked] = useState(false);

  const handleGlutenClick = () => {
    setGlutenClicked(!glutenClicked);
  };
  const handleEggClick = () => {
    setEggClicked(!EggClicked);
  };
  const handlePoissonClick = () => {
    setPoissonClicked(!PoissonClicked);
  };
  const handleFraiseClick = () => {
    setFraiseClicked(!FraiseClicked);
  };
  const handleLaitClick = () => {
    setLaitClicked(!LaitClicked);
  };
  const handleArachideClick = () => {
    setArachideClicked(!ArachideClicked);
  };
  const handleViendeClick = () => {
    setViendeClicked(!ViendeClicked);
  };
  const handleChocolatClick = () => {
    setChocolatClicked(!ChocolatClicked);
  };
  useEffect(() => {
    // Appel à l'API pour récupérer l'allergie avec le nom "gluten"
    fetch('http://192.168.1.4:4000/Allergies/GetAllergies/Gluten')
      .then(response => response.json())
      .then(data => {
        // Met à jour le nom de l'allergie (gluten) dans l'état local
        setGlutenName(data.NomAllergie);
      })
      .catch(error => console.error('Erreur lors de la récupération de l\'allergie gluten :', error));
  }, []); // Exécute une seule fois lors du montage du composant
   
  return (
    <ScrollView>
      <View style={styles.ajouterAllrgie}>
      <View style={[styles.amineWrapper, styles.amineWrapperLayout]}>
        <Text style={styles.amine}>Amine</Text>
      </View>
      <View style={[styles.component2498, styles.glutenIconLayout]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={[styles.pasALcole, styles.textTypo]}>PAS A l’école</Text>
      <Text style={[styles.am, styles.amTypo]}>9:30 AM</Text>
      <Text style={[styles.ecolePrivAl, styles.amTypo]}>
        Ecole privé al yassmine,La Marsa
      </Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../../../assets/image-3.png")}
      />
      <View style={[styles.component2143, styles.componentPosition]}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <View style={[styles.ajouterAllrgieChild, styles.amineWrapperLayout]} />
      <View style={styles.component2499}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
      <Text style={[styles.dt, styles.dtTypo]}>41,5 DT</Text>
      <Text style={[styles.budget, styles.dtTypo]}>Budget</Text>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape1.png")}
      />
      {/*Go back icon */}
      <View style={styles.component24991}>
        <View style={[styles.component2498Child, styles.textPosition]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../../../assets/union1.png")}
        />
      </View>
       {/*Coeur allérgie icon */}
      <Image
        style={styles.component205Icon}
        contentFit="cover"
        source={require("../../../assets/component-205.png")}
      />
     {/*Titre les allérgies de Amine */}
      <Text style={[styles.lesAllrgiesDe, styles.textTypo]}>
        Les Allérgies de Amine
      </Text>
            {/*Fraise */}
            <TouchableOpacity
          style={[
            styles.ajouterAllrgieChild2,
            styles.ajouterChildShadowBox1,
            FraiseClicked && styles.clickedBorder, // Applique la bordure si fraiseClicked est vrai
          ]}
          onPress={handleFraiseClick}
        >
          <Image
            style={[styles.imgAllergie]}
            contentFit="cover"
            source={require("../../../assets/strawberry.png")}
          />
          <Text style={[styles.txtAllergie]}>Fraise</Text>
        </TouchableOpacity>
         {/*Lait */}
         <TouchableOpacity   style={[
            styles.ajouterAllrgieChild3,
            styles.ajouterChildShadowBox1,
            LaitClicked && styles.clickedBorder, // Applique la bordure si laitClicked est vrai
          ]}
          onPress={handleLaitClick}>
         <Image
        style={[styles.imgAllergie]}
        contentFit="cover"
        source={require("../../../assets/milk.png")}
      />
     <Text style={[styles.txtAllergie]}>Lait</Text>
     </TouchableOpacity>
     {/*Viende */}
     <TouchableOpacity
          style={[
            styles.ajouterAllrgieChild4,
            styles.ajouterChildShadowBox,
            ViendeClicked && styles.clickedBorder, // Applique la bordure si viandeClicked est vrai
          ]}
          onPress={handleViendeClick}
        >
          <Text style={{top:60,right:-25,}}>Viande</Text>
          <Image
            style={{height:50,width:45,left:29}}
            contentFit="cover"
            source={require("../../../assets/beef.png")}
          />
        </TouchableOpacity>
        {/* Arachide */}
        <TouchableOpacity
          style={[
            styles.ajouterAllrgieChild8,
            styles.ajouterChildShadowBox1,
            ArachideClicked && styles.clickedBorder, // Applique la bordure si ArachideClicked est vrai
          ]}
          onPress={handleArachideClick}
        >
          <Text style={{height:40,top:7,width:58,right:-20,top:65}}>Arachide</Text>
          <Image
            style={{height:40,top:7,width:20,right:-35,top:-20}}
            contentFit="cover"
            source={require("../../../assets/soya.png")}
          />
        </TouchableOpacity>

      {/*Chocolat */}
      <TouchableOpacity
          style={[
            styles.ajouterAllrgieChild5,
            styles.ajouterChildShadowBox,
            ChocolatClicked && styles.clickedBorder, // Applique la bordure si ChocolatClicked est vrai
          ]}
          onPress={handleChocolatClick}
        >
          <Text style={{top:60,right:-20,}}>Chocolat</Text>
          <Image
            style={{height:40,width:40,left:25}}
            contentFit="cover"
            source={require("../../../assets/Chocolat.png")}
          />
        </TouchableOpacity>
       {/* Gluten */}
       <TouchableOpacity
          style={[
            styles.rectangleView,
            styles.ajouterChildShadowBox2,
            glutenClicked && styles.clickedBorder, // Applique la bordure si glutenClicked est vrai
          ]}
          onPress={handleGlutenClick}
        >
          <Text style={{ top: 55, right: -25 }}>{glutenName}</Text>
          <View style={{ top: 10, right: -35, height: 50, width: 65 }}>
            <Image 
              style={[styles.glutenIcon, styles.glutenIconLayout]}
              contentFit="cover"
              source={require("../../../assets/gluten.png")}
            />
          </View>
        </TouchableOpacity>
{/*Egg */}
<TouchableOpacity
          style={[
            styles.ajouterAllrgieChild1,
            styles.ajouterChildShadowBox2,
            EggClicked && styles.clickedBorder, // Applique la bordure si EggClicked est vrai
          ]}
          onPress={handleEggClick}
        >
          <Text style={{top:63,right:-30,}}>œuf</Text>
          <Image
            style={{top:2,right:-20,height:42,width:50}}
            contentFit="cover"
            source={require("../../../assets/Egg.png")}
          />
        </TouchableOpacity>
        {/*Poisson */}
        <TouchableOpacity
          style={[
            styles.ajouterAllrgieChild7,
            styles.ajouterChildShadowBox2,
            PoissonClicked && styles.clickedBorder, // Applique la bordure si poissonClicked est vrai
          ]}
          onPress={handlePoissonClick}
        >
          <Text style={{top:55,right:-15,}}>Poisson</Text>
          <Image
            style={{top:2,right:-25,height:38,width:50}}
            contentFit="cover"
            source={require("../../../assets/fish-1.png")}
          />
        </TouchableOpacity>

      {/*Autre */}
      <View style={[styles.ajouterAllrgieChild9, styles.ajouterChildShadowBox]} />
      <Image
        style={styles.plusCircleIcon}
        contentFit="cover"
        source={require("../../../assets/pluscircle.png")}
      />

            <Text style={[styles.autre, styles.autreLayout]}  onPress={() => navigation.navigate("AutreAllergie")}>Autre</Text>

       {/*Bouton ajouter */}
      <Pressable
        style={[styles.button1, styles.button1Layout]}
        onPress={() => navigation.navigate("AutreAllergie")}
      >
        <View style={[styles.buttonItem, styles.buttonChildBg]} />
        <Text style={[styles.register, styles.registerTypo]}  onPress={() => navigation.navigate("AutreAllergie")}>Ajouter</Text>
      </Pressable>
    </View></ScrollView>

  );
};

const styles = StyleSheet.create({
  amineWrapperLayout: {
    height: 21,
    position: "absolute",
  },
  buttonItem:{
    top: 690,
    left: 38,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 305,
    height: 45,
    
  },
  buttonChildBg:{
    backgroundColor:Color.colorMediumturquoise_200,
  },
  registerTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    top:700,
    right:150,
    color: Color.colorWhite,
  },
  ajouterEnfant1: {
    top: 159,
    left: 53,
    lineHeight: 21,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  clickedBorder: {
    borderWidth: 2,
    borderColor: Color.colorMediumturquoise_200,
  },
  glutenIconLayout: {
    width: 18,
    height: 18,
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
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  amTypo: {
    height: 7,
    color: Color.colorBlack,
    letterSpacing: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  componentPosition: {
    top: 107,
    position: "absolute",
  },
  dtTypo: {
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  ajouterShadowBox: {
    height: 90,
    width: 90,
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
    top: 294,
    position: "absolute",
  },
  ajouterChildShadowBox2: {
    height: 93,
    width: 90,
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
    top: 294,
    position: "absolute",
  },
  ajouterChildShadowBox1: {
    top: 414,
    height: 93,
    width: 90,
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
    position: "absolute",
  },
  iconLayout1: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  imgAllergie:{
    height:50,width:35,left:29,top:10
  },
  txtAllergie:{
    height:50,width:45,left:30,top:15
  },
  ajouterChildShadowBox: {
    top: 534,
    height: 93,
    width: 90,
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
    position: "absolute",
  },
  gluten1Position: {
    left: 52,
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  ChocolatLayout: {
    height: 16,
    position: "absolute",
  },
  autreLayout: {
    left: 261,
    height: 16,
    width: 93,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  glutenPosition: {
    top: 351,
    height: 16,
    width: 93,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  laitLayout: {
    top: 473,
    height: 16,
    width: 93,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconPosition: {
    left: 172,
    height: 32,
    width: 32,
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
  amine: {
    top: 0,
    left: 0,
    letterSpacing: 2.2,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_100,
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
    height: 18,
    top: 107,
    position: "absolute",
  },
  pasALcole: {
    width: 72,
    height: 11,
    color: Color.colorBlack,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    letterSpacing: 0.5,
    fontWeight: "600",
    left: 142,
  },
  am: {
    left: 227,
    width: 40,
    lineHeight: 9,
    fontSize: FontSize.size_5xs,
    top: 112,
    height: 7,
  },
  ecolePrivAl: {
    top: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    width: 199,
    left: 140,
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
    width: 19,
    height: 19,
    left: 262,
  },
  ajouterAllrgieChild: {
    left: 203,
    backgroundColor: Color.colorMediumturquoise_200,
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    width: 75,
    borderStyle: "solid",
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
    left: 257,
    width: 20,
    height: 20,
    position: "absolute",
  },
  dt: {
    top: 149,
    left: 206,
    fontFamily: FontFamily.portLligatSans,
    color: Color.colorWhite,
    width: 92,
    height: 18,
  },
  budget: {
    fontFamily: FontFamily.play,
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
  component205Icon: {
    top: 199,
    left: 38,
    width: 80,
    height: 80,
    position: "absolute",
  },
  ajouterAllrgieItem: {
    left: 22,
  },
  ajouterAllrgieInner: {
    left: 142,
  },
  rectangleView: {
    left: 22,
  },
  ajouterAllrgieChild1: {
    left: 142,
  },
  ajouterAllrgieChild2: {
    left: 22,
  },
  strawberryIcon: {
    marginTop: 28,
    marginLeft: -139,
    left: "50%",
    top: "50%",
    width: 32,
  },
  ajouterAllrgieChild3: {
    left: 142,
  },
  ajouterAllrgieChild4: {
    left: 22,
  },
  beefIcon: {
    top: 557,
  },
  ajouterAllrgieChild5: {
    left: 142,
  },
  Chocolat: {
    width: 93,
    textAlign: "center",
    top: 589,
    height: 16,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    left: 140,
  },
  ChocolatIcon: {
    left: 173,
    top: 557,
    overflow: "hidden",
  },
  ajouterAllrgieChild6: {
    left: 262,
  },
  ajouterAllrgieChild7: {
    left: 262,
  },
  fish1Icon: {
    marginTop: -89,
    marginLeft: 103,
    left: "50%",
    top: "50%",
    width: 32,
  },
  ajouterAllrgieChild8: {
    left: 262,
  },
  ArachideIcon: {
    top: 438,
    left: 292,
    overflow: "hidden",
  },
  ajouterAllrgieChild9: {
    left: 262,
  },
  autre: {
    top: 592,
  },
  plusCircleIcon: {
    top: 559,
    left: 299,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  gluten: {
    left: 19,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    top: 351,
  },
  Egg: {
    left: 139,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.6,
    lineHeight: 12,
  },
  fraise: {
    left: 22,
  },
  viende: {
    left: 20,
    width: 93,
    textAlign: "center",
    top: 589,
    height: 16,
    lineHeight: 14,
    letterSpacing: 0.7,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  lait: {
    left: 142,
  },
  Arachide: {
    left: 263,
  },
  poisson: {
    top: 356,
  },
  glutenIcon: {
    height: 18,
  },
  gluten1: {
    top: 319,
    padding: 3,
  },
  milkIcon: {
    top: 437,
  },
  mushroomIcon: {
    top: 313,
  },
  lesAllrgiesDe: {
    top: 227,
    left: 111,
    letterSpacing: 1.1,
    fontWeight: "600",
    color: Color.colorGray_100,
    lineHeight: 21,
    fontSize: FontSize.size_lg,
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
  },
  ajouterAllrgie: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AjouterAllrgie;
