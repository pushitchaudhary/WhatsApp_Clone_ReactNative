import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImageSVG from '../../../../assets/svg/loading_background.svg'
import WhatappLogoSVG from '../../../../assets/svg/logo_1.svg'
import TextLogo from '../../../baseui/TextLogo/TextLogo'

const LoadingPage = () => {
  return (
    <View style = {styles.root}>
        <View style = {styles.backgroundImage}>
          <BackgroundImageSVG/>
        </View>
        <View style={styles.Container}>
          <WhatappLogoSVG width={90} height={90}/>
          <Text style={styles.title}>Whatapps</Text>
        </View>
    </View>
  )
}

export default LoadingPage

const styles = StyleSheet.create({
  root : {
    position : 'relative',
  },
  backgroundImage : {
    height : '100%'
  },
  Container : {
    position : 'absolute',
    display : 'flex',
    height : '100%',
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  title : {
    fontWeight : '600',
    fontSize : 25,
    paddingTop : 5
  }
 

})