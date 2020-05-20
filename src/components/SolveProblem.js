import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, Modal, TouchableHighlight} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';


function AddMessage(props) {
    var mychatbox = true;
    var chatbox = false;
    // const mychatbox = props.mychatbox;
    // if(mychatbox)
    if (mychatbox)
        return (
            <Image style={styles.mychatbox} source={require('../img/img_mychatbox.png')}/>
        );
    else {
        return (
            <Image style={styles.chatface} source={require('../img/img_chatface.png')}/>
            &&
            <Image style={styles.chatbox} source={require('../img/img_chatbox.png')}/>
        )
    }

}

const SolveProblem = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}>
                <View style={styles.q1}>
                    <View style={styles.q1box}>
                        <View style={styles.q1titlebg}><Text style={styles.q1title}>最近感到煩悶的事情？</Text></View>
                        <View style={styles.anssec1}>
                            <Text style={styles.num1}>1.</Text>
                            <TextInput
                                // 1. 這邊輸入要改變 text 的值
                                onChangeText={text => setText(text)}
                                value={text}
                                style={{
                                    height: 40,
                                    width: 200,
                                    borderColor: '#378D8F',
                                    borderBottomWidth: 1,
                                }}
                                placeholder='輸入事件'
                                placeholderTextColor='gray'
                                clearTextOnFocus={true}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                // 2. 按下送出後，要把 text 的直添加到 messages 裡，同時清空 text 供下次輸入用
                                setMessages([
                                    ...messages,
                                    text
                                ]);
                                setText('');
                                // AddMessage(true);
                            }}>
                            <View style={styles.q1confirmbg}><Text style={styles.q1confirm}>確認</Text></View>

                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <View style={styles.solvebg}>
                <View style={styles.robotarea}>
                    <Image style={styles.chatface} source={require('../img/img_chatface.png')}/>
                    <Image style={styles.chatbox} source={require('../img/img_chatbox.png')}/>
                </View>
                <Image style = {styles.mychatbox} source = {require('../img/img_mychatbox.png')}/>
                <View style={styles.robotsay1box}><Text style={styles.robotsay1}>哈囉！最近有哪些事情讓你煩惱呢？</Text></View>

                {
                    messages.map((message, i) => <Text style={styles.event} key={i}>{message}</Text>)
                }

                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <View style={styles.startanswerbg}><Text style={styles.startanswer}>開始回答</Text></View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    solvebg: {
        backgroundColor: '#E0F3F1',
        height: 650
    },
    robotarea: {
        flexDirection: 'row',
        marginTop: 40,
    },
    chatface: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginLeft: 20
    },
    chatbox: {
        width: 230,
        resizeMode: 'contain'
    },
    mychatbox: {
        width: 230,
        height: 65,
        resizeMode: 'contain',
        marginLeft: 195,
        marginTop:10,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    robotsay1box: {
        width: 180,
        position: 'absolute',
        marginTop: 65,
        marginLeft: 103
    },
    robotsay1: {
        lineHeight: 20,
        fontSize: 14,
        color: '#393939'
    },
    startanswerbg: {
        backgroundColor: '#378D8F',
        width: 85,
        height: 35,
        borderRadius: 20,
        marginLeft: 290,
        marginTop: 340,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    startanswer: {
        color: 'white',
        paddingLeft: 14,
        paddingTop: 10
    },
    q1: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: 420,
        height: 815
    },
    q1title: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    },
    q1titlebg: {
        backgroundColor: '#378D8F',
        height: 65
    },
    q1box: {
        backgroundColor: '#FAFAFA',
        width: 300,
        height: 420,
        marginLeft: 55,
        marginTop: 200
    },
    anssec1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 40
    },
    num1: {
        color: '#378D8F',
        fontSize: 14,
    },
    q1confirmbg: {
        backgroundColor: '#C4E1E7',
        width: 85,
        height: 40,
        borderRadius: 20,
        marginLeft: 165,
        marginTop: 170,
        shadowColor: 'black',
        shadowOffset: {width: 1},
        shadowOpacity: 0.2
    },
    q1confirm: {
        color: '#393939',
        paddingLeft: 29,
        paddingTop: 12
    },
    event:{
        color: '#393939',
        marginLeft:270,
        marginTop:167,
        position:'absolute',
    }
});

export default SolveProblem;
