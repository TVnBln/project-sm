import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import { useQuery, gql, useMutation } from '@apollo/client';

const RESETPASSWORD = gql`
  mutation resetPassword($email: String!, $password: String!, $confirmPassword: String!,){
    resetPassword(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ){
      secret,
    }
  }  
`;

const ResetPasswordForm = ({navigation, route}) => {
  const [ResetPassword, data] = useMutation(RESETPASSWORD);
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        ResetPassword({variables:{email: route.params.email, password: data.newpassword, confirmPassword: data.repeatpassword}})
        console.log(data)
        navigation.navigate('LoginScreen')
      } 
    return (
        <View style={styles.container}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput 
                style={styles.inputBox}
                onBlur={onBlur}
                placeholder="New Password:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
                secureTextEntry={true}
              />
            )}
              name="newpassword"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.newpassword && <Text>This is required.</Text>}
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput 
                style={styles.inputBox}
                onBlur={onBlur}
                placeholder="Repeat Password:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
                secureTextEntry={true}
              />
            )}
              name="repeatpassword"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.repeatpassword && <Text>This is required.</Text>}
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
    retrieveText: {
        color: '#ffffff',
        fontFamily: 'BariolRegular',
        alignItems: 'center',
        marginBottom: 40,
        padding: 5,
        fontSize: 14,

    }
  });

export default ResetPasswordForm