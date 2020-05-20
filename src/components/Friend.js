import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const Friend = () => {
    return(
        <View style={styles.bg}>
            <View style={styles.friendbg}>
               <Image style = {styles.friendbubble1} source = {require('../img/img_bubble_new.png')}/>
               <Image style = {styles.friendbubble2} source = {require('../img/img_bubble_new.png')}/>
               <Image style = {styles.friendbubble3} source = {require('../img/img_bubble_new.png')}/>            
            </View>
            <View style={styles.friendphoto}>
               <Image style = {styles.tiffanyphoto} source = {require('../img/img_tiffanyphoto.png')}/>
               <Image style = {styles.vickyphoto} source = {require('../img/img_vickyphoto.png')}/>
               <Image style = {styles.candyphoto} source = {require('../img/img_candyphoto.png')}/>
            </View>
            <View style ={styles.friendname}>
                <Text style = {styles.friend1}>Tiffany Lai</Text>
                <Text style = {styles.friend2}>Vicky Ho</Text>
                <Text style = {styles.friend3}>Candy Kuan</Text>
            </View>
            <View style ={styles.btnchatbubble}>
                <Image style = {styles.chatbubble1} source = {require('../img/btn_chat_bubble.png')}/>
                <Image style = {styles.chatbubble2} source = {require('../img/btn_chat_bubble.png')}/>
                <Image style = {styles.chatbubble3} source = {require('../img/btn_chat_bubble.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#E0F3F1',
        height: 680,
        marginTop:0,
        
    },
    friendbg:{
        flexDirection:'column',
    },
    friendbubble1: {
        resizeMode: 'contain',
        position: 'absolute',
        width:100,
        height:100,
        marginTop:30,
        marginLeft:40,
    },
    friendbubble2: {
        resizeMode: 'contain',
        position: 'absolute',
        width:100,
        height:100,
        marginTop:160,
        marginLeft:40,
    },
    friendbubble3: {
        resizeMode: 'contain',
        position: 'absolute',
        width:100,
        height:100,
        marginTop:290,
        marginLeft:40,
    },
    tiffanyphoto:{
        resizeMode: 'contain',
        position: 'absolute',
        width:70,
        height:70,
        marginTop:45,
        marginLeft:55,
    },
    vickyphoto:{
        resizeMode: 'contain',
        position: 'absolute',
        width:70,
        height:70,
        marginTop:175,
        marginLeft:55,
    },
    candyphoto:{
        resizeMode: 'contain',
        position: 'absolute',
        width:70,
        height:70,
        marginTop:305,
        marginLeft:55,
    },
    friend1:{
        color: '#269C9B',
        fontSize:17,
        position: 'absolute',
        paddingLeft:160,
        paddingTop:65,
    },
    friend2:{
        color: '#269C9B',
        fontSize:17,
        position: 'absolute',
        paddingLeft:160,
        paddingTop:200,
    },
    friend3:{
        color: '#269C9B',
        fontSize:17,
        position: 'absolute',
        paddingLeft:160,
        paddingTop:335,
    },
    chatbubble1:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:65,
    },
    chatbubble2:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:200,
    },
    chatbubble3:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:335,
    },

  });

export default Friend;