import React,{ useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TabBarIOS } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { Platform,AsyncStorage} from "react-native";
import { SplashScreen} from 'expo';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SolveProblemStackscreen from './src/screen/SolveProblemStackscreen';
import ListStackscreen from './src/screen/ListStackscreen';
import FriendStackscreen from './src/screen/FriendStackscreen';
import AccountStackscreen from './src/screen/AccountStackscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const App = () => {
  const [isLoadingComplete,setLoadingComplete]=useState(false);
  const [initialNavigationState,setInitialNavigationState] = useState();
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try{
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally{
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
      loadResourcesAndDataAsync();
  }, []);

    if (!isLoadingComplete) {
      return null;
    } else {
      return (
        <NavigationContainer
          initialState={initialNavigationState}
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }        
        >
          <Tab.Navigator
            tabBarOptions = {{
              activeTintColor: '#269C9B',
              inactiveTintColor: '#676767',
             
            }}
            >
          <Tab.Screen name = "List"
            component = {ListStackscreen}
            options = {{
              title: "事件管理",
              tabBarIcon: ({focused}) => {
                if(focused) {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabmanage_pressed.png')}/>
                  )}
                else {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabmanage_unpress.png')}/>
                  )}
              }
            }}/>
          <Tab.Screen name = "SolveProblem"
            component = {SolveProblemStackscreen}
            options = {{
              title: "加入煩惱",
              tabBarIcon: ({focused}) => {
                if(focused) {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabadd_pressed.png')}/>
                  )}
                else {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabadd_unpress.png')}/>
                  )}
              }
            }}/>
          <Tab.Screen name = "Friend"
            component = {FriendStackscreen}
            options = {{
              title: "朋友",
              tabBarIcon: ({focused}) => {
                if(focused) {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabfriend_pressed.png')}/>
                  )}
                else {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabfriend_unpress.png')}/>
                  )}
              }
            }}/>
          <Tab.Screen name = "Account"
            component = {AccountStackscreen}
            options = {{
              title: "帳號設定",
              tabBarIcon: ({focused}) => {
                if(focused) {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabidmanage_pressed.png')}/>
                  )}
                else {
                  return(
                    <Image style = {styles.tabicon} source = {require('./src/img/btn_tabidmanage_unpress.png')}/>
                  )}
              }
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;