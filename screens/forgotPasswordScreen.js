import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

import Logo from '../components/logo';
import ForgotPasswordForm from '../components/forgotPasswordForm';

const ForgotPasswordScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background2.png')} style={styles.image}>
          <Logo/>
          <Text style={styles.forgotText}>Forgot Password!</Text>
          <ForgotPasswordForm navigation={navigation} type="ForgotPassword"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Text style={styles.signupButton} onPress={() => {navigation.navigate('SignupScreen')}}>Signup!</Text>
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
        marginBottom: 35,
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular',
        paddingRight: 5,
    },
    signupButton: {
        color: '#ffffff',
        fontWeight: '900',
        fontFamily: 'BariolBold',
        fontSize: 18,
        paddingRight: 5,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
    forgotText: {
      color: '#ffffff',
      fontFamily: 'BariolRegular',
      fontSize: 27,
      alignItems: 'center',
      marginLeft: 120,
      marginTop: 28,
    }
  });

export default ForgotPasswordScreen