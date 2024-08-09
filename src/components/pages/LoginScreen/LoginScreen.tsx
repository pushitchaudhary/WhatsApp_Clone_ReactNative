import {SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const LoginScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.root}>
            <View>
            <Text style={styles.title}>Enter your phone number</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>WhatsApp will need to verify your phone number. What's my number?</Text>
            </View>

        </View>
    </SafeAreaView>
  
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    root : {
        display : 'flex',
        height : '100%',
        borderWidth : 2,
        borderColor : 'red',
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 23,
        fontWeight : '600'
    },
    textContainer : {
        borderWidth : 2,
    },
    text : {
        fontSize : 13,
        paddingHorizontal : 12
    }
})