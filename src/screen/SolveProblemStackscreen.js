import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SolveProblem from '../components/SolveProblem';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SolveProblemStackscreen({navigation}) {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name = "SolveProblem"
          component = {SolveProblem}
          options = {() => ({
            title: '開始解決煩惱',
            headerTintColor: '#269192',   
          })}/>
      </Stack.Navigator>
    );
}

export default SolveProblemStackscreen;