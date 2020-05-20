import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../components/Account';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AccountStackscreen({navigation}) {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name = "Account"
          component = {Account}
          options = {() => ({
            headerShown: false 
          })}/>
      </Stack.Navigator>
    );
}

export default AccountStackscreen;