import { Feather } from '@expo/vector-icons';

import { BlurView } from 'expo-blur';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Settings } from '../screens/Settings';
import { Film } from '../screens/Film';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Home"
    >
      <HomeStackNavigator.Screen
        name="search"
        component={Search}
      />
      <HomeStackNavigator.Screen
        name="film"
        component={Film}
      />
    </HomeStackNavigator.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} className="flex-1 p-5 justify-center" />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={MyStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}