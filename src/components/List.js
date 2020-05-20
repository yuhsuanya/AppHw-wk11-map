import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListAll from './ListAll';
import ListNotyet from './ListNotyet';
import ListDone from './ListDone';


const UpTab = createMaterialTopTabNavigator();


const List = () => {
    return(
        <UpTab.Navigator
            tabBarOptions = {{
                activeTintColor: '#269192',
                inactiveTintColor: '#269192',
                labelStyle: {
                    fontWeight: '700',
                    fontSize: 14
                },
                indicatorStyle: {
                    backgroundColor: '#e0f3f1',
                    height: 50,
                    width: 137,
                    borderRadius: 7,
                    shadowOffset: {height: 1},
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                },
                tabStyle: {
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 0.5
                }
            }}>
            <UpTab.Screen name = "所有事件"
                component = {ListAll}/>
            <UpTab.Screen name = "已解決事件"
                component = {ListDone}/>
            <UpTab.Screen name = "未解決事件"
                component = {ListNotyet}/>
        </UpTab.Navigator>
    );
}

export default List;