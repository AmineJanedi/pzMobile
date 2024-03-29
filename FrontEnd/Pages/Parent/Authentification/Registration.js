import { useState,useEffect } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable,ScrollView,TextInput,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
const Registration = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('Premium');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const[confirmerMotPasse,setconfirmerMotPasse]=useState('');
  const [cin, setCIN] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onPress = async () => {
    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    } else {
      setEmailError('');
    }

    // Validate password match
    if (motDePasse !== confirmerMotPasse) {
      setPasswordMatchError('Les mots de passe ne correspondent pas');
      return;
    } else {
      setPasswordMatchError('');
    }

    try {
      // Make a POST request to the backend API to add a new parent
      const response = await axios.post('http://192.168.1.4:4000/Parent/AjouterParents', {
        nom,
        email,
        motDePasse,
        cin,
        typeCompte: selectedValue
      });
      
      // Redirect to appropriate screen based on the selected account type
      if (selectedValue === 'Premium') {
        navigation.navigate('ComptePremium');
      } else if (selectedValue === 'Gratuit') {
        navigation.navigate('Login');
      }
    } catch (error) {
      // Display an alert if there's an error
      console.error('Error creating parent:', error);
      if (error.response && error.response.status === 400 && error.response.data.message === 'Email already in use') {
        Alert.alert('Error', 'This email is already in use. Please use a different email address.');
      } else {
        Alert.alert('Error', 'Email déja utilisé changer email');
      }
    }
  };
  return (
    <ScrollView> 
       <View style={styles.registration}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../../../assets/shape.png")}
      />
     
      <Text
        style={[styles.bienvenueParent, styles.registerTypo]}
      >{`Bienvenue Parent `}</Text>
      <Text style={[styles.remplirCeFormulaire, styles.entrerVotreEmailTypo]}>
        Remplir ce formulaire avant de commencer
      </Text>
     
   {/* Champs Nom */}
<View style={[styles.input1, styles.inputLayout]}>
  <View style={[styles.inputChild, styles.childPosition]} />
  <TextInput
    style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
    placeholder="Entrer votre nom"
    value={nom}
    onChangeText={setNom}
  />
</View>

{/* Champs mdp */}
<View style={[styles.input, styles.inputLayout]}>
  <View style={[styles.inputChild, styles.childPosition]} />
  <TextInput
    style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
    placeholder="Confirmer mot de passe"
    secureTextEntry={true}
    value={motDePasse}
    onChangeText={setMotDePasse}

  />
 {passwordMatchError ? <Text style={styles.error}>{passwordMatchError}</Text> : null}
</View>

{/* Email */}
<View style={[styles.input2, styles.inputLayout]}>
  <View style={[styles.inputChild, styles.childPosition]} />
  <TextInput
    style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
    placeholder="Entrer votre Email"
    value={email}
    onChangeText={setEmail}
  />
   {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

</View>

{/* Champs Confirmer mot de passe */}
<View style={[styles.input3, styles.inputLayout]}>
  <View style={[styles.inputChild, styles.childPosition]} />
  <TextInput
    style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
    placeholder="Entrer votre mot de passe"
    secureTextEntry={true} // Make password field hidden
    value={confirmerMotPasse}
    onChangeText={setconfirmerMotPasse}
  />
</View>

{/* Champs entrer CIN */}
<View style={[styles.input4, styles.inputLayout]}>
  <View style={[styles.inputChild, styles.childPosition]} />
  <TextInput
    style={[styles.entrerVotreEmail, styles.entrerVotreEmailTypo]}
    placeholder="Entrer votre CIN"
    value={cin}
    onChangeText={setCIN}
  />
</View>
 {/* Type de compte*/}
 <View style={{ position: 'absolute', bottom: 135,left:45 }}>
        <Text>Choisir le type de votre compte</Text>
      <RadioButton.Group onValueChange={setSelectedValue} value={selectedValue}>
        <RadioButton.Item label="Premium" value="Premium" />
        <RadioButton.Item label="Gratuit" value="Gratuit" />
      </RadioButton.Group>
    </View>
         {/*Bouton créer un compte */}
         <Pressable
  style={styles.button}
  onPress={onPress}
>
  <View style={[styles.buttonChild, styles.childPosition]} />
  <Text style={[styles.register, styles.registerTypo]}>Créer Compte</Text>
</Pressable>
       {/*Sign in choice */}
      <Pressable
        style={styles.vousAvezDjaContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text1}>
          <Text style={styles.textClr}>{`Vous avez déja un compte ? `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
     
    </View></ScrollView>

  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    overflow: "hidden",
  },
  error:{
color:'red',
left:21,
top:-5
  },
  childPosition1: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  registerTypo: {
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  entrerVotreEmailTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.8,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    top: "25%",
    height: "100%",
  },
  inputLayout: {
    height: 51,
    left: 27,
    width: 325,
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
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    position: "absolute",
  },
  signalIcon: {
    right: "12.32%",
    left: "83.15%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    position: "absolute",
  },
  batteryThreeQuartersIcon: {
    left: "95.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "4.53%",
    height: "100%",
    overflow: "hidden",
    right: "0%",
  },
  text: {
    lineHeight: 15,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    letterSpacing: 0.8,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 15,
    left: 25,
    height: 16,
    width: 325,
    position: "absolute",
  },
  bienvenueParent: {
    top: 135,
    left: 92,
    lineHeight: 21,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  remplirCeFormulaire: {
    top: 170,
    left: 31,
    color: "rgba(0, 0, 0, 0.74)",
    textAlign: "center",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumturquoise_200,
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    left: "0%",
  },
  register: {
    width: "99.69%",
    lineHeight: 25,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    left: "0%",
    top: 18,
    height: "100%",
  },
  button: {
    top: 680,
    height: 40,
    left: 27,
    width: 325,
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    left: "0%",
  },
  entrerVotreEmail: {
    top: "31.37%",
    left: "9.23%",
    color: Color.colorGray_200,
    textAlign: "left",
    width:"100%"
  },
  input: {
    top: 411,
  },
  input1: {
    top: 200,
  },
  input2: {
    top: 270,
  },
  input3: {
    top: 340,
  },
  input4: {
    top: 485,
  },
  signIn: {
    fontWeight: "700",
    color: Color.colorMediumturquoise_200,
    fontFamily: FontFamily.poppins,
  },
  text1: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 0.8,
  },
  vousAvezDjaContainer: {
    left: 51,
    top: 741,
    position: "absolute",
  },
  registration: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Registration;
