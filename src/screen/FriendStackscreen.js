import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friend from '../components/Friend';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

const Stack = createStackNavigator();

function FriendStackscreen({navigation}) {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name = "Friend"
          component = {Friend}
          options = {() => ({
            title: '朋友',
            headerTintColor: '#269192',   
          })}/>
      </Stack.Navigator>
    );
}

export default FriendStackscreen;