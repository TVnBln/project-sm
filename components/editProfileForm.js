import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EditProfileForm = ({navigation}) => {
    return (
        <View style={styles.container}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Full name:"
            placeholderTextColor="#ffffff"
          />
          <TextInput 
            style={styles.inputBox}
            placeholder="Username:"
            placeholderTextColor="#ffffff"
          />
          <TextInput 
            style={styles.inputBox}
            placeholder="Bio:"
            placeholderTextColor="#ffffff"
          />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit</Text>
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
  
  export default EditProfileForm