import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Todolist from '../app/todolist';
import Splash from '../app/splash';

const Stack = createStackNavigator();

export default function RootStackScreen() {
  
    return (
        <Stack.Navigator initialRouteName="splash">
            <Stack.Screen
                name="splash"
                component={Splash}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="App"
                component={Todolist}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}