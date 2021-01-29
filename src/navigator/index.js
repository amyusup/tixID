import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../screens/Beranda';
import Bioskop from '../screens/Bioskop';
import Tiket from '../screens/Tiket';
import BerandaActive from '../../assets/home_active.png';
import BerandaInactive from '../../assets/home_active.png';
import {Image, Text} from 'react-native';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function index() {
  //   const MyStack = () => {
  //     return (
  //       <Stack.Navigator>
  //         <Stack.Screen name="Home" component={Home} />
  //       </Stack.Navigator>
  //     );
  //   };

  function MyTabs() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: 'black',style: {height: 62}}}>
        <Tab.Screen
          name="Beranda"
          component={Beranda}
          options={{
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  source={require('../../assets/home_active.png')}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={require('../../assets/home_inactive.png')}
                  style={{height: 45, width: 45}}
                />
              ),
          }}
        />
        <Tab.Screen name="Bioskop" component={Bioskop} 
        options={{
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  source={require('../../assets/cinema_active.png')}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={require('../../assets/cinema_inactive.png')}
                  style={{height: 45, width: 45}}
                />
              ),
          }}/>
        <Tab.Screen name="Tiket" component={Tiket} 
        options={{
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  source={require('../../assets/ticket_active.png')}
                  style={{height: 45, width: 45}}
                  />
              ) : (
                <Image
                  source={require('../../assets/ticket_inactive.png')}
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
