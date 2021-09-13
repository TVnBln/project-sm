import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import { useQuery, gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation Login($email: String!, $password: String! ){
    login(
      email: $email
      password: $password
    ){
      secret,
    }
  }  
`;

const LoginForm = ({navigation}) => {
  const [Login, data] = useMutation(LOGIN);
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    Login({variables:{email: data.email, password: data.password}})
    console.log(data)
  } 

    return (
        <View style={styles.container}>
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
            <Controller
              control={control}
              render={({ onChange, onBlur, value,}) => (
            <TextInput
              style={styles.inputBox}
              onBlur={onBlur}
              placeholder="Password:"
              placeholderTextColor="#ffffff" 
              onChangeText={value => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
          defaultValue=""
          rules={{ required: true }}
          />
          {errors.password && <Text>This is required.</Text>}
            <TouchableOpacity onPress={() => {navigation.navigate('ForgotPasswordScreen')}}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
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
        fontSize: 19,
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
    forgotText: {
      color: '#ffffff',
      fontFamily: 'BariolBold',
      alignItems: 'center',
      marginTop: -20,
      marginBottom: 20,
      marginLeft: 175,
      fontWeight: '700',
      fontSize: 17,
    }
  });

export default LoginForm