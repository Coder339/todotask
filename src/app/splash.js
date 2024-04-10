import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { colors } from '../styles/colors'
import { fonts } from '../styles/fonts'

export default function Splash(props) {
    const {navigation} = props

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('App')
        }, 3000);
    }, [])
    
    return (
        <View style={{flex:1,backgroundColor:colors.secondary,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:colors.text,fontFamily:fonts.boldFont,fontSize:20}}>DIWAKKAR</Text>
        </View>
    )
}

const styles = StyleSheet.create({})