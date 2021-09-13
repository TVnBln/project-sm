import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

import Logo from '../components/logo';
import LoginForm from '../components/loginForm';

const LoginScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background2.png')} style={styles.image}>
          <Logo/>
          <LoginForm navigation={navigation} type="Login"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
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
        marginBottom: 10,
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular'
    },
    signupButton: {
        color: '#ffffff',
        fontWeight: '700',
        paddingLeft: 5,
        fontFamily: 'BariolBold',
        fontSize: 18,
        marginRight: 20,
        marginBottom: 15,
        
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
  });

export default LoginScreen