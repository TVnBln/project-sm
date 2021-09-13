import React, { FC, useRef, useState, useCallback, } from "react";
import { TextInput, View, StyleSheet, Alert, ImageBackground, Text } from "react-native";
import AnimatedCodeInput from "@brainsbeards/react-native-animated-code-input";
import LogoCodeScreen from '../components/logoCodeScreen';

const CodeScreen = ({route, navigation}) => {
  const [value, setValue] = useState("");

  const onChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const onSubmit = useCallback((value) => {
      console.log(route.params)
    Alert.alert(
      "Done",
      value,
      [{ text: "OK", onPress: () => setValue("") }],
      { cancelable: false }
    );
    if(value == route.params.code){
      navigation.navigate('ResetPasswordScreen', {email: route.params.email})
        console.log('reset')
    } else{
        console.log('you cant reset')
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../images/background2.png')} style={styles.image}>
        <LogoCodeScreen />
        <Text style={styles.titleText}>Verification Code</Text>
            <Text style={styles.messageText}>*Please fill in the code you received down below</Text>
            <AnimatedCodeInput codeContainerStyle={{
                backgroundColor: 'rgba(242,163,193,1)',
                borderRadius: 10,
                marginBottom:360,
            }}
            activeCodeContainerStyle={{
                backgroundColor: 'rgba(242,163,193,0.5)',
            }}
              value={value}
              numberOfInputs={6}
              onChangeText={onChangeText}
              onSubmitCode={onSubmit}
              textColor={'#ffffff'}
            />
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    width: '100%',
  },
  messageText: {
    color: '#ffffff',
    fontFamily: 'BariolRegular',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginLeft: 15,
    marginTop: 110,
    padding: 5,
    fontSize: 20,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'BariolRegular',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 27,
    marginLeft: 120,
    marginBottom: -50,
    marginTop: 20,
  }
});

export default CodeScreen