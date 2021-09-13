import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

import Logo from '../components/logo';
import ChangePasswordForm from '../components/changePasswordForm';


const ChangePasswordScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background2.png')} style={styles.image}>
          <Logo/>
          <ChangePasswordForm type="ChangePassword"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <Text style={styles.signupButton} onPress={() => {navigation.navigate('LoginScreen')}}>Login!</Text>
          </View>
          </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        marginBottom: 20,
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular'
    },
    signupButton: {
        color: '#ffffff',
        fontWeight: '900',
        paddingLeft: 5,
        fontFamily: 'BariolRegular',
        fontSize: 18,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
  });

export default ChangePasswordScreen