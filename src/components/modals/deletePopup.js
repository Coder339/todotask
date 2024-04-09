import { Image, Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import ScrollContainer from '../scrollContainer';
import { APP_IMAGE } from '../../utils/constants';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default function DeletePopup(props) {
    const {visible,setVisible,onPress,setTodoID} = props

    const sendLinkHandler=()=>{
        // setVisible(false)
        onPress()
    }

    return (
        <Modal 
            avoidKeyboard
            isVisible={visible}
            onBackdropPress={() => {
                // setVisible(false);
            }}
            style={{
            margin: 0,
            flex:1,
            // justifyContent:'flex-end'
            }}
        >
            <View style={{justifyContent:'center',}}>
                <View style={styles.container}>
                    <View style={styles.topLine}/>
                    <Text style={styles.warningLabel}>Delete this task?</Text>
                    <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:14}}>
                        <Pressable style={{
                            ...styles.optionContainer,
                            marginEnd:8
                            }}
                            onPress={onPress}
                            >
                            <Text style={styles.option}>Yes</Text>
                        </Pressable>
                        <Pressable style={{
                            ...styles.optionContainer,
                            borderColor:colors.primary,
                            marginStart:8
                            }}
                            onPress={()=>setVisible(false)}
                            >
                            <Text style={styles.option}>No</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.itemBackground,
        marginHorizontal:50,
        paddingBottom:20,
    },
    topLine:{
        width:'auto',
        backgroundColor:colors.primary,
        height:5,
    },
    warningLabel:{
        color:colors.text,
        fontFamily:fonts.mediumFont,
        fontSize:18,
        textAlign:'center',
        marginVertical:30
    },
    optionContainer:{
        width:64,
        height:24,
        borderWidth:1,
        borderColor:'#A35709',
        alignItems:"center",
        justifyContent:'center',
        borderRadius:4,
    },
    option:{
        color:colors.text,
        fontFamily:fonts.regularFont,
        fontSize:12
    }
})