import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../components/List';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ListStackscreen({navigation}) {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name = "List"
          component = {List}
          options = {() => ({
            title: '事件管理',
            headerTintColor: '#269192',
          })}/>
      </Stack.Navigator>
    );
}

export default ListStackscreen;