import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

import Logo from '../components/logo';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';

const SignupScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/background2.png')} style={styles.image}>
          <Logo/>
          <SignupForm type="Signup"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <Text style={styles.signupButton} onPress={() => {navigation.navigate('LoginScreen')}}>Login!</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(243,164,193,1)',
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        marginBottom: 17,
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular',
    },
    signupButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'BariolBold',
        fontSize: 18,
        marginRight: 20,
        marginBottom: 15,
        paddingLeft: 5,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
  });

export default SignupScreen