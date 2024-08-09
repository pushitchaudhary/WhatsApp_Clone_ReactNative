import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextLogo = () => {
  return (
    <View style={styles.root}> 
      <Text style={styles.title1}>from</Text>
      <Text style={styles.title2}>FACEBOOK</Text>
    </View>
  )
}

export default TextLogo

const styles = StyleSheet.create({
    root : {
        alignItems : 'center',
        display : 'flex'
    },
    title1 : {
        fontWeight : '200'
    },
    title2 : {
        fontWeight : '600',
        letterSpacing : 1.5
    }
})