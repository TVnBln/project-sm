import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

import Logo from '../components/logo';
import ResetPasswordForm from '../components/resetPasswordForm';


const ResetPasswordScreen = ({navigation, route}) => {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background2.png')} style={styles.image}>
          <Logo/>
          <Text style={styles.titleText}>Reset Password</Text>
          <ResetPasswordForm route={route} type="ResetPassword"/>
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
        marginBottom: 30,
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular',
        marginRight: 3,
        marginBottom: 10,
    },
    signupButton: {
        color: '#ffffff',
        fontWeight: '900',
        fontFamily: 'BariolBold',
        fontSize: 18,
        marginRight: 15,
        marginBottom: 10,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
    titleText: {
      color: '#ffffff',
      fontFamily: 'BariolRegular',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 27,
      marginLeft: 120,
      marginTop: 28,
    }
  });

export default ResetPasswordScreen