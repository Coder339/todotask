import { Image, Pressable, StyleSheet, Text, View,TextInput, Alert, Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import Modal from 'react-native-modal';
import ScrollContainer from '../scrollContainer';
import { APP_IMAGE } from '../../utils/constants';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const {width, height} = Dimensions.get('screen');

export default function EditTodoModal(props) {
    const {visible,setVisible,onPress,onCancel,minInput,maxInput,setMinInput,setMaxInput} = props
    // const [minInput, setMinInput] = useState('')
    // const [maxInput, setMaxInput] = useState('')

    // useEffect(() => {
        
    //     setMinInput(selectedItem?.title)
    //     setMaxInput(selectedItem?.about)
    // }, [])
    

    return (
        <Modal 
            avoidKeyboard
            isVisible={visible}
            onBackdropPress={() => {
                setVisible(false);
            }}
            style={{
            margin: 0,
            flex:1,
            // justifyContent:'flex-end'
            }}
        >
            <ScrollContainer scrollStyle={{justifyContent:'flex-end'}}>
                <View style={{backgroundColor:colors.secondary,marginHorizontal:16,padding:18,borderTopStartRadius:8,borderTopEndRadius:8}}>
                    <TextInput
                        placeholder='Mini Input...'
                        placeholderTextColor={colors.placeholder}
                        style={styles.input}
                        onChangeText={(text)=>setMinInput(text)}
                        value={minInput}
                    />
                    <TextInput
                        placeholder='Max Input...'
                        placeholderTextColor={colors.placeholder}
                        style={{
                            ...styles.input,
                            height:height/2,
                            marginVertical:8,
                            verticalAlign:"top"
                        }}
                        multiline
                        onChangeText={(text)=>setMaxInput(text)}
                        value={maxInput}
                    />
                    <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',}}>
                        <Pressable style={{
                            ...styles.optionContainer,
                            marginEnd:8
                            }}
                            onPress={onCancel}
                            >
                            <Text style={styles.option}>Cancel</Text>
                        </Pressable>
                        <Pressable style={{
                            ...styles.optionContainer,
                            marginStart:8
                            }}
                            onPress={onPress}
                            >
                            <Text style={styles.option}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollContainer>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:0,
        margin:0,
        borderWidth:1,
        borderColor:colors.primary,
        padding:8,
        flex:1,
        color:colors.text,
        borderRadius:4,
        backgroundColor:colors.itemBackground
    },
    optionContainer:{
        width:64,
        height:24,
        borderWidth:1,
        borderColor:colors.primary,
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