import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'

const ForgotPasswordForm = ({navigation}) => {
  const { control, handleSubmit, errors } = useForm();
  const azureUrl = "https://therrappy.azurewebsites.net/api/passwordForgot?code=HX8zKC7G20EEs0HbawedEWsztQpCH/C00GG4bUtmyTBdE1gq82QC9w=="
  const onSubmit = data => {
    axios.post(azureUrl, {
      email: data.email
    }).then((res) => {
      navigation.navigate('CodeScreen', {code: res.data.code, email: res.data.email})
    }).catch((err) => {
      console.error(err)
    })
  } 
    return (
        <View style={styles.container}>
            <Text style={styles.retrieveText}>*Please enter an email that</Text><Text  style={styles.retrieveText2}>is associated with your account</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput 
                style={styles.inputBox}
                onBlur={onBlur}
                placeholder="Email:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.email && <Text>This is required.</Text>}
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    )
  }

const styles = StyleSheet.create({
    container:{
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 20,
      marginVertical: 20,
    },
    inputBox:{
        width: 300,
        height: 40,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        color: '#ffffff',
        marginVertical: 25,
        fontFamily: 'BariolRegular'
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(145,145,145,1)',
        textAlign: 'center',
        fontFamily: 'BariolBold'
    },
    button: {
        width: 180,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 25,
        marginVertical: 16,
        paddingVertical: 16,
    },
    retrieveText: {
        color: '#ffffff',
        fontFamily: 'BariolRegular',
        alignItems: 'center',
        fontSize: 21,
    },
    retrieveText2: {
      color: '#ffffff',
      fontFamily: 'BariolRegular',
      alignItems: 'center',
      marginBottom: 30,
      fontSize: 21,
  }
  });

export default ForgotPasswordForm