const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstPage from "./FrontEnd/Pages/FirstPage"
import Login from "./FrontEnd/Pages/Parent/Authentification/Login";
import Registration from "./FrontEnd/Pages/Parent/Authentification/Registration";
import AjouterAllrgie from "./FrontEnd/Pages/Parent/Enfant/AjouterAllrgie";
import DashboardEnfant from "./FrontEnd/Pages/Parent/Enfant/DashboardEnfant";
import DashboardParent from "./FrontEnd/Pages/Parent/Dashboard/DashboardParent";
import WelcomeP from "./FrontEnd/Pages/Parent/Authentification/WelcomeP";
import WelcomeB from "./FrontEnd/Pages/Buvette/Authentification/WelcomeB";
import LoginBuvette from "./FrontEnd/Pages/Buvette/Authentification/LoginBuvette";
import SignupBuvette from "./FrontEnd/Pages/Buvette/Authentification/SignupBuvette";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RetirerArgentBuvette from "./FrontEnd/Pages/Buvette/Portfeuille/RetirerArgentBuvette";
import ListeProduitBuvette from "./FrontEnd/Pages/Buvette/Produit/ListeProduitBuvette";
import AjouterUnProduitBuvette from "./FrontEnd/Pages/Buvette/Produit/AjouterUnProduitBuvette";
import EnfantScannéBuvette from "./FrontEnd/Pages/Buvette/EnfantScanné/EnfantScannéBuvette";
import DashboardBuvette from "./FrontEnd/Pages/Buvette/Dashboard/DashbordBuvette";
import AjouterEnfant from "./FrontEnd/Pages/Parent/Enfant/AjouterEnfant";
import CentreDeNotificationParent from "./FrontEnd/Pages/Parent/Notifications/CentreDenotificationParent";
import AjouterProduitInterditParent from "./FrontEnd/Pages/Parent/Enfant/AjouterProduitInterditParent";
import CouplerBracelet from "./FrontEnd/Pages/Parent/Enfant/CouplerBracelet";
import DécouplerBracelet from "./FrontEnd/Pages/Parent/Enfant/DécouplerBracelet";
import DocteurAI from "./FrontEnd/Pages/Parent/Enfant/DocteurAI";
import DpenseParJour from "./FrontEnd/Pages/Parent/Enfant/DpenseParJour";
import ModifierEnfant from "./FrontEnd/Pages/Parent/Enfant/ModifierEnfant";
import AlimenterCarteParent from "./FrontEnd/Pages/Parent/Portfeuille/AlimenterCarteParent";
import MéthodeBancaireParent from "./FrontEnd/Pages/Parent/Portfeuille/MéthodeBancaireParent";
import MéthodeCoupons from "./FrontEnd/Pages/Parent/Portfeuille/MéthodeCoupons";
import DetailParJour from "./FrontEnd/Pages/Parent/Enfant/DetailParJour";
import GererProduitInterdit from "./FrontEnd/Pages/Parent/Enfant/GererProduitInterdit";
import AssocierUneNouvelleBracelet from "./FrontEnd/Pages/Parent/Enfant/AssocierUneNouvelleBracelet";
import ComptePremium from "./FrontEnd/Pages/Parent/Authentification/ComptePremium";
import ModifierPageBuvette from "./FrontEnd/Pages/Buvette/Dashboard/ModifierPageBuvette";
import TransactionBloqueEnfant from "./FrontEnd/Pages/Buvette/EnfantScanné/TransactionBloqueEnfant";
import CommanderBracelet from "./FrontEnd/Pages/Parent/Dashboard/CommanderBracelet";
import AlimenterCompteEnfant from "./FrontEnd/Pages/Parent/Enfant/AlimenterCompteEnfant";
import ModifierCompteParent from "./FrontEnd/Pages/Parent/Dashboard/ModifierCompteParent";
import AutreAllergie from "./FrontEnd/Pages/Parent/Enfant/AutreAllergies";
import AjouterNouvelleAllergie from "./FrontEnd/Pages/Parent/Enfant/AjouterNouvelleAllergie";
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
              name="FirstPage"
              component={FirstPage}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="AssocierUneNouvelleBracelet"
              component={AssocierUneNouvelleBracelet}
              options={{ headerShown: true }}
            /> 
              <Stack.Screen
              name="AutreAllergie"
              component={AutreAllergie}
              options={{ headerShown: true }}
            /> 
             <Stack.Screen
              name="AjouterNouvelleAllergie"
              component={AjouterNouvelleAllergie}
              options={{ headerShown: true }}
            /> 
             <Stack.Screen
              name="ModifierCompteParent"
              component={ModifierCompteParent}
              options={{ headerShown: true }}
            /> 
             <Stack.Screen
              name="CommanderBracelet"
              component={CommanderBracelet}
              options={{ headerShown: true }}
            /> 
             <Stack.Screen
              name="AlimenterCompteEnfant"
              component={AlimenterCompteEnfant}
              options={{ headerShown: true }}
            /> 
         
              <Stack.Screen
              name="ModifierPageBuvette"
              component={ModifierPageBuvette}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="TransactionBloqueEnfant"
              component={TransactionBloqueEnfant}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="ComptePremium"
              component={ComptePremium}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="GererProduitInterdit"
              component={GererProduitInterdit}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="MéthodeCoupons"
              component={MéthodeCoupons}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="DetailParJour"
              component={DetailParJour}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="DepenseParJour"
              component={DpenseParJour}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="AlimenterCarteParent"
              component={AlimenterCarteParent}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="ModifierEnfant"
              component={ModifierEnfant}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="AjouterProduitInterditParent"
              component={AjouterProduitInterditParent}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="DécouplerBracelet"
              component={DécouplerBracelet}
              options={{ headerShown: true }}
            />
                <Stack.Screen
              name="CouplerBracelet"
              component={CouplerBracelet}
              options={{ headerShown: true }}
            />
                <Stack.Screen
              name="DocteurAI"
              component={DocteurAI}
              options={{ headerShown: true }}
            />
               <Stack.Screen
              name="CentreDeNotificationParent"
              component={CentreDeNotificationParent}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="MéthodeBancaireParent"
              component={MéthodeBancaireParent}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AjouterEnfant"
              component={AjouterEnfant}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="DashboardBuvette"
              component={DashboardBuvette}
              options={{ headerShown: true }}
            />
            <Stack.Screen
            name="EnfantScannéBuvette"
            component={EnfantScannéBuvette}
            options={{ headerShown: true }}
            />
            <Stack.Screen
            name="RetirerArgentBuvette"
            component={RetirerArgentBuvette}
            options={{ headerShown: true }}
            />
            <Stack.Screen
            name="ListeProduitBuvette"
            component={ListeProduitBuvette}
            options={{ headerShown: true }}
            />
             <Stack.Screen
            name="AjouterUnProduitBuvette"
            component={AjouterUnProduitBuvette}
            options={{ headerShown: true }}
            />
              <Stack.Screen
              name="SignupBuvette"
              component={SignupBuvette}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="LoginBuvette"
              component={LoginBuvette}
              options={{ headerShown: true }}
            />
              <Stack.Screen
              name="WelcomeP"
              component={WelcomeP}
              options={{ headerShown: true }}
            />
             <Stack.Screen
              name="WelcomeB"
              component={WelcomeB}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DpenseParJour"
              component={DpenseParJour}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AjouterAllrgie"
              component={AjouterAllrgie}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DashboardEnfant"
              component={DashboardEnfant}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DashboardParent"
              component={DashboardParent}
              options={{ headerShown: true }}
            />
         
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
