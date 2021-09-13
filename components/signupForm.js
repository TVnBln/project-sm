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

const SIGNUP = gql`
  mutation Login($email: String!, $password: String!, $name: String!, $username: String!){
    register(
      email: $email
      password: $password
      name: $name
      username: $username
    ){
      secret,
    }
  }  
`;

const SignupForm = () => {
  const [Signup, data] = useMutation(SIGNUP);
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    data.name = data.firstname + ' ' + data.lastname
    Signup({variables:{email: data.email, password: data.password, name: data.name, username: data.username}})
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
                placeholder="First Name:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
              name="firstname"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.firstname && <Text>This is required.</Text>}
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput 
                style={styles.inputBox}
                onBlur={onBlur}
                placeholder="Last Name:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
              name="lastname"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.lastname && <Text>This is required.</Text>}
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput 
                style={styles.inputBox}
                onBlur={onBlur}
                placeholder="Username:"
                placeholderTextColor="#ffffff"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
              name="username"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.username && <Text>This is required.</Text>}
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
              render={({ onChange, onBlur, value }) => (
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
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.password && <Text>This is required.</Text>}

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={styles.buttonText}>Join therrappy!</Text>
            </TouchableOpacity>
        </View>
    )
  }

const styles = StyleSheet.create({
    container:{
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputBox:{
        width: 300,
        height: 35,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        color: '#ffffff',
        marginVertical: 13,
        fontFamily: 'BariolRegular',
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
        marginVertical: 20,
        paddingVertical: 14,
    }
  });

export default SignupForm