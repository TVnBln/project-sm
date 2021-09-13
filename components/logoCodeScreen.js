import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

const LogoCodeScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={{width: 110, height: 110}}
            source={require('../images/therrappy.png')}/>
            <Text style={styles.logoText}>therrappy</Text>
        </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText:{
        fontSize:35,
        marginBottom: 20,
        marginTop: 5,
        color: '#ffffff',
        fontFamily: 'BariolBold',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default LogoCodeScreen