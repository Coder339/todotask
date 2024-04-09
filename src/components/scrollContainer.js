import React,{ReactNode} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView,RefreshControl } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function ScrollContainer(props) {
    return (
        <View style={{ flex: 1 }}> 
            <KeyboardAwareScrollView
                // automaticallyAdjustContentInsets={true}
                nestedScrollEnabled={true}
                // extraHeight={140}
                scrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                contentContainerStyle={{ ...props.scrollStyle, ...styles.keyboard, }}
            >
                {props.children}
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    keyboard: {
        // height:scaleHeight('100%'),
        flexGrow: 1,
        // flex: 1
    }
})
