import { Pressable, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'

import WelcomeArt from '../../../../assets/svg/welcome_page_art.svg'
import { TouchableHighlight } from 'react-native'
import TextLogo from '../../../baseui/TextLogo/TextLogo'

const WelcomeScreen = ({navigation}: {navigation :any}) => {
  return (
    <View style={styles.root}> 
      <View style={styles.top}>
        <Text style={styles.title}>Welcome to WhatsApp</Text>
        <WelcomeArt/>
        <Text style={styles.policy}>Read our <Text style={styles.linkText}>Privacy Policy</Text>. Tap "Agree and continue" to accept the <Text style={styles.linkText}>Terms of Service</Text>.</Text>
        <TouchableHighlight onPress={()=>{navigation.navigate('login_screen')}} style={styles.button}>
          <Text>AGREE AND CONTINUE</Text>
        </TouchableHighlight>
      </View>
      <TextLogo/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  root : {
    display : 'flex',
    height : '100%',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingTop : 100,
    paddingBottom : 100

  },
  title : {
    fontSize : 27,
    fontWeight : '600'
  },
  policy : {
    paddingHorizontal : 20,
    textAlign : 'center',
    fontWeight : '400',
  },
  linkText : {
    color : 'blue'
  },
  button : {
    backgroundColor : '#0991b1',
    width : '55%',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 4,
    color : 'Black',
    fontWeight : '600',
    padding : 10
  },
  top : {
    display : 'flex',
    alignItems : 'center',
    gap : 30
  }


})