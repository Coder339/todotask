import React from 'react'
import { Platform } from 'react-native'

export const fonts = {
    regularFont: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular', 
    lightFont: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto-Light',
    mediumFont: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto-Medium', 
    boldFont: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold',
}