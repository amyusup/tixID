import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../screens/Beranda';
import Bioskop from '../screens/Bioskop';
import Tiket from '../screens/Tiket';
import {Icons} from '../../assets';

import {Image, Text} from 'react-native';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function index() {

  function MyTabs() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: 'black',style: {height: 62}}}>
        <Tab.Screen
          name="Beranda"
          component={Beranda}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={Icons.home.active}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={Icons.home.inactive}
                  style={{height: 45, width: 45}}
                />
              ),
          }}
        />
        <Tab.Screen name="Bioskop" component={Bioskop} 
        options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={Icons.cinema.active}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={Icons.cinema.inactive}
                  style={{height: 45, width: 45}}
                />
              ),
          }}/>
        <Tab.Screen name="Tiket" component={Tiket} 
        options={{
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  source={Icons.ticket.active}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={Icons.ticket.inactive}
                  style={{height: 45, width: 45}}
                />
              ),
          }}/>
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
