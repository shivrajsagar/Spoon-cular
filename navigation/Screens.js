import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Setting from "../Screens/Setting";
import Contact from "../Screens/Contact";
import SplashScreen from "../Screens/SplashScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Icon } from "galio-framework";
import { Header } from "../Components";
import CustomDrawer from "./Menu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header {...props} title="Home" />,
        }}
      />
    </Stack.Navigator>
  );
}
function AboutStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: () => <Header {...props} title="About" />,
        }}
      />
    </Stack.Navigator>
  );
}
function SettingStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          header: () => <Header {...props} title="Setting" />,
        }}
      />
    </Stack.Navigator>
  );
}
function ContactStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: () => <Header {...props} title="Contact" />,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Setting" component={SettingStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="App">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
